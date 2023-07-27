const express = require('express');
const router = express.Router();
const cors= require('cors')
const {test, registerUser, loginUser, getProfile}= require('../controllers/authControllers')

// middleware
router.use(
    cors({
        credentials: true,
        origin:['http://localhost:5174', 'http://localhost:5173']
    })
)

//API endpoints
router.get('/', test)
router.post('/register', registerUser)
//login endpoints
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.get('/profile', getProfile)
router.get('/Dashboard', getProfile)

module.exports = router