module.exports = (sequelize,DataTypes) => {
    //Tao table Commnents
    const Comments = sequelize.define("Comments",{
        commentBody:{
            //kieu du lieu string
            type: DataTypes.STRING,
            //if null ko dang bai duoc
            allowNull: false,
        }
    });
    return Comments;
};
