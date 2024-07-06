# Millicent Frontend

This is a frontend project built with React.js and Tailwind CSS. The application is responsive across all breakpoints and includes dynamic data handling in a dashboard, with features like search functionality in a table to display searched data.

## Live Website

You can view the live version of the website [here](https://millicent-second-assignment.netlify.app/).

## Repository

You can find the source code for this project in the GitHub repository [here](https://github.com/Swarup4545/millicent-frontend).

## Features

- Responsive design using Tailwind CSS
- Dynamic data handling in a dashboard
- Search functionality in tables
- Hooks for managing state and side effects in React

## Installation

To set up the project locally, follow these steps:
Install dependencies
Run the application
npm install
Installing React.js:-
   npx create-react-app my-project
   cd my-project
Installing Tailwind CSS:- 
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
Update the tailwind.config.js file with the paths to all of your template files:-
   /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Open the ./src/index.css file and add the following lines:-
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### Prerequisites

- Node.js and npm installed on your machine

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Swarup4545/millicent-frontend.git
   cd millicent-frontend
