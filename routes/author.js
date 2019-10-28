const express     = require('express'),
      router      = express.Router(),
      controller  = require('../controllers/author.js'),
      Author      = require('../models/author.js'),
      models      = { Author }

// List all authors
router.get('/', controller.index.bind(null, models))

// Show one author
router.get('/:id', controller.showOne.bind(null, models))

// Create a new author
router.post('/', controller.create.bind(null, models))

// Delete a author
router.delete('/:id', controller.deleteOne.bind(null, models))

// Edit a author
router.put('/:id', controller.editOne.bind(null, models))


module.exports = router
