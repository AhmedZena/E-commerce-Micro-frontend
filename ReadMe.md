# E-commerce Micro Frontend

This is a simple microfront web application that includes a container, cart, and products, built using JavaScript, Webpack, and Faker.js.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Author](#author)

## Features

- **Container**: The main application shell that integrates other microfrontends.
- **Cart**: A microfrontend for handling shopping cart functionality.
- **Products**: A microfrontend for displaying a list of products.
- **Mock Data**: Uses Faker.js to generate mock data for products.

## Technologies

- JavaScript
- Webpack
- Faker.js

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AhmedZena/E-commerce-Micro-frontend.git

2. Open Container folder:
   ```bash
   cd container
   ```
3. Install dependencies:
   ```bash
    npm install
    ```

4. Open Cart folder:
    ```bash
    cd cart
    ```
5. Install dependencies:
    ```bash
    npm install
    ```
6. Open Products folder:
    ```bash
    cd products
    ```
7. Install dependencies:
    ```bash
    npm install
    ```
## Usage

1. Start the Products microfrontend:
   ```bash
   cd products
   npm start
   ```
2. Start the Cart microfrontend:
   ```bash
    cd cart
    npm start
    ```
3. Start the Container microfrontend:
    ```bash
    cd container
    npm start
    ```
4. Open the browser and navigate to `http://localhost:8080/`.


## Folder Structure
e-commerce-micro-frontend/
├── container/
│   ├── src/
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
├── cart/
│   ├── src/
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
├── products/
│   ├── src/
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
├── .gitignore
├── package.json
└── README.md


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

- **Ahmed Zena** - [AhmedZena](https://www.github.com/AhmedZena)

