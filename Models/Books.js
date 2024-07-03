const sequelize = require('../dbConfiguration')
const {DataTypes} = require('sequelize');
const authors = require('./Authors');

const Books = sequelize.define('books', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    titles:{
        type:DataTypes.STRING,
        allowNull:false
    },
    authorId:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
      
            model:authors,
            key:'id'
        }
    },
    genre:{
        type:DataTypes.STRING,
        allowNull:false

    },
    isbn:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    publication_year:{
        type:DataTypes.STRING,
        allowNull:false

    }

})
module.exports = Books;