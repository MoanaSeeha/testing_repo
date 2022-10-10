const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sampleRouter = require("./routes/sample");

const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const myMiddleware = function (req, res, next) {
  console.log("if" + (1 === 1));
  next();
};

app.use(myMiddleware);

app.use("/api", sampleRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
