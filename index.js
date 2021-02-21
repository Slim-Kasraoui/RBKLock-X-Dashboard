/* 

The backend has the following structure
Every request will follow the following path:
  Index.js -> Routes -> Controller -> Service -> Model
After the update on the mode is done, the controller will respond with res.send()

To add a new route, follow the following structure
app.use("api/[ENDPOINT]", NAME_OF_THE_ROUTE)

*/

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json())

const userRoute = require("./src/routes/user.route.js");

const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("failed to connect to MongoDB", err);
  });
// app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

// app.use("/api/user", userRoute);

app.get("/login", (req, res) => {
  console.log('login');
  res.send({
    token: 'test123'
  });
})

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});
