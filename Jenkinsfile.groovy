pipeline {
  agent any
  
  environment {
    REVISION = "latest"
  }
  
  stages {
    stage('Checkout'){
      checkout scm
      echo "TEST"
    }
  }
}
