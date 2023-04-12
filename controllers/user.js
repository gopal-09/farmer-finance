let User=require('../models/user')
let Income=require('../models/income')
let Expense=require('../models/expenses')
let Transaction=require('../models/transaction')
login=async (req, res) => {
    let mobile=req.body.mobile
    let name=req.body.name
    try{
    let user=User.findOne({name:name,mobile:mobile})
    console.log(user)
    if(user.name===name) 
    {
        //console.log("from if");
       return res.json({msg:"login success"});

    } else {
        console.log("from else");
        return res.json({msg:"user not found"})

    }
    }
    catch(err){
        console.log(err);
    }
     
},
    signup = async (req, res) =>{
        const {mobile,name}=req.body
        let k=User.findOne({ mobile:mobile,name:name})
        //console.log(k)
        if(k.name===name)
        return res.json({msg:"user exist"})
        //res.json({msg:"signup success"})
        let user= new User({
            mobile: req.body.mobile,
            name: req.body.name
        })
        await user.save()
        return res.json({user: user})

    },
income= async (req, res) =>{
      const{name,category}=req.body;
      const user=new Income({
        name,category
      })
      await user.save()
     return  res.json({income:user})
    }
expense=async (req, res) =>{
    try {
        const{name,category}=req.body
    let user=new Expense({
        name,category
      })
      await user.save()
      //console.log(user)
      let s="loss";
      for(let i=0;i<user.category.length;i++){
        let c=user.category[i].cropname
        let a=user.category[i].amount
        //console.log(user.name)
        let income=await Income.findOne({name:user.name})
        console.log(income)
        let k=income.category.find(object=>object.soldcrop===c)
        console.log(k)
        if(k.amount>a)
        s="profit"}
    const response = {
        jsondata:user,
        stringdata:s
      };
      return res.json(response)
    } catch (error) {
        return res.json({error})
        
    }
    
},
maketransaction=async(req,res)=>{
 let{to,from,amount}=req.body;
 let transaction=new Transaction({to,from,amount});
 transaction.save()
 res.json({msg:"transaction done successfully"});

},
gettransaction=async(req,res)=>{
let transaction= await Transaction.find({from:req.params.name}).limit(5)
res.json({transaction:transaction})
}
   


module.exports={login,signup,income,expense,maketransaction,gettransaction}