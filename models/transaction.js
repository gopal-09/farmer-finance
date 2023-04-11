const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const SchemaTypes=mongoose;
//const ObjectId=mongoose.Schema.Types.ObjectId;
const TransactionSchema=new Schema({
  from:{
    type:String,
    required:true,
    unique:true
  },
  to:{
    type:String,
    required:true,
    unique:true
  },
  amount:{
    type:Number,
    required:true
  }

})
module.exports= mongoose.model('transaction',TransactionSchema);