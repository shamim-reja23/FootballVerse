import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    excerpt: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    coverImage: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            "Tactical Analysis", 
            "Transfers", 
            "Match Analysis", 
            "Opinion", 
            "Football Guides"
        ],
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: [
            "draft",
            "published"
        ],
        default: "draft",
    },
    publishedAt: {
        type: Date,
    },
}, { timestamps: true });

const Article = mongoose.model("Article", articleSchema);

export default Article;