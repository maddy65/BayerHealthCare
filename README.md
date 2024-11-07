Bayer Project

This project is a microservices-based full-stack application for the healthcare domain, specifically designed to manage healthcare services like appointment scheduling, doctor details, and more. The backend consists of multiple services, including an appointment service (HealthCareService), and the frontend is built with React to provide a user-friendly interface.
Project Structure

The project consists of the following components:

    Backend:
        HealthCareService: A microservice responsible for managing appointments, user data, and doctor information.

    Frontend:
        A React-based frontend that interacts with the backend to allow users to schedule appointments and view doctor availability.

    CI/CD:
        GitHub Actions workflows for automating build, test, and deployment processes.

    Database:
        MongoDB for persistent data storage.

Getting Started

Follow the steps below to set up the project locally.
Prerequisites

    Docker and Docker Compose installed on your local machine.
    Node.js .
    Git for version control.

Cloning the Repository

    Clone the repository to your local machine:

    git clone https://github.com/BayerHealthCare.git
    cd healthcare-microservices

Backend Setup (HealthCareService)

    Navigate to the backend service directory:

cd backend/HealthCareService

Install dependencies (if not using Docker for backend development):

    npm install

    Set up MongoDB connection:
        Configure MongoDB URI in your .env file or through environment variables.

Frontend Setup

    Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Run the frontend development server:

    npm start

Running with Docker

If you want to run the application using Docker, follow these steps:

    From the root directory of the project, run the following command to start all services (frontend, backend, and MongoDB):

    docker-compose up --build

    The frontend should be available at http://localhost:80, and the backend should be available at http://localhost:8001.

Running with Docker Compose

To manage your entire application stack with Docker Compose, run the following from the project root:

docker-compose up

This will bring up the frontend, backend, and MongoDB containers. The services are connected via a Docker network, so they can communicate with each other.
Database

The project uses MongoDB for data storage. Docker Compose will automatically set up a MongoDB container. The backend connects to MongoDB via the connection string defined in the docker-compose.yml file.

    MongoDB can be accessed on port 27017.
    Database connection details are provided as environment variables to the backend service.

CI/CD Pipeline

The CI/CD pipeline is defined in the .github/workflows/ directory. It automates the following steps:

    Build: Docker images for frontend and backend are built.
    Test: Unit and integration tests are executed.
    Deploy: Once tests pass, the application is deployed to the desired environment.

GitHub Actions

The workflow file in .github/workflows/ is responsible for running the CI/CD pipeline on GitHub. It can automatically build, test, and deploy your application when code is pushed to the repository.
Docker Compose Services

    Frontend: Built and served by Nginx (configured in frontend/Dockerfile).
    Backend (HealthCareService): Built using Node.js (configured in backend/HealthCareService/Dockerfile).
    MongoDB: Used for persistent data storage.

Project Development Workflow

    Clone the repository and create a feature branch:

git checkout -b feature/<branch-name>

Make changes to the backend or frontend as needed. Push your changes:

    git push origin feature/<branch-name>

    Create a Pull Request for code review and merge to the main branch.

Tech Stack

    Frontend: React.js
    Backend: Node.js with Express
    Database: MongoDB (or DynamoDB in the future)
    Containerization: Docker, Docker Compose
    CI/CD: GitHub Actions
    API: RESTful API

License

This project is licensed under the MIT License - see the LICENSE file for details.
