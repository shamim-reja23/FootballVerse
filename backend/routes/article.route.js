import express from "express";
import { getPublishedArticleBySlug, getPublishedArticles } from "../controllers/article.controller.js";

const articleRouter = express.Router()

articleRouter.get("/", getPublishedArticles);
articleRouter.get("/:slug", getPublishedArticleBySlug);

export default articleRouter