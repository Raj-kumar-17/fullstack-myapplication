const express=require('express');
const app = express();
const cors=require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv/config');
const path=require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//database
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true
})

.then(()=> {console.log('Connected to database successfully!');
})

.catch( (err)=>{console.log(err);
});




app.use("/",require("./userserver"));

//server
const PORT=process.env.PORT || 4000;



if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join('backend/build')));

  app.get('*', (req,res)=>{
          res.sendFile(path.resolve(__dirname,'backend','build','index.html'));
  });
}

app.listen(PORT,()=>{
	console.log(`Server is running on port ${PORT}`);
});