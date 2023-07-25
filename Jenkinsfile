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

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'cd server && npm install'
            }
        }

        stage('Build') {
            steps {
                // Install Node.js dependencies
                sh 'cd server && npm build'
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
                // Run tests for your application
                sh 'cd server && npm run start && cd .. && cd vue && npm run serve'
            }
        }
        
    }

    post {
        always {
            // Clean up after the build, e.g., remove temporary Docker containers or volumes
            sh "docker system prune -af"
        }
        success {
            echo 'Build successful! Deploy your application.'
        }
        failure {
            echo 'Build failed! Check the logs for errors.'
        }
    }
}
