pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        echo 'tes2'
        git(url: 'test', branch: 'test', poll: true, credentialsId: 'test')
        timeout(time: 1) {
          sh 'e'
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
        stage('t') {
          steps {
            sh 'te'
          }
        }
      }
    }
    stage('test22') {
      parallel {
        stage('test2') {
          steps {
            input 'test'
            echo 'test'
          }
        }
        stage('error') {
          steps {
            retry(count: 2) {
              echo '2'
            }
            
          }
        }
      }
    }
    stage('ww') {
      steps {
        waitUntil() {
          sh 'test'
        }
        
      }
    }
  }
}