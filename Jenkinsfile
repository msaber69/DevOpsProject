pipeline {
    agent any
    
    tools {
        dockerTool 'docker'
        nodejs 'nodejs'
    }

    environment {
        DOCKER_IMAGE_NAME = 'my-node-app'
        DOCKER_IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the Git repository
                git branch: 'main', url: 'https://github.com/msaber69/DevOpsProject.git'
            }
        }

        stage('Build') {
            steps {
                // Install Node.js dependencies and build
                sh 'cd server && npm install && npm run build'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run tests for your application
                sh 'cd server && npm test'
            }
        }

        stage('Deploy') {
            steps {
                 // Install Node.js dependencies, build and deploy
                sh 'cd server && npm install && npm run build && npm run start'
            }
        }

    }

    post {
        always {
            // Clean up after the build, e.g., remove temporary Docker containers or volumes
            sh "docker system prune -af"
        }
        success {
            echo 'Build successful! Your application is deployed on "http://localhost:8080".'
        }
        failure {
            echo 'Build failed! Check the logs for errors.'
        }
    }
}
