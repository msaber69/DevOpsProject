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
                sh 'cd server && npm run build'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run tests for your application
                sh 'cd server && npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image using the application files
                sh "export DOCKER_BUILDKIT=1 && docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKER_REGISTRY_PASSWORD', usernameVariable: 'DOCKER_REGISTRY_USERNAME')]) {
                    sh "docker login -u ${DOCKER_REGISTRY_USERNAME} -p ${DOCKER_REGISTRY_PASSWORD}"
                }

                // Push the Docker image to Docker Hub
                sh "docker push ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}"
            }
        }

        stage('Deploy') {
            steps {
                // Run the deploy.sh script
                sh 'chmod +x deploy.sh' // Ensure the script has execute permissions
                sh "./deploy.sh"
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
