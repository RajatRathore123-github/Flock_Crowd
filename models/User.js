import mongoose from "mongoose";

/**
 * Schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 */

const UserSchema = new mongoose.Schema(
  {
    /**
     * firstname: The first name of the user
     * @type {String}
     */
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    /**
     * lastname: The last name of the user
     * @type {String}
     */
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    /**
     * email: The email of the user
     * @type {String}
     */
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    /**
     * password: The password of the user
     * @type {String}
     */
    password: {
      type: String,
      required: true,
      min: 5,
    },
    /**
     * picturePath: The path of the user's picture
     * @type {String}
     */
    picturePath: {
      type: String,
      default: "",
    },
    /**
     * friends: The friend list of the user
     * @type {Array}
     */
    friends: {
      type: Array,
      default: [],
    },
    /**
     * location: The location of the user
     * @type {String}
     */
    location: String,
    /**
     * occupation: The occupation of the user
     * @type {String}
     */
    occupation: String,
    /**
     * viewedProfile: The number of times the user's profile has been viewed
     * @type {Number}
     */
    viewedProfile: Number,
    /**
     * impressions: The total number of times a post was visible in user timelines or feeds
     * @type {Number}
     */
    impressions: Number,
  },
  { timestamps: true }
);

/**
 * Compiling our User Schema into a Model
 */
const User = mongoose.model("User", UserSchema);
export default User;