import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/**
 * READ - Setting up of routes for the getting the user and user friends
 */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/**
 * UPDATE - Setting up of routes for the adding and removing of friends
 */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router; 