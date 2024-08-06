// router.js
import express from "express";
import { add, getUser } from "../controller/user.js";
import { conversationAdd,getConversation } from "../controller/conversation.js";
import { newMessage,getMessage } from "../controller/message.js";
const router = express.Router();

router.post("/addusers", add);
router.get("/getusers", getUser);
router.post("/conversation/add",conversationAdd);
router.post("/conversation/get",getConversation)
router.post("/message/add",newMessage);
router.get("/message/get/:id",getMessage);

export default router;