// List all authors
const index = async({ Author }, req, res) => {
  const authors = await Author.find()

  res.json(authors)
}

// Show one author
const showOne = async({ Author }, req, res) => {
  const author = await Author.findById(req.params.id)

  res.json(author)
}

// Create new author
const create = async({ Author }, req, res) => {
  const author = new Author(req.body)

  try {
    await author.save()
    res.json(author)
  } catch (e) {
    res.json(e.message)
  }
}

// Delete a author
const deleteOne = async({ Author }, req, res) => {
  const author = await Author.findById(req.params.id)

  author.remove()
  res.json({
    success: true,
    message: "Author deleted."
  })
}

const editOne = async({ Author }, req, res) => {
  const author = await Author.findById(req.params.id)

  author.name = req.body.name

  try {
    await author.save()
    res.json(author)
  } catch (e) {
    res.json(e.message)
  }
}

module.exports = {
  index, showOne, create, deleteOne, editOne
}
