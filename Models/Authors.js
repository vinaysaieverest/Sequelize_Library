
const { uniq } = require('lodash');
const sequelize = require('../dbConfiguration');
const {DataTypes} = require('sequelize');

const Authors = sequelize.define('authors', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true


    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    
        
    },
    birth_year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    nationality:{
        type:DataTypes.STRING,
        allowNull:false

    }
});
module.exports = Authors;