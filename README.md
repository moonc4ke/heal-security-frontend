# Heal Security Restaurant Frontend Application

This is a Vue.js application that interacts with a Rails API to display restaurant data. The application uses Axios to fetch data and Vue Router for navigation.

## Prerequisites
- Node.js (preferably the latest LTS version)
- npm (usually comes with Node.js)

## Setup Instructions

1. **Clone the Repository**
First, clone the repository to your local machine.

```bash
git clone https://github.com/moonc4ke/heal-security-frontend.git
cd heal-security-frontend
```

2. **Install Dependencies** Install the necessary Node.js dependencies including Vue CLI, Axios, and Vue Router.

```bash
yarn install

or

npm install
```

3. **Serve Application** To start the application in development mode, run:
   
```bash
yarn dev

or

npm run dev
```
This will compile the application and serve it on http://localhost:5173 by default.

## Configuring the API URL

By default, the application expects the Rails API to be running on http://localhost:3000. If your API is running on a different port or URL, you will need to update Rails Rest API URL in the .env file.