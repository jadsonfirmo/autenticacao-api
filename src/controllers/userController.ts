import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../models/userModel';

export const register = async (req: Request, res: Response) => {
	const { email, name, password, role } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({ email, name, password: hashedPassword, role });
	res.status(201).json(user);
};

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const user = await User.findOne({ where: { email } });

	if (!user || !(await bcrypt.compare(password, user.password))) {
		return res.status(401).json({ message: "Invalid credentials" });
	}

	const token = jwt.sign(
		{ id: user.id, role: user.role },
		process.env.JWT_SECRET!,
		{ expiresIn: "1h" }
	);
	res.json({ token });
};

export const getUsers = async (req: Request, res: Response) => {
	const users = await User.findAll({ where: { is_active: true } });
	res.json(users);
};
