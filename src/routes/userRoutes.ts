import { Router } from "express";
import { getUsers, login, register } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/roleMiddleware";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/users", authMiddleware, adminMiddleware, getUsers);

export default router;
