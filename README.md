# Menu_Service

Menu Service

This is a simple Menu Microservice built with Node.js, Express, and MongoDB for managing the menu of a food delivery platform. It provides endpoints for managing menu items, such as adding, updating, deleting, and querying menu items based on filters like availability and price.

Features
CRUD operations for Menu Items:

Create, Read, Update, Delete

Filtering:

Filter menu items by availability (true/false)

Filter menu items by price (greater than, less than, or within a range)

Data validation using Mongoose

MongoDB as the database for persistent storage

Table of Contents
Installation

Configuration

Endpoints

How to Use

Testing with Postman

Tech Stack

License

Installation
Follow these steps to set up and run the Menu Service locally.

Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/Menu_Service.git
cd Menu_Service
Install dependencies:

bash
Copy
Edit
npm install
Set up MongoDB:

Ensure you have MongoDB running locally or use a MongoDB service like MongoDB Atlas.

Set the MongoDB URI in the .env file:

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/menuServiceDB
Start the server:

bash
Copy
Edit
npm start
The server will start on http://localhost:3001.

Configuration
The configuration is stored in the .env file.

env
Copy
Edit
PORT=3001
MONGODB_URI=mongodb://localhost:27017/menuServiceDB
Endpoints
1. Create Menu Item
Method: POST

URL: /api/menu

Body (JSON):

json
Copy
Edit
{
  "name": "Margherita Pizza",
  "description": "Classic cheese pizza with tomato",
  "price": 199,
  "available": true
}
Response:

Status: 201 Created

Body: The created menu item object.

2. Get All Menu Items
Method: GET

URL: /api/menu

Query Parameters:

available: Filter items by availability (true or false)

minPrice: Minimum price filter

maxPrice: Maximum price filter

Example:

/api/menu?available=true&minPrice=100&maxPrice=300

Response:

Status: 200 OK

Body: List of menu items that match the filters.

3. Update Menu Item by Name
Method: PUT

URL: /api/menu/:name

Body (JSON):

json
Copy
Edit
{
  "price": 250,
  "available": false
}
Response:

Status: 200 OK

Body: The updated menu item object.

4. Delete Menu Item by Name
Method: DELETE

URL: /api/menu/:name

Response:

Status: 200 OK

Body: A confirmation message.

How to Use
Start the server using npm start.

Use Postman to make requests to the available endpoints.

Make sure you have MongoDB running and connected (locally or via MongoDB Atlas).

Testing with Postman
You can test the API using Postman. Here are the steps:

1. Create a Menu Item
Method: POST

URL: http://localhost:3001/api/menu

Body (raw JSON):

json
Copy
Edit
{
  "name": "Peppy Paneer",
  "description": "Paneer pizza with spicy toppings",
  "price": 269,
  "available": true
}
2. Get All Menu Items
Method: GET

URL: http://localhost:3001/api/menu

3. Filter by Price
Method: GET

URL: http://localhost:3001/api/menu?minPrice=200&maxPrice=300

4. Update a Menu Item by Name
Method: PUT

URL: http://localhost:3001/api/menu/Peppy Paneer

Body (raw JSON):

json
Copy
Edit
{
  "price": 279,
  "available": false
}
5. Delete a Menu Item by Name
Method: DELETE

URL: http://localhost:3001/api/menu/Peppy Paneer

Tech Stack
Node.js – Backend runtime environment

Express – Web framework for Node.js

MongoDB – Database for persistent storage

Mongoose – ODM for MongoDB

Postman – Tool for API testing

License
This project is licensed under the MIT License – see the LICENSE file for details.