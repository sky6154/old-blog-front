node {
  try{
    stage('Checkout'){
      checkout scm
    }
  }
  catch (err){
    currentBuild.result = 'FAILED'
    throw err
  }
}
