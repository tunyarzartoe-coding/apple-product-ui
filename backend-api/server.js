const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const path = require("path");
require("dotenv").config();
var cors = require("cors");

const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const cartRoutes = require("./routes/cartRoutes")
const orderRoutes = require("./routes/orderRoutes")
const paymentRoute = require('./routes/stripeRoute')

//database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

app.use("/api",productRoutes)
app.use("/api",orderRoutes)
app.use("/api",cartRoutes)
app.use("/api",userRoutes)
app.use("/api",paymentRoute)
app.use("/api/auth",authRoutes)

const port = process.env.PORT || 8787
app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
})