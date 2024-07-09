// CRUD Operations for Authors
const { where } = require('sequelize');
const authors = require('../Models/Authors');
// const {authorsData} = require('../Data');
const authorsData1 = {
    name:'Rama krishna',
    birth_year:2002,
    nationality:'India'
}

const create  =  async()=>{
    try{
        await authors.create(authorsData1);
        const a =  await authors.findAll();
        console.table(a.map(b =>b.toJSON()))
        console.log("DATA CREATED");
        

    }
    catch{
        console.log("SOME THING ERROR HAPPENS")
    }
};
const read  =  async()=>{
    try{
        const AllAuthors = await authors.findAll();
        console.log("THIS IS THE AUTHORS DATA")
        console.table(AllAuthors.map(a => a.toJSON()))
        const author3 = await authors.findByPk(5);
        console.table(author3.toJSON());
        const author4 = await authors.findOne({where:{name:'Vinay sai'}});
        console.table(author4.toJSON());
    }
    catch(error){
        console.log("SOME THING ERROR HAPPENS")
    }
};
const new_details = {
    name:'Sai pavan',
    birth_year:2003,
    nationality:'India'
}
const update = async () => {
    try {
        const author5 = await authors.findByPk(5);
        if (author5) {
            await authors.update(new_details, { where: { id: 5 } });
            const updatedAuthor = await authors.findAll();
            console.table( updatedAuthor.map(a=>a.toJSON()));
        } else {
            console.log("Author not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
};
const delete_data = async()=>{
    try{
        const author6 = await authors.findByPk(3);
        if (author6) {
            await authors.destroy({ where: { id: 3} });
            const updatedAuthor = await authors.findAll();
            console.table( updatedAuthor.map(a=>a.toJSON()));
        } else {
            console.log("Author not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
    }



create();
read();
update();
delete_data();