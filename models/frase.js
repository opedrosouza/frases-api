const mongoose = require('mongoose')

const FraseSchema = new mongoose.Schema({
  authorId: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    default: "Desconhecido"
  },
  frase: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

const Frase = mongoose.model('Frase', FraseSchema)

module.exports = Frase
