const express     = require('express'),
      mongoose    = require('mongoose'),
      bodyParser  = require('body-parser'),
      cors        = require('cors'),
      mongo       = process.env.MONGO || 'mongodb://localhost/frases-api',
      port        = process.env.PORT || 3001,
      app         = express()

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var whitelist = ['http://localhost:3000', 'http://orcafascio.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors())

// routes
authors = require('./routes/author')
frases  = require('./routes/frases')
app.use('/authors', authors)
app.use('/frases', frases)

// starting server and mongodb
mongoose.Promisse = global.Promisse
mongoose
  .connect(mongo, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => console.log(`API Server running on port: ${port}`))
  })
  .catch(e => console.log(e.message))
