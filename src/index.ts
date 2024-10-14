import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config";
import routes from "./controllers/index.controller";

const app = express();
const port = PORT;
app.use(cors());
app.use(morgan("dev"));
routes(app);

app.listen(port, () => {
  console.log("[SERVER]: Running on port " + port);
});
