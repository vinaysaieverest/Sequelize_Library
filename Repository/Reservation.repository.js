// CRUD Operations for Reservation
const { where } = require('sequelize');
const reservation = require('../Models/Reservations');
// const {authorsData} = require('../Data');
const reservationData1 = {
    member_id: 1, book_id:2, reservation_date: new Date()
}

const create  =  async()=>{
    try{
        await reservation.create(reservationData1);
        const a =  await reservation.findAll();
        console.table(a.map(b =>b.toJSON()))
        console.log("DATA CREATED");
        

    }
    catch{
        console.log("SOME THING ERROR HAPPENS")
    }
};
const read  =  async()=>{
    try{
        const Allreservation = await reservation.findAll();
        console.log("THIS IS THE AUTHORS DATA")
        console.table(Allreservation.map(a => a.toJSON()))
        const reservation3 = await reservation.findByPk(3);
        console.table(reservation3.toJSON());
        const book4 = await reservation.findOne({where:{name:'Harry Potter and the Philosophers Stone'}});
        console.table(book4.toJSON());
    }
    catch(error){
        console.log("SOME THING ERROR HAPPENS")
    }
};
const new_details = {
    member_id: 2,
    book_id: 4,
    reservation_date: new Date()
}
const update = async () => {
    try {
        const reservation5 = await reservation.findByPk(3);
        if (reservation5) {
            await reservation.update(new_details, { where: { id: 3 } });
            const updatedReservation = await reservation.findAll();
            console.table( updatedReservation.map(a=>a.toJSON()));
        } else {
            console.log("Book not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
};
const delete_data = async()=>{
    try{
        const reservation6 = await reservation.findByPk(3);
        if (reservation6) {
            await reservation.destroy({ where: { id: 4} });
            const updatedReservation = await reservation.findAll();
            console.table( updatedReservation.map(a=>a.toJSON()));
        } else {
            console.log("Book not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
    }



create();
read();
update();
delete_data();