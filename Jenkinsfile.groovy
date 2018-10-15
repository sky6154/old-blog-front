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
        
        def deployWorkerList = []
      
        if("${env.CURRENT_ENV}" == "blue"){
          deployWorkerList.add("Docker Swarm blue2")
          deployWorkerList.add("Docker Swarm blue3")
          
          def stepsForParallel = deployWorkerList.collectEntries {
            ["${it}" : deployWorker(it)]
          }
          parallel stepsForParallel
          
          deployManager("Docker Swarm blue1")
          
          overwriteEnv("green")
          
          sh "docker cp /var/deploy_env_conf/green.conf myNginx:/etc/nginx/conf.d/target.conf"
          sh "docker kill -s HUP myNginx"
        }
        else{
          deployWorkerList.add("Docker Swarm green2")
          deployWorkerList.add("Docker Swarm green3")
          
          def stepsForParallel = deployWorkerList.collectEntries {
            ["${it}" : deployWorker(it)]
          }
          parallel stepsForParallel
          
          deployManager("Docker Swarm green1")
          
          overwriteEnv("blue")
          
          sh "docker cp /var/deploy_env_conf/blue.conf myNginx:/etc/nginx/conf.d/target.conf"
          sh "docker kill -s HUP myNginx"
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
          
def deployManager(configName){
  sshPublisher(publishers: [
    sshPublisherDesc(
      configName: configName,
      transfers: [
        sshTransfer(sourceFiles: 'blog-front.tar, deploy-manager.sh',
                    execCommand: "cd /root && \
                                  chmod 744 ./deploy-manager.sh && \
                                  ./deploy-manager.sh")
      ],
    )
  ])
}
    
def deployWorker(configName){
  // We need to wrap what we return in a Groovy closure, or else it's invoked
  // when this method is called, not when we pass it to parallel.
  // To do this, you need to wrap the code below in { }, and either return
  // that explicitly, or use { -> } syntax.
  return {
    sshPublisher(publishers: [
      sshPublisherDesc(
        configName: configName,
        transfers: [
          sshTransfer(sourceFiles: 'blog-front.tar, deploy-worker.sh',
                      execCommand: "cd /root && \
                                    chmod 744 ./deploy-worker.sh && \
                                    ./deploy-worker.sh")
        ],
      )
    ])  
  }
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
