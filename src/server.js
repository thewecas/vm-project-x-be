require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const baseURL = process.env.BASE_URL;

//Allow cross origin resource sharing
app.use(cors());

app.use(express.urlencoded({ extended: false }));

//routes
app.use(baseURL, require("./routers"));

//Start listening to request
app.listen(port, () => console.log(`Server Online, Listening to ${port}`));
