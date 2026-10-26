import Article from "../models/article.model.js";

export const getPublishedArticles = async(req, res) => {
    try {
        const articles = await Article.find({ status: "published"}).sort({publishedAt : -1});

        return res.status(200).json({
            success: true,
            articles
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch published articles."
        })
    }
}