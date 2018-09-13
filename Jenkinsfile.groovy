#!/usr/bin/env groovy

node {
  try{
    stage('Checkout'){
      checkout scm
    }
    
    switch(params.JOB){
      case "build&deploy":
        runBuild()
        sh "docker-compose build"
        sh "docker save -o blog-front.tar blog-front:latest"
        sshPublisher(publishers: [
          sshPublisherDesc(
            configName: 'Docker Swarm blue1',
            transfers: [
              sshTransfer(sourceFiles: 'blog-front.tar, deploy.sh',
                          execCommand: "cd /workspace && \
                                        chmod 744 ./deploy.sh && \
                                        ./deploy.sh")
            ],
          )
        ])
          echo "current env : ${env.CURRENT_ENV}"
          
          if($(env.CURRENT_ENV) == "blue"){
            overwriteEnv("green")
          }
          else{
            overwriteEnv("blue")
          }
          
          echo "current env : ${env.CURRENT_ENV}"
      break
      case "build":
        runBuild()
      break
      case "install":
        sh "npm install"
      break
      case "update":
        sh "npm update"
      break
      case "versionCheck":
        sh "npm list --depth=0"
      break
      case "moduleFolderRemove":
        sh "rm -rf ./node_modules"
      break
    }
  }
  catch (err){
    currentBuild.result = 'FAILED'
    println(err.getMessage());
    throw err
  }
}


def runBuild(){
  sh "npm run build"
}
          
def overwriteEnv(activeEnv){
  echo activeEnv
  instance = Jenkins.getInstance()
  globalNodeProperties = instance.getGlobalNodeProperties()
  envVarsNodePropertyList = globalNodeProperties.getAll(hudson.slaves.EnvironmentVariablesNodeProperty.class)

  newEnvVarsNodeProperty = null
  envVars = null

  if ( envVarsNodePropertyList == null || envVarsNodePropertyList.size() == 0 ) {
    newEnvVarsNodeProperty = new hudson.slaves.EnvironmentVariablesNodeProperty();
    globalNodeProperties.add(newEnvVarsNodeProperty)
    envVars = newEnvVarsNodeProperty.getEnvVars()
  }
  else {
    envVars = envVarsNodePropertyList.get(0).getEnvVars()
  }

  envVars.put("CURRENT_ENV", activeEnv)

  instance.save()
}
