const mongo = require("mongoose");

const mongoConnect = async () => {
  console.log("Connection to MongoDb");

await mongo.connect(process.env.MONGO_URL, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  }).then((r)=>{
console.log("hello")
  })
 

  
  console.log("Connected to MongoDb");
  return true;
};

module.exports = { mongoConnect };
