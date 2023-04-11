const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const SchemaTypes=mongoose;
const ExpenseSchema=new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  category:[{
    cropname:{
        type:String,
        required:true
    },
  type:{
    type:String,
    required:true,
  },
  amount:{
    type:Number,
    required:true
  }}]


})
module.exports= mongoose.model('Expense',ExpenseSchema);