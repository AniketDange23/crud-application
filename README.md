

## CRUD Application with MERN Stack and Material-UI
This is a simple CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express.js, React, Node.js) with a JSON server and Material-UI for the user interface.

##App Screenshot
![Screenshot (99)](https://github.com/AniketDange23/crud-application/assets/79039437/b9fc58ad-2711-41fb-a503-867e4e8421ed)

![Screenshot (100)](https://github.com/AniketDange23/crud-application/assets/79039437/c85f3e9f-cf8f-4b63-8a46-1c78ab97968a)


### Features
Create, Read, Update, and Delete operations on data.
User-friendly Material-UI interface.
Data storage using a MongoDB database.
JSON server for API development and testing.
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your development machine.
MongoDB installed and running locally or at a remote server.
Git installed for version control (optional).
Installation
#### Clone the repository:

bash

git clone https://github.com/your-username/your-crud-app.git
Navigate to the project directory:

bash

cd your-crud-app
Install server dependencies:

bash

cd server
npm install
Install client dependencies:

bash

cd ../client
npm install
Create a .env file in the server directory and set the following environment variables:

makefile

PORT=5000
MONGO_URI=your_mongodb_connection_uri
Start the JSON server for API development:

bash
npm run server
Start the React app:

Copy code
npm start
## Usage
Open the app in your browser at http://localhost:3000.
Use the Material-UI interface to perform CRUD operations on the data.
Data is stored and retrieved from the MongoDB database via the JSON server.
API Endpoints

GET /api/items - Get all items
GET /api/items/:id - Get a specific item by ID
POST /api/items - Create a new item
PUT /api/items/:id - Update an item by ID
DELETE /api/items/:id - Delete an item by ID
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any problems or have suggestions for improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to the creators of the MERN stack, JSON server, and Material-UI for their excellent tools and documentation.
Contact
If you have any questions or need further assistance, feel free to contact the project maintainers:

Aniket Dange-Aniketdange2321@gmail.com
