import express from 'express'
import * as photoController from "../controllers/photoController.js"

const router = express.Router()


// /photos/rew53545346345
router.route("/").post(photoController.createPhoto)
router.route("/").get(photoController.getAllPhotos)
router.route("/:id").get(photoController.getPhoto)

export default router