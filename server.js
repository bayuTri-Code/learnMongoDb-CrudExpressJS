const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection.js');
const dotenv = require('dotenv').config();


connectDb();
const app = express();

const port = process.env.PORT || 3003;


app.use(express.json());
app.use("/api/contacts", require('./routes/contactsRouter'));
//middleware for error handling
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});