// use esversion6
const express = require('express')
const app = express()
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
require('./models/User')
require('./models/Survey')
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose')

mongoose.connect(keys.mongoURI)

app.use(bodyParser.json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)
require('./routes/billingRouts')(app)
require('./routes/surveyRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets and css file
  app.use(express.static('client/build'))
  // Express will serve up the index.html if it doesn't found the route.
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
