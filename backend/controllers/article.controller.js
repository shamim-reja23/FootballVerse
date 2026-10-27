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

export const getPublishedArticleBySlug = async(req, res) => {
    try {
        const slug = req.params.slug
        const article = await Article.findOne({ slug, status: "published" })

        if(!article){
            return res.status(404).json({
                success: false,
                message: "Article not found."
            })
        }

        return res.status(200).json({
            success: true,
            article
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch published article."
        })
    }
}

export const getPublishedArticlesByCategory = async(req, res) => {
    try {
        const category = req.params.category;
        const articles = await Article.find({ category, status: "published"}).sort({ publishedAt: -1 });


        return res.status(200).json({
            success: true,
            articles
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch published article."
        })
    }
}