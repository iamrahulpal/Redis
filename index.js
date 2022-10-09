const express = require("express");
const cors = require("cors");
const axios = require("axios");
const Redis = require("redis");

const DEFAULT_EXPIRATION = 10;

const redisClient = Redis.createClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/data", async (req, res) => {
  redisClient.get("data", async (error, data) => {
    if (data != null) {
      return res.json(JSON.parse(data));
    } else {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=7d3d32073267dc163cff9edc6ce52300`
      );

      redisClient.setex("data", DEFAULT_EXPIRATION, JSON.stringify(data));
      res.json(data);
    }
  });
});

app.listen(8000, console.log("server is runnning 🏡 on 8000"));
