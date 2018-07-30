pipeline {
  agent any
  
  environment {
    REVISION = "latest"
  }
  
  stages {
    stage('Checkout'){
      steps {
        checkout scm
        echo "TEST"
      }
    }
  }
}
