const express = require('express');
const mongoose = require("mongoose")
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const dotenv = require("dotenv");
dotenv.config()
// import routes
const authRoutes = require('./routes/auth.js')
const userRoutes = require('./routes/user.js')

//app
const app = express();
//db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("DB Connected"))
// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
//routes middleware
app.use('/api', authRoutes)
app.use('/api', userRoutes)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})