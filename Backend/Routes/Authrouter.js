const { signup, login } = require('../Controllers/Controller');
const { signupValidation, loginValidation } = require('../Middleware/Authvalidation');

const router = require('express').Router();


router.post('/signup', signupValidation,signup)
router.post('/login', loginValidation,login)

module.exports = router;