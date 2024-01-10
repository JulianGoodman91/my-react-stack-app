// import modules (installing all the packages like express mongo etc here)
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors"); 
require("dotenv").config();

// app 
const app = express();




// db (mongodb using mongoose)
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})  
    .then(() => console.log("DataBase Connected :)"))
    .catch(err => console.log("DataBase CONNECTION ERROR", err));



// middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));



// routes (importing routes and using them)
const testRoutes = require("./routes/test");
app.use("/", testRoutes)



// port
const port = process.env.PORT || 8080;

// Listener
const server = app.listen(port, () => 
    console.log(`Server is running on ${port}.`)
);
