import { Router } from "express";
import { registerUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, getUserChannelProfile, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getWatchHistory } from "../controllers/user.controllers.js";

import { upload } from "../middlewares/multer.middlewares.js";

import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();
// /api/v1/healthcheck/test


//unsecured route
// router.route("/register").post(
//   upload.fields([
//     {
//       name: "avatar",
//       maxCount: 1,
//     },
//     {
//       name: "coverImage",
//       maxCount: 1,
//     },
//   ]),
//   registerUser
// );

router.route("/login").post(logoutUser)
router.route("/refresh-token").post(refreshAccessToken);

// secure routes

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
 
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

router.route("/history").get(verifyJWT, getWatchHistory);
export default router;
