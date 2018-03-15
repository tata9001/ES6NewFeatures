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
}