import Article from "../models/article.model.js";

export const getPublishedArticles = async(req, res) => {
    try {
        const page = Number(req.query.page ?? 1);
        if(!Number.isInteger(page) || page < 1){
            return res.status(400).json({
                success: false,
                message: "Page must be a positive number."
            })
        }
        const limit = 10;
        const skip = (page - 1) * limit;

        const articles = await Article.find({ status: "published"}).sort({publishedAt : -1}).skip(skip).limit(limit);

        const totalArticles = await Article.countDocuments({ status: "published" });

        const totalPages = Math.ceil(totalArticles / limit)
        const hasNextPage = page < totalPages
        const hasPreviousPage = page > 1

        return res.status(200).json({
            success: true,
            articles,
            pagination: {
                currentPage: page,
                totalPages,
                totalArticles,
                limit,
                hasNextPage,
                hasPreviousPage
            }
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
        const page = Number(req.query.page ?? 1);
        if(!Number.isInteger(page) || page < 1){
            return res.status(400).json({
                success: false,
                message: "Page must be a positive number."
            })
        }
        const limit = 10;
        const skip = (page - 1) * limit;

        const category = req.params.category;
        const allowedCategories = [
            "Tactical Analysis", 
            "Transfers", 
            "Match Analysis", 
            "Opinion", 
            "Football Guides"
        ];
        if(!allowedCategories.includes(category)){
            return res.status(400).json({
                success: false,
                message: "Invalid article category"
            })
        }

        const articles = await Article.find({ category, status: "published"}).sort({ publishedAt: -1 }).skip(skip).limit(limit);

        const totalArticles = await Article.countDocuments({ status: "published" });

        const totalPages = Math.ceil(totalArticles / limit)
        const hasNextPage = page < totalPages
        const hasPreviousPage = page > 1

        return res.status(200).json({
            success: true,
            articles,
            pagination: {
                currentPage: page,
                totalPages,
                totalArticles,
                limit,
                hasNextPage,
                hasPreviousPage
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch published articles."
        })
    }
}

export const searchPublishedArticles = async(req, res) => {
    try {
        const q = (req.query.q ?? "").trim()
        if(q === ""){
            return res.status(400).json({
                success: false,
                message: "Query must not be empty"
            })
        }

        const escapedQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        const filter = {
            status: "published",
            $or: [
                { title: { $regex: escapedQuery, $options: "i" } },
                { excerpt: { $regex: escapedQuery, $options: "i" } }
            ]
        }

        const page = Number(req.query.page ?? 1);

        if (!Number.isInteger(page) || page < 1) {
            return res.status(400).json({
                success: false,
                message: "Page must be a positive number."
            });
        }

        const limit = 10;
        const skip = (page - 1) * limit;

        const articles = await Article.find(filter).sort({published: -1}).skip(skip).limit(limit);

        const totalArticles = await Article.countDocuments(filter);
        const totalPages = Math.ceil(totalArticles / limit)

        return res.status(200).json({
            success: true,
            articles,
            pagination: {
                currentPage: page,
                totalPages,
                totalArticles,
                limit,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch published articles."
        })
    }
}