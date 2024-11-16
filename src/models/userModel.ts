import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class User extends Model {
	public id!: number;
	public email!: string;
	public name!: string;
	public password!: string;
	public role!: string;
	public isActive!: boolean;
	public createdAt!: Date;
	public updatedAt!: Date;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			defaultValue: "user",
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		sequelize,
		modelName: "User",
		tableName: "users",
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default User;
