
# Node.js URL Shortener Backend
This Node.js backend application serves as a URL shortener, allowing users to register, log in, and create shortened URLs using JWT token-based authentication.

## Features
* User registration and authentication using JWT tokens.
* Create and manage shortened URLs.
* URL redirection to the original long URL.

## Technologies Used
* Node.js
* Express.js
* MongoDB (for storing user information and URLs)
* JWT (JSON Web Tokens) for authentication
* Setup
## Prerequisites
* Node.js installed
* MongoDB installed and running

## Installation
* Clone the repository:

* bash
* Copy code
* git clone https://github.com/your-username/url-shortener-backend.git
* Navigate to the project directory:

* bash
* Copy code
* cd url-shortener-backend
# Install dependencies:

bash
Copy code
npm install
Create a .env file in the project root and configure the following variables:

env
Copy code
PORT=8080
JWT_SECRET=your-jwt-secret-key

Usage
Start the server:

bash
Copy code
npm start
The server will run on the specified port (default is 8080).

Access the API at http://localhost:3000/api.

## API Endpoints
# Authentication
# POST /api/register: Register a new user. Requires a JSON body with name, email, password, and confirmPassword.

# POST /api/login: Login and obtain a JWT token. Requires a JSON body with email and password.

# URL Shortening
# POST /api/url/shorten: Shorten a URL. Requires authentication. Requires a JSON body with originalUrl.

# GET /api/url/:shortenurl: Redirect to the original long URL associated with the provided short code.

## Error Handling
* The API returns appropriate error messages in case of invalid requests, authentication failures, or other errors.
