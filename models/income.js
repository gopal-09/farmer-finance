const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const SchemaTypes=mongoose;
const IncomeSchema=new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  category:[{
  soldcrop:{
    type:String,
    required:true,
  },
  amount:{
    type:Number,
    required:true
  }}]


})
module.exports= mongoose.model('income',IncomeSchema);