const sequelize = require('../dbConfiguration');
const {DataTypes} = require('sequelize');
const members = require('./Members');
const books = require('./Books');
const Reservation  = sequelize.define('reservation', {
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
    reservation_date:{
        type:DataTypes.DATE,
        allowNull:false

    },
   
    

})
module.exports = Reservation;