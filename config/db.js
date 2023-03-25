const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = () => {
  mongoose
    .connect("mongodb+srv://Redzari:Redzari%401234@redzari.g71dqq3.mongodb.net/redzari", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDb Atlas!");
    })
    .catch((err) => {
      console.log("ERROR:", err.message);
    });
};
module.exports = connectToMongo;
