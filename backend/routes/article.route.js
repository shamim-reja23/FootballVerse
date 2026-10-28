import express from "express";
import { getPublishedArticleBySlug, getPublishedArticles, getPublishedArticlesByCategory } from "../controllers/article.controller.js";

const articleRouter = express.Router()

articleRouter.get("/", getPublishedArticles);
articleRouter.get("/categories/:category", getPublishedArticlesByCategory);
articleRouter.get("/:slug", getPublishedArticleBySlug);

export default articleRouter