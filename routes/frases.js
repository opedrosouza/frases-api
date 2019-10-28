const express     = require('express'),
      router      = express.Router(),
      controller  = require('../controllers/frases'),
      Frase       = require('../models/frase'),
      Author      = require('../models//author')
      models      = { Frase, Author }

// List all frases
router.get('/', controller.index.bind(null, models))

// Show a frase
router.get('/:id', controller.showOne.bind(null, models))

// Create a new frase
router.post('/', controller.create.bind(null, models))

// Delete a frase
router.delete('/:id', controller.deleteOne.bind(null, models))

// Edit a frase
router.put('/:id', controller.editOne.bind(null, models))

module.exports = router
