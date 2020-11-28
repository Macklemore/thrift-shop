const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/build")));

app.get("/*", (_, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(port, () => console.log("Serving client on port " + port));
