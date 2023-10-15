const WorksModel = require('../models/WorksModel');
exports.create=async (req,res)=>{
try{
    let reqBody=req.body;
    let result= await WorksModel.create(reqBody);
    res.status(200).json({status:"success",data:result})
}
catch(e){
    res.status(200).json({status:"fail",data:e.toString()});
}
};