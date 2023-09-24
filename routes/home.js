const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const abc = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  image: String
});

const CustomerModel = mongoose.model('customer', abc);

router.get("/", async (req, res, next) => {
  
  try {
    let custs = await CustomerModel.find();
  return res.render('index', {customers: custs});
  } catch (error) {
    console.log(error);
    return null
  }
});


module.exports = router;
