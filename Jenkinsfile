pipeline {
  agent any
  stages {
    stage('test') {
      environment {
        test = 'test'
      }
      steps {
        input 'test'
      }
    }
  }
  environment {
    a1 = 'a12'
  }
}