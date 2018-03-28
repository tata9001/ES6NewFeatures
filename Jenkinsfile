pipeline {
  agent {
    node {
      label 'devops'
    }
    
  }
  stages {
    stage('test') {
      environment {
        test = 'test'
      }
      steps {
        input 'test'
      }
    }
    stage('ee') {
      steps {
        echo 'test'
      }
    }
  }
  environment {
    a1 = 'a12'
  }
}