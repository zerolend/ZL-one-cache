import * as http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import cron from "node-cron";
import express from "express";
import nconf from "nconf";
import routes from "./routes";
import { fetchReseveData } from "./controller/reserves";

const app = express();
const server = new http.Server(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

fetchReseveData();
app.set("port", nconf.get("PORT") || 5002);

cron.schedule("*/30 * * * *", async () => {
  console.log("updating reserve data cache every 30 mins");
  await fetchReseveData();
});

const port = app.get("port");
server.listen(port, () => console.log(`server started on port ${port}`));
