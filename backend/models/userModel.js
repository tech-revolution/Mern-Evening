const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        age:{
            type:Number
        }
    },{
        timestamps:true
    }
);

const User = mongoose.model("User",userDataSchema);

module.exports = User;