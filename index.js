const express=require("express");
const app=express();
const mongoose=require('mongoose');

// Database Connection


app.listen(4000,()=>{
  console.log(`The Server is running on port 4000`);
})