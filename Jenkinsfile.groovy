node {
  try{
    stage('Checkout'){
      checkout scm
      
      echo params.JOB
    }
  }
  catch (err){
    currentBuild.result = 'FAILED'
    throw err
  }
}
