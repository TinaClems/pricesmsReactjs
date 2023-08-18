const express = require('express');
 require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose')
const  cookieParser = require('cookie-parser')
const app = express();

 //database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log ('Database Connected'))
.catch((err) => console.log("Database not connected", err))
app.use(cors());

//middleware
// Middleware functions in Express are functions that have access
//  to the request and response objects of an HTTP request-response cycle. They can perform 
// tasks like modifying request or response data, terminating the request-response 
// cycle, or passing control to the next middleware function.
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

 app.use('/', require('./routes/authRoutes'))

 const port = 8001;
 app.listen(port, () => console.log(`Server is running on port ${port}`))