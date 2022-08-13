import { Router } from "express";
import * as ImageController from '../Controllers/ImageController'

const router = Router();

router.post('/', ImageController.addImage);

export default router;