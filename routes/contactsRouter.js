const express = require("express");
const routes = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contactsController");
const validateTokenHandle = require("../middleware/validateTokenHandle");

routes.use(validateTokenHandle);
//routes all contacts
routes.route("/").get(getContacts).post(createContact);

//routes contact by id
routes.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = routes;
