# Authentication App

This is a simple Node.js authentication application built with **Express**, **EJS**, and **CSS** for user registration, login, and dashboard. This app demonstrates user authentication, session management, and basic error handling.

## Features

- User Registration
- User Login
- Protected Dashboard (accessible only after login)
- Logout functionality

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

If you don’t have **Node.js** and **npm** installed, download and install it from [Node.js official website](https://nodejs.org/).

## Getting Started

Follow these steps to set up and run the application locally:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/auth-app.git
cd auth-app
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

This will install the required packages listed in the `package.json` file, including Express, EJS, and other dependencies.

### 3. Set up Environment Variables

- Rename the .env.template file to .env
- Insert your configuration details

### 4. Run the application

After installing the dependencies and configuring the `.env` file, you can start the application by running:

```bash
npm run start
```

By default, the application will run on `http://localhost:3000`.

### 5. Accessing the application

Once the server is running, open your browser and visit the following URLs:

- Homepage: `http://localhost:3000/`
- Register: `http://localhost:3000/register`
- Login: `http://localhost:3000/login`
- Dashboard (requires login): `http://localhost:3000/dashboard`

### 6. Example Flow

1. Register: Navigate to /register and create a new account by providing a username and password.
2. Login: After registration, navigate to /login and log in using the credentials you just created.
3. Dashboard: After logging in successfully, you will be redirected to the dashboard where you can view user information.
4. Logout: You can log out from the dashboard by clicking the logout button, which will end your session and redirect you to the homepage.
