const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = () => {
  mongoose
    .connect("mongodb+srv://prabhatjat196:redzari%401234@redzaridatabase.gdzm72d.mongodb.net/?retryWrites=true&w=majority", {
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
