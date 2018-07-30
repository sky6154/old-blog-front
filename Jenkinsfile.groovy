pipeline {
  agent any
  
  parameters {
     choice(choices: 'build&deploy\build\install\update\versionCheck', description: '작업 선택', name: 'JOB')
  }
  
  environment {
    REVISION = "latest"
  }
  
  node{
    stage('Checkout'){
      checkout scm
      echo "TEST"
    }
  }
}
