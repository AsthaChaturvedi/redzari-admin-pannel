const express = require("express");
var cors = require("cors");
const connectToMongo = require("./config/db");
var allowedDomains = ['https://asthachaturvedi.github.io/login', 'http://localhost:3000'];

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const app = express();
connectToMongo();
app.use(express.json());
// app.use(cors({
//   origin: function (origin, callback) {
//     // bypass the requests with no origin (like curl requests, mobile apps, etc )
//     if (!origin) return callback(null, true);
 
//     if (allowedDomains.indexOf(origin) === -1) {
//       var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
app.use(cors())
const PORT = 3001;

//Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);

app.get("/", (req, res) => {
  res.send("Sup nigga?");
});
app.listen(PORT, () => {
  console.log(`Backend Server is running on port ${PORT} on url https://asthachaturvedi.github.io/`);
});
