const { on } = require("nodemon");

module.exports = (sequelize,DataTypes) => {
    //Tao table posts
    const Posts = sequelize.define("Posts",{
        //tao tieu de bai dang
        title:{
            //kieu du lieu string
            type: DataTypes.STRING,
            //if null ko dang bai duoc
            allowNull: false,
        },
        //tao cot van ban cho bai dang
        postText:{
            //kieu du lieu string
            type: DataTypes.STRING,
            //if null ko dang bai duoc
            allowNull: false,
        },
        userName:{
            //kieu du lieu string
            type: DataTypes.STRING,
            //if null ko dang bai duoc
            allowNull: false,
        }
    });
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            //khi xoa bai dang thi xoa luon comment
            onDelete: "cascade",
        });
    };
    return Posts;
};
