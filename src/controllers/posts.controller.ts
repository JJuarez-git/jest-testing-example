import { Router } from "express";
import { getAllPosts } from "../services/posts.service";
const router = Router();

router.get("/", getAllPosts);

export default router;
