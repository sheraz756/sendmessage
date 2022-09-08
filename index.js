const express = require('express')
const app = express();
const fast2sms = require('fast-two-sms')
app.set('view engine','ejs')
require('dotenv').config();
app.use(express.urlencoded({extended:false}))

app.post('/sendMessage',async(req,res)=>{
  
const response = await fast2sms.sendMessage({authorization : process.env.API_KEY , message:req.body.message ,  numbers : [req.body.number]})

res.send(response)

})
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(2001,()=>{
    console.log("you are on 2001")
})