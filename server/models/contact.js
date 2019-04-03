/**
 * <!--
Name of File: contact.js
Name: Ryan Sterling
Student Number: 300509648
Date: 3/26/2019
-->

 */
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);