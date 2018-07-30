pipeline {
  agent any
  
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
