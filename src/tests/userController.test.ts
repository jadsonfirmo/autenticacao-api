import app from "../../app";
import request from "supertest";
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import sequelize from "../config/db";

describe("User API", () => {
	beforeAll(async () => {
		const hashedPassword = await bcrypt.hash("admin123", 10);
		await User.create({
			email: "admin@test.com",
			name: "Admin User",
			password: hashedPassword,
			role: "admin",
			isActive: true,
		});
	});

	it("should login a user", async () => {
		const res = await request(app)
			.post("/api/login")
			.send({ email: "admin@test.com", password: "admin123" });

		expect(res.statusCode).toEqual(200);
		expect(res.body).toHaveProperty("token");
	});

	afterAll(async () => {
		await User.destroy({ where: { email: "admin@test.com" } });
		
		await sequelize.close();
	});
});
