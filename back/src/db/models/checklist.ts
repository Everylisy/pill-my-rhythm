import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { Users } from "./user";

// These are all the attributes in the Checklist model

interface ChecklistAttributes {
  pk_checklist_id: number;
  date: string;
  level?: number;
  one: boolean;
  two: boolean;
  three: boolean;
  four: boolean;
  five: boolean;
  six: boolean;
}

export class Checklists extends Model<ChecklistAttributes> {
  pk_checklist_id: number;
  date: string;
  level?: number;
  one: boolean;
  two: boolean;
  three: boolean;
  four: boolean;
  five: boolean;
  six: boolean;
}

Checklists.init(
  {
    pk_checklist_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    one: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    two: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    three: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    four: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    five: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    six: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Checklist",
    tableName: "tb_checklist",
    freezeTableName: true,
    timestamps: true,
    paranoid: true, // 삭제일 (복구용)
    underscored: true,
  },
);

Users.hasMany(Checklists, { foreignKey: { name: "fk_user_id", allowNull: false } });
Checklists.belongsTo(Users, { foreignKey: { name: "fk_user_id", allowNull: false } });
