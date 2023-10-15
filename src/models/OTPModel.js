const mongoose= require('mongoose');

const DataSchema= mongoose.Schema(
    {
        email:{type:String},
        otp:{type:String},
        status:{type:Number}
    },
    {versionKey:false, timeStamp:true}
)
module.exports=OTPModel;