import express from "express";
import { getPublishedArticles } from "../controllers/article.controller.js";

const articleRouter = express.Router()

articleRouter.get("/", getPublishedArticles);

export default articleRouter