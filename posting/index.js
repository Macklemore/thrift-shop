const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/ping", (_, res) => {
    res.json({ ping: "pong" });
});

app.use("*", async (req, res) => {
    try {
        const {
            method,
            originalUrl,
            headers: { authorization },
            body,
        } = req;

        const axiosConfig = {
            method,
            url: `https://coinbay.vinsonly.me${originalUrl}`,
            data: body,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (authorization) {
            axiosConfig.headers.authorization = authorization;
        }

        const { status, data } = await axios(axiosConfig);
        return res.status(status).send(data);
    } catch (err) {
        return res.status(500).send(err);
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
