require("dotenv").config();
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const cron = require("node-cron");
const express = require("express");
const nconf = require("nconf");
const routes = require("./routes");
const { fetchReseveData } = require("./controller/reserves");

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

fetchReseveData();

app.set("port", nconf.get("PORT") || 5006);

cron.schedule("*/30 * * * *", async () => {
  console.log("updating reserve data cache every 30 mins");
  await fetchReseveData();
});

const port = app.get("port");
server.listen(port, () => console.log(`server started on port ${port}`));
