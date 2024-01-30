require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const shopitemRoutes=require('./routes/shopitem'); // change the import statement to use correct casing
const shopidRoutes=require('./routes/shopId'); // change the import statement to use correct casing
const UseridRoutes=require('./routes/Userid'); // change the import statement to use correct casing

const app=express();

app.use(express.json());
// app.use((req,res,next)=>{
//     console.log('This is a middleware');
//     next();
// });

app.use('/shopitem',shopitemRoutes);
app.use('/shopid',shopidRoutes);
app.use("/userid",UseridRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('Server is running on port 4000');
        });
    })
    .catch((err)=>console.log(err));

