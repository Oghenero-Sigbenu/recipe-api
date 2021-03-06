const Sequelize = require("sequelize");
const sequelize = require("../config/database")
 const User = require("./user");


class Recipes extends Sequelize.Model{}
    Recipes.init({
        title:{
            type: Sequelize.STRING(),
            allowNull: false
        },
        description:{
            type: Sequelize.STRING(),
            allowNull: false
        },
        // likes: {
        //     type: Sequelize.INTEGER(),
        //     defaultValue: 0
        // },
        steps:{
            type: Sequelize.STRING(),
            allowNull: false
        },
        ingredients:{
            type: Sequelize.STRING(),
            allowNull: false
        },
        imageurl:{
            type: Sequelize.STRING(),
            allowNull: false
        }

    },{sequelize});

     User.hasMany(Recipes);
    Recipes.belongsTo(User)  
    //Category.hasMany(Recipe);

    module.exports = Recipes;