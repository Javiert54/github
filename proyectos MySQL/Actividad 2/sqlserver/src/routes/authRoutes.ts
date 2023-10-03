import { Request, Response, Router } from "express";

import { accesoCtrl, registroCtrl } from "../controllers/authController";
const router = Router()

router.post('/registro/', registroCtrl);
router.post('/acceso/', accesoCtrl);

export { router }


