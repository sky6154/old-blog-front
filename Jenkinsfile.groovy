#!/usr/bin/env groovy

import jenkins.*
import jenkins.model.*
import hudson.*
import hudson.model.*

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
        
        List<String> deployTargetList = new ArrayList<String>();
      
        if("${env.CURRENT_ENV}" == "blue"){
          list.add("Docker Swarm blue1");
          list.add("Docker Swarm blue2");
          list.add("Docker Swarm blue3");
          overwriteEnv("green")
        }
        else{
          list.add("Docker Swarm green1");
          list.add("Docker Swarm green2");
          list.add("Docker Swarm green3");
          overwriteEnv("blue")
        }
      
        for (String configName : deployTargetList) {
           deploy(configName)
        }
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
          
def deploy(configName){
  sshPublisher(publishers: [
    sshPublisherDesc(
      configName: configName,
      transfers: [
        sshTransfer(sourceFiles: 'blog-front.tar, deploy.sh',
                    execCommand: "cd /workspace && \
                                  chmod 744 ./deploy.sh && \
                                  ./deploy.sh")
      ],
    )
  ])
}

def overwriteEnv(activeEnv){
  Jenkins instance = Jenkins.getInstance()
  def globalNodeProperties = instance.getGlobalNodeProperties()
  def envVarsNodePropertyList = globalNodeProperties.getAll(hudson.slaves.EnvironmentVariablesNodeProperty.class)
  def newEnvVarsNodeProperty = null
  def envVars = null

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
