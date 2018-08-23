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
              sshTransfer(sourceFiles: 'blog-front.tar',
                          execCommand: "cd /workspace && \
                                        docker service rm blog-front && \
                                        docker rmi blog-front:latest && \
                                        docker load < blog-front.tar && \
                                        docker service create --name blog-front --replicas 3 --publish 80:80 blog-front:latest")
            ],
          )
        ])
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
