# Tour Booking Application

## Overview
This is a full-stack web application for booking tours. It includes both a **frontend** and a **backend**. The frontend is responsible for providing the user interface, and the backend manages tour data, reviews, bookings, and user authentication.

- **Frontend**: A React-based user interface for booking tours, reviewing them, and viewing details.
- **Backend**: A Node.js/Express API that handles requests for tours, reviews, bookings, and authentication.

## Features
- Browse available tours
- Rate and review tours
- Make bookings for tours
- User authentication (login/signup)
- Tour details with booking information

## Tech Stack
- **Frontend**:
  - React.js
  - React Router for routing
  - React-Toastify for toast notifications
  - Reactstrap for UI components
  - Axios for API requests
  - CSS/SCSS for styling

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database
  - JWT (JSON Web Tokens) for user authentication

- **Other**:
  - dotenv for environment variables
  - nodemon for development server reloading

## Directory Structure

### Backend
- **controllers**: Contains all controllers for handling API requests.
  - `authController.js`: Handles user authentication and registration.
  - `bookingController.js`: Manages booking creation and retrieval.
  - `reviewController.js`: Manages review creation and retrieval.
  - `tourController.js`: Handles tour-related operations.
  - `userController.js`: Handles user-related operations.

- **models**: Contains Mongoose models for database schemas.
  - `Booking.js`: Schema for booking data.
  - `Review.js`: Schema for reviews.
  - `Tour.js`: Schema for tours.
  - `User.js`: Schema for users.

- **routes**: Contains all the route files for API endpoints.
  - `auth.js`: Routes for authentication.
  - `bookings.js`: Routes for booking-related actions.
  - `reviews.js`: Routes for handling reviews.
  - `tour.js`: Routes for tour-related actions.
  - `user.js`: Routes for user-related actions.

- **utils**: Helper utilities like configuration files and environment variables.
  - `.env`: Environment variables for sensitive data.

### Frontend
- **src**: Contains all the source code for the frontend.
  - **assets**: Static assets like images, icons, etc.
  - **components**: Reusable UI components.
  - **context**: Provides global state for authentication and user sessions.
  - **hooks**: Custom hooks for handling API requests and other functionalities.
  - **pages**: Different pages like home, tour details, login, register, etc.
  - **shared**: Shared components like navbar, footer, etc.
  - **styles**: CSS files for styling.
  - **utils**: Utility functions, including configuration and API services.

- **public**: Static files that are publicly accessible.

- **index.js**: Main entry point for the frontend React application.

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/HozefaSelim/tour-management
2. Navigate to the backend directory:
    ```bash
      cd backend
3. Install dependencies:
    ```bash
      npm install
4. Create a .env file in the backend directory with the following variables:
   ```bash
      PORT=5000
      MONGO_URI=<your_mongo_database_uri>
      JWT_SECRET=<your_jwt_secret_key>
5. Run the backend server:
    ```bash
      npm run start-dev
#Frontend
1. Navigate to the frontend directory:
   ```bash
      cd frontend  
2. Install dependencies:
    ```bash
      npm install
3.Start the frontend development server:
    ```bash
        npm start

#Contact
For any inquiries or contributions, please contact us at: huzeyfeselim.dev.job@gmail.com
