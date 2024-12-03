const express = require('express');
const mongoose = require('mongoose');

//THIS REQUIRES A .env FILE WITH MONGODB_URI and PORT

const dotenv = require('dotenv');
dotenv.config();
const Recipe = require('./models/Recipe'); // import recipe schema


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB', error));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Express and Mongoose!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
