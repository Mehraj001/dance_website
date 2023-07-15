const express=require("express");
const path=require("path");

const app=express();
const port=8000;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
      
      const params={ }
      res.status(200).render('homs.pug',params);
})
app.get('/contact',(req,res)=>{
      
      const params={ }
      res.status(200).render('contact.pug',params);
})


app.listen(port,(req,res)=>{
      console.log(`the application statrd succesfuly on port ${port}`);
});




