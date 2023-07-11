const Document = require("../models/Document");
const mongoose = require("mongoose");


//Function to retrieve all documents

const getAllDocuments = async (req, res) => {
  const documents = await Document.find({}, "id");
  res.status(200).json(documents);
};



//Function to get or create a single document
const getOrCreateDocument = async (id) => {
  if (id == null) return;
  console.log(id);
  const document = await Document.findOne({ id: id }).exec();
  if (document) {
    console.log("hi", document);
    return document;
  } else {
    console.log("hello");
    return await Document.create({ id: id, data: " " });
  }
};



//Function to update the document 
const updateDocument = async (id, data) => {
  console.log("update is here");
  let document = await Document.findOneAndUpdate(
    { id: id },
    { data: data } 
  );
};



module.exports = { getOrCreateDocument, updateDocument, getAllDocuments };
