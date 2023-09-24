// Import packages
const express = require("express");
const home = require("./routes/home");
let path = require('path');
// Middlewares
const app = express();
app.use(express.json());

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

//connect db
const mongoose = require('mongoose')
const URL = "mongodb+srv://bestsuovn:3KQoggmjehcSKISH@cluster0.recfwmr.mongodb.net/product?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(
      URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

connectDB()