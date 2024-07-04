// CRUD Operations for Books
const { where } = require('sequelize');
const members = require('../Models/Members');
// const {authorsData} = require('../Data');
const membersData1 = {
    name: 'Jane Smith',
     address: '456 Oak Ave, Another Town',
      phone_number: 555-5678,
       email: 'jane.smith@example.com' 
}
const create  =  async()=>{
    try{
        await members.create(authorsData1);
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
    name: 'Jane Smith',
     address: '456 Oak Ave, Another Town',
      phone_number: 555-5678,
       email: 'jane.smith@example.com' 
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



create();
read();
update();
delete_data();