import mongoose from "mongoose";

/**
 * User Post Schema
 */

const postSchema = mongoose.Schema({
    /**
     * userId: The id of the user who created the post
     * @type {String}
     */
    userId: {
        type: String,
        required: true
    },
    /**
     * firstName: The first name of the user who created the post
     * @type { String }
     */
    firstName: {
        type: String,
        required: true
    },
    /**
     * lastName: The last name of the user who created the post
     * @type { String }
     */
    lastName: {
        type: String,
        required: true
    },
    /**
     * location, description, picturePath, userPicturePath, userPicturePath all are of type String
     */
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    /**
     * likes: The like list of the post
     * @type {Map<String, Boolean>}
     */
    likes: {
        type: Map,
        of: Boolean
    },
    /**
     * comments: The comment list of the post
     */
    comments: {
        type: Array,
        default: []
    }

}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
export default Post;