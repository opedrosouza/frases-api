const mongoose = require('mongoose')

AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  frases: [String],
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

Author = mongoose.model('Author', AuthorSchema)

module.exports = Author
