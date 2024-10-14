import express from "express";
import { API_URI } from "../config";
import clubs from "./posts.controller";

enum ROUTES {
  INDEX = "/index",
  POSTS = "/posts",
}

const routes = (app: express.Application) => {
  app.use(`${API_URI}${ROUTES.INDEX}`, (req, res) => {
    res.status(200).json({ message: "index", status: res.statusCode });
  });
  app.use(`${API_URI}${ROUTES.POSTS}`, clubs);
};

export default routes;
