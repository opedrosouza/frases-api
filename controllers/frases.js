// List all frases
const index = async({ Frase }, req, res) => {
  const frases = await Frase.find()

  res.json(frases)
}

// Show a frase
const showOne = async({ Frase }, req, res) => {
  const frase = await Frase.findById(req.params.id)

  res.json(frase)
}

// Create a new Frase
const create = async({ Frase, Author }, req, res) => {
  const author  = await Author.findById(req.body.authorId)
  const frase   = new Frase({
    authorId: author.id,
    authorName: author.name,
    frase: req.body.frase
  })

  try {
    await frase.save()
    if (author) {

    }
    res.json(frase)
  } catch (e) {
    res.json(e.message)
  }
}

// Delete a frase
const deleteOne = async({ Frase }, req, res) => {
  const frase = await Frase.findById(req.params.id)

  frase.remove()
  res.json({
    success: true,
    message: "Frase deleted."
  })
}

// Edit a frase
const editOne = async({ Frase }, req, res) => {
  const frase = await Frase.findById(req.params.id)
  if (req.body.authorId) {
    frase.authorId  = req.body.authorId    
  }

  frase.frase     = req.body.frase

  try {
    await frase.save()
    res.json(frase)
  } catch (e) {
    res.json(e.message)
  }
}

module.exports = {
  index, showOne, create, deleteOne, editOne
}
