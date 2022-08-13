import { Router } from "express";
import * as ImageController from '../Controllers/ImageController'

const router = Router();

router.get("/:id", ImageController.getImage )

export default router;