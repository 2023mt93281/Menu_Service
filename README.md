# Menu_Service

## Overview

**Menu Service** is a microservice built using 
- **Node.js**, 
- **Express**, and 
- **MongoDB**, 
designed to manage food menu items for a food delivery platform. This service enables users to create, read, update, delete, and filter menu items based on availability and price.

---

## Features

- **CRUD Operations** for menu items
- **Filtering Support**:
  - By availability (`true` / `false`)
  - By price range (`minPrice`, `maxPrice`)
- **MongoDB Integration** using Mongoose
- Lightweight and modular Express setup
- Easily testable with Postman

---

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [How to Use](#how-to-use)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/2023mt93281/Menu_Service.git
cd Menu_Service
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up MongoDB
```bash
PORT=3001
MONGODB_URI=mongodb://localhost:27017/menuServiceDB
```

### 4. Start the Server
```bash
npm start
```
The server will run on http://localhost:3001.


## Configuration
All configuration is managed via the .env file.

```bash
PORT=3001
MONGODB_URI=mongodb://localhost:27017/menuServiceDB
```

## API Endpoints

### 🔧 CRUD Endpoints

| Method | Endpoint             | Description                              |
|--------|----------------------|------------------------------------------|
| POST   | /api/menu            | Create a new menu item                   |
| GET    | /api/menu            | Get all menu items (supports filtering)  |
| PUT    | /api/menu/item_id    | Update a menu item by ID                 |
| DELETE | /api/menu/item_id    | Delete a menu item by ID                 |
| PUT    | /api/menu/:name      | Update a menu item by name               |
| DELETE | /api/menu/:name      | Delete a menu item by name               |

---

### 🔍 Filtering Supported Endpoints – Examples

| Method | Endpoint                         | Description                                |
|--------|----------------------------------|--------------------------------------------|
| GET    | /api/menu?available=true         | Get **Available** menu items               |
| GET    | /api/menu?minPrice=200           | Get menu items of Price **more than** ₹200     |
| GET    | /api/menu?maxPrice=500           | Get menu items of Price **less than** ₹500     |


## How to Use

1. Start the server using npm start.
2. Use Postman or any REST client to make API calls.
3. Ensure MongoDB is connected and accessible locally or through a cloud provider.
