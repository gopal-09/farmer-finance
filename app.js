let express=require('express');
const mongoose=require('mongoose')
const user = require('./routes/user')
let app=express()
app.use(express.json())
app.use('/api/user',user)
mongoose.connect('mongodb+srv://gopalreddy6197:local@cluster0.xxavwoe.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
app.listen(5000,(req, res)=>{
    console.log('server hitt')
})