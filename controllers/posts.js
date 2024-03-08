import Post from "../models/Post.js";
import User from "../models/User.js";

/**
 * createPost - creates a new post and saves it to the database 
 */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message})
  }
};

/**
 * getFeedPosts - retrives all the posts from the database
 */

export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
    res.status(200).json(post);
    } catch (err) {
        res.status(409).json({ message: err.message})
    }
}
/**
 * getUserPosts - retrives all the posts from the database of a specfic user
 */

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.statu(404).json({ message: err.message });
    }
}
