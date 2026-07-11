import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const RefreshTokens = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expires_at: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
    tableName: "refresh_tokens",
    timestamps: true
})

export default RefreshTokens