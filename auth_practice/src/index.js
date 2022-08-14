const express= require('express');
const app= express();
const dotenv= require('dotenv');
const port= process.env.PORT || 3000;

dotenv.config();
const host= process.env.HOST;
//connect to db
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/HRDatabase').then(()=>console.log('Connected to MongoDB...!'))
.catch(err=>console.error('Could not establish a connection!',err));

app.use(express.json());

let authRoute = require('./routes/auth');
let empRoute = require('./routes/employee');

app.use('/employee',authRoute);
app.use('/employee', empRoute);

app.listen(port,()=>{
    console.log(`CONNECTION IS LIVE AT ${port}`)
})