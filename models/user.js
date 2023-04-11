const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const SchemaTypes=mongoose;
//const ObjectId=mongoose.Schema.Types.ObjectId;
const userSchema=new Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  mobile:{
    type:String,
    required:true,
    unique:true
  }

})
module.exports= mongoose.model('user',userSchema);