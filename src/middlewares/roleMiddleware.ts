import { Request, Response, NextFunction } from "express";

export const adminMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.body.user.role !== "admin") {
		return res.status(403).json({ message: "Forbidden" });
	}
	next();
};
