const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3003;

app.use(express.json());
app.use("/api/contacts", require('./routes/contactsRouter'));
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});