import express from 'express';
import { tryCatch } from '../middlewares/tryCatch.js';
import { getMessages } from '../controllers/chat.js';
const router = express.Router();
router.get('/', tryCatch(getMessages));
export default router;
//# sourceMappingURL=chat.js.map