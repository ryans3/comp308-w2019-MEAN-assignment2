
/**
 *<!--
Name of File: index.js
Name: Ryan Sterling
Student Number: 300509648
Date: 3/26/2019
-->
 
 */
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);


/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
