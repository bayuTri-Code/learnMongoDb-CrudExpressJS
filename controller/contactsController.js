const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//desc get all contacts
//route GET /api/contacts
//access private
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({user_id: req.user.id});
  res.status(200).json(contact);
});

//desc get contact by id
//route GET /api/contacts/:id
//access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});


//desc create contacts
//route POST /api/contacts
//access private
const createContact = asyncHandler(async (req, res) => {
  console.log("this is create contact", req.body);
  const { name, email, telepon } = req.body;

  if (!name || !email || !telepon) {
    res.status(400);
    throw new Error("all fields are required !");
  }
  const contact = await Contact.create({
    name,
    email,
    telepon,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

//desc update contacts
//route PUT /api/contacts/:id
//access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User does not have permission to access this contact");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});

//desc delete contacts
//route DELETE /api/contacts/:id
//access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User does not have permission to access this contact");
  }
  await Contact.findByIdAndDelete({_id: req.params.id});
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
