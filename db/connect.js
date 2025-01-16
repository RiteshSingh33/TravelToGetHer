// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/TravelToGether")
// .then(()=>{console.log("Connection is successfull.......");})
// .catch((err)=>{console.log(err);});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/TravelToGether")
.then(() => {
  console.log("Connection to MongoDB Atlas is successful...");
})
.catch((err) => {
  console.error("Connection failed: ", err);
});

