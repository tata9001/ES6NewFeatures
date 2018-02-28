pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            sh 'echo test'
          }
        }
        stage('test2') {
          steps {
            echo 'tes2'
          }
        }
      }
    }
    stage('push') {
      parallel {
        stage('push') {
          steps {
            echo 'push'
          }
        }
        stage('push2') {
          steps {
            echo 'push2'
          }
        }
      }
    }
    stage('deploy') {
      parallel {
        stage('deploy') {
          steps {
            echo 'deploy'
          }
        }
        stage('deploy2') {
          steps {
            echo 'deploy2'
          }
        }
      }
    }
    stage('test22') {
      parallel {
        stage('test2') {
          steps {
            input(message: 'test', id: 'test', ok: 'test', submitter: 'test', submitterParameter: 'test')
            echo 'test'
          }
        }
        stage('') {
          steps {
            retry(count: 2) {
              echo '2'
            }
            
          }
        }
      }
    }
  }
}