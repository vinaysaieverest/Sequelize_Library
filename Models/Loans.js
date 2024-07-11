const sequelize = require('../dbConfiguration');
const {DataTypes} = require('sequelize');
const members = require('./Members');
const books = require('./Books');
const Loans = sequelize.define('loans', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    book_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:books,
            key:'id'

        }
    },
    member_id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
      
            model:members,
            key:'id'
        }
    },
    loan_date:{
        type:DataTypes.DATE,
        allowNull:false

    },
    due_date:{
        type:DataTypes.DATE,
        allowNull:false
    }},
    {   tableName:'Loans',
        indexes:[
            {
                unique:true,
                fields:['id']
            }
        ]
    


    
});

books.hasMany(Loans, { foreignKey: 'book_id' });
Loans.belongsTo(books, { foreignKey: 'book_id' });

members.hasMany(Loans, { foreignKey: 'member_id' });
Loans.belongsTo(members, { foreignKey: 'member_id' });

module.exports = Loans;