const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: "config.env" });

//log request
app.use(morgan("tiny"));

//mongodb connection
console.log(process.env.MONGO_URI);
connectDB(process.env.MONGO_URI);

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//Set View Engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(CRUD_APP with MongoDB,"views/ejs"))

//load Asset
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load router
app.use('/', require('./server/routes/router'))

const port = process.env.PORT || 3000; //Development mein 3000 available hota hein => Environment var ka number
app.listen(port, () => {
  // Port => In and out way
  console.log(`Example app listening on port ${port}`);
});
