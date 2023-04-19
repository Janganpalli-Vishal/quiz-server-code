import { Router } from "express";
// import { dropQuestions, getQuestions, getResult, insertQuestions } from "../controllers/controller";
import * as controllers from "../controllers/controller.js";

const router = Router() 

router.get('/questions', controllers.getQuestions)
router.post('/questions', controllers.insertQuestions)
router.delete('/questions', controllers.dropQuestions)

router.route('/result')
    .get(controllers.getResult)
    .post(controllers.storeResult)
    .delete(controllers.dropResult)

export default router