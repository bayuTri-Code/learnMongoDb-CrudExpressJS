const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


//desc get all contacts
//route GET /api/contacts
//access public
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json(contact);
});

//desc get contact by id
//route GET /api/contacts/:id
//access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contacts ${req.params.id}` });
});

//desc create contacts
//route POST /api/contacts
//access public
const createContact = asyncHandler(async (req, res) => {
  console.log("this is create contact", req.body);
  const { name, email, telepon } = req.body;

  if(!name || !email || !telepon) {
    res.status(400);
    throw new Error("all fields are required !");
  }
  res.status(200).json({ message: "create contacts" });
});

//desc update contacts
//route PUT /api/contacts/:id
//access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contacts ${req.params.id}` });
});

//desc delete contacts
//route DELETE /api/contacts/:id
//access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleted contacts ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
