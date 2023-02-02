import { DataTypes } from "sequelize";
import db from '../connection.db'

const Post = db.define('posts', {
    id: {
        type: DataTypes.NUMBER,
        allowNull: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    }
    
});
export default Post;