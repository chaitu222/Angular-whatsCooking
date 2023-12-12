import express from 'express'
import { Feedbackrole } from "../controllers/feedback.js";
 
const router= express.Router()
 
router.post('/',Feedbackrole)
export default router