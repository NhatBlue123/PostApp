
module.exports = (sequelize,DataTypes) => {
    //Tao table Users
    const Users = sequelize.define("Users",{
        userName:{
            //kieu du lieu string
            type: DataTypes.STRING,
            //if null ko dang bai duoc
            allowNull: false,
        },
        password:{
            //kieu du lieu string
            type: DataTypes.STRING,
            //if null ko dang bai duoc
            allowNull: false,
        }
    });
    // user co nhieu bai dang nen tao moi quan he 1-n
    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });
    };
    return Users;
};
