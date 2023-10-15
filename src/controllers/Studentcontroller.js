const StudentsModel = require('../models/StudentsModel');
const jwt= require('jsonwebtoken');

// create
exports.create=async (req,res)=>{
try{
    let reqBody=req.body;
    let result= await StudentsModel.create(reqBody);
    res.status(200).json({status:"success",data:result})
}
catch(e){
    res.status(200).json({status:"fail",data:e.toString()});
}
};


// read
exports.read= async (req,res)=>{
    try{
        let result=await StudentsModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch(e){
        res.status(200).json({status:"fail",data:e.toString()});
    }
};


// delete
exports.delete= async (req,res)=>{
    try{
        let id= req.params.id;
        let result=await StudentsModel.deleteOne({_id:id});
        res.status(200).json({status:"success",data:result})
    }
    catch(e){
        res.status(200).json({status:"fail",data:e.toString()});
    }
};


// update
exports.update= async (req,res)=>{
    try{
        let id= req.params.id;
        let reqBody=req.body;
        let result=await StudentsModel.updateOne({_id:id},reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch(e){
        res.status(200).json({status:"fail",data:e.toString()});
    }
};



// login
// exports.login= async (req,res)=>{
//     try{
//         // let id= req.params.id;
//         let reqBody=req.body;
//         let result=await StudentsModel.find(reqBody).count();
//         res.status(200).json({status:"success",data:result})
//     }
//     catch(e){
//         res.status(200).json({status:"fail",data:e.toString()});
//     }
// };
exports.login= async (req,res)=>{
        // let id= req.params.id;
        let reqBody=req.body;
        let result=await StudentsModel.find(reqBody).count();
        if(result==1){
            // create token
            let Payload= {exp:Math.floor(Date.now()/1000)+(24*60*60),
            data:reqBody['email']
        }
        let token= jwt.sign(Payload,"1234-XYZ");
        res.status(200).json({status:"success",data:token});
        }
        else{
            res.status(200).json({status:"fail",data:"No Student Found"});
        }
        
    
};