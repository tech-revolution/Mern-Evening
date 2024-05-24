const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json());
const userRoute = require("./routes/userRoutes");
const cors = require("cors");
app.use(cors());




const mongoose = require("mongoose");
mongoose.connect(process.env.URI).then(()=>{
    console.log("Database Connected")
    app.listen(process.env.PORT)
}).catch((error)=>{
    console.log("Database connection failed", error)
})

app.use(userRoute);

