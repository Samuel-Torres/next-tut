import mongoose from "mongoose";

const { Schema } = mongoose;

const postsSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
        }
    }, 
    { timestamps: true }
);

// export default mongoose.model("posts", postsSchema);

console.log("mongoose: ", mongoose.models.posts)

const posts = mongoose.models.posts || mongoose.model('posts', postsSchema);

export default posts;