const router=require('express').Router();


router.get('/users',(req,res)=>{
  res.send("user test is successfully")
});

module.exports=router;