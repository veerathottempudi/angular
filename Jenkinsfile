pipeline {
  agent any
  environment {
    AWS_DEFAULT_REGION="us-east-1"
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'npm run deploy'
      }
    }  
    stage('AWS cred verify') {
      steps {
        withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'aws-cred', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY')]) {
          sh '''
            aws --version
            aws ec2 describe-instances
          '''
        }
      }
    }
  }
}
