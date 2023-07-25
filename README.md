# Project small-report

This project aims to implement a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js application using Jenkins as the automation tool. The primary goal of this project is to automate the build, testing, and deployment processes to ensure a smooth and efficient development workflow.

## Authors 

Mohammed Saber BELLAAZIRI - Huiting FENG - Theo CANARIO - Simon CHOUKROUN - Camille FOUR - Maximilien BILDSTEIN - Bouthayna ATIK 

## The node app

The application we used in this project is a node application that we developped in last semester, you can find the initial readme file inside the server folder as INITREADME.md. 

## CI/CD Pipeline Overview

The CI/CD pipeline consists of several stages, each with specific tasks:

1. **Checkout:** This stage retrieves the source code from the GitHub repository.

2. **Install Dependencies:** In this stage, the Node.js dependencies are installed using the `npm install` command.

3. **Build:** The Node.js application is built using the `npm run build` command.

4. **Run Tests:** The application's unit tests are executed using the `npm test` command to ensure the code quality.

5. **Deploy:** In this stage, the application is deployed to a target server using the modified `deploy.sh` script. The `deploy.sh` script contains the deployment commands specific to your application.

## Deployment Considerations

The deployment process is managed through the `deploy.sh` script, which executes various Docker commands to deploy the application to a target server. The script is run automatically by Jenkins after the build and push stages.

As the Docker image is built manually on the developer's local machine, it should be thoroughly tested and validated before deployment. After manual validation, the image can be pushed to a container registry if required. Jenkins takes over the deployment process by running the `deploy.sh` script, ensuring the consistency of the deployment workflow.

<img width="1431" alt="Screenshot 2023-07-25 at 07 02 09" src="https://github.com/msaber69/DevOpsProject/assets/99510825/7584c67f-943c-4b6c-bd67-b6691c79dfbe">

## Final result (Build-Test-Deploy)

<img width="1440" alt="Screenshot 2023-07-25 at 07 08 40" src="https://github.com/msaber69/DevOpsProject/assets/99510825/116c4fc2-398b-4150-adb0-41ad5013b210">


## Conclusion

This project showcases the implementation of a robust CI/CD pipeline using Jenkins to automate the build, testing, and deployment processes for a Node.js application. Developers have the flexibility to build and test the Docker image manually on their local machines before deploying it using Jenkins. The pipeline ensures a smooth development workflow and aids in maintaining the application's quality and reliability throughout the development lifecycle.
