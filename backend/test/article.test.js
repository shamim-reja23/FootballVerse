import dotenv from "dotenv";
import connectDB from "../utils/db.js";
import Article from "../models/article.model.js";

dotenv.config();

const testArticle = async () => {
  try {
    await connectDB();

    const article = await Article.create({
      title: "Test Article for FootballVerse",
      slug: "test-article-footballverse-001",
      excerpt: "A temporary article to test our Mongoose model.",
      content: "This is test content for the FootballVerse Article model.",
      category: "Tactical Analysis",
      author: "Test Author",
      status: "published",
      publishedAt: new Date("2026-10-27"),
    });

    console.log("Article created successfully:");
    console.log(article);

    // await Article.deleteOne({ _id: article._id });
    // console.log("Test article deleted successfully.");
  } catch (error) {
    console.error("Article model test failed:", error);
  } finally {
    process.exit();
  }
};

testArticle();