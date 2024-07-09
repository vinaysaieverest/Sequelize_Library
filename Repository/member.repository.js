// CRUD Operations for Members
const { where } = require('sequelize');
const members = require('../Models/Members');
// const {authorsData} = require('../Data');
const membersData1 = {
    name: 'Rama krishna',
     address: 'Warangal',
      phone_number: 1111122222,
       email: 'ramakrishna@gmail.com' 
}
const create  =  async()=>{
    try{
        await members.create(membersData1);
        const a =  await members.findAll();
        console.table(a.map(b =>b.toJSON()))
        console.log("DATA CREATED");
        

    }
    catch{
        console.log("SOME THING ERROR HAPPENS")
    }
};
const read  =  async()=>{
    try{
        const Allmember = await members.findAll();
        console.log("THIS IS THE AUTHORS DATA")
        console.table(Allmember.map(a => a.toJSON()))
        const member3 = await members.findByPk(3);
        console.table(member3.toJSON());
        const member4 = await members.findOne({where:{name:'Harry Potter and the Philosophers Stone'}});
        console.table(member4.toJSON());
    }
    catch(error){
        console.log("SOME THING ERROR HAPPENS")
    }
};
const new_details = {
    name: 'Vijay',
     address: 'vallapur',
      phone_number: 999999999,
       email: 'vijay@gmail.com' 
}

const update = async () => {
    try {
        const member5 = await members.findByPk(3);
        if (member5) {
            await members.update(new_details, { where: { id: 3 } });
            const updatedmember = await members.findAll();
            console.table( updatedmember.map(a=>a.toJSON()));
        } else {
            console.log("Book not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
};
const delete_data = async()=>{
    try{
        const member6 = await members.findByPk(3);
        if (member6) {
            await members.destroy({ where: { id: 3} });
            const updatedmember = await members.findAll();
            console.table( updatedmember.map(a=>a.toJSON()));
        } else {
            console.log("Book not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
    }



// create();
read();
// update();
// delete_data();