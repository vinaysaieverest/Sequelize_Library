
const sequelize = require('../dbConfiguration');
const {DataTypes} = require('sequelize');

const Members = sequelize.define('members', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:true
    },
    phone_number:{
        type:DataTypes.INTEGER,
        allowNull:true

    },
    email:{
        type:DataTypes.STRING,
        unique:true
    }
    

})
module.exports = Members;