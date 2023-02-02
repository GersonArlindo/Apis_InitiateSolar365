"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_db_1 = __importDefault(require("../connection.db"));
const Post = connection_db_1.default.define('posts', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
});
exports.default = Post;
