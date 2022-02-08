const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const route=require("./routes/r_routes")
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`Server is running at port ${Port} `);
});
