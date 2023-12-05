const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  // Add other relevant fields
});

const FileModel = mongoose.model('File', fileSchema);

module.exports = FileModel;
