const sequelize = require('../dbConfiguration')
const {DataTypes} = require('sequelize');
const authors = require('./Authors');
const { timeStamp } = require('console');

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
        allowNull:false,
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
    
});

authors.hasMany(Books, { foreignKey: 'authorId' });
Books.belongsTo(authors, { foreignKey: 'authorId' });
module.exports = Books;