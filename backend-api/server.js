const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config;

app.use(morgan("dev"))


const port = process.env.PORT || 8787
app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
})