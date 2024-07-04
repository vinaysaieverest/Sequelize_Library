// CRUD Operations for Books
const { where } = require('sequelize');
const books = require('../Models/Books');
// const {authorsData} = require('../Data');
const authorsData1 = {
    titles:'Think out side',
    authorId: 3,
     genre: 'Fantasy',
      isbn: '97807475371323', 
      publication_year: '2002'
}

const create  =  async()=>{
    try{
        await books.create(authorsData1);
        const a =  await books.findAll();
        console.table(a.map(b =>b.toJSON()))
        console.log("DATA CREATED");
        

    }
    catch{
        console.log("SOME THING ERROR HAPPENS")
    }
};
const read  =  async()=>{
    try{
        const Allbooks = await books.findAll();
        console.log("THIS IS THE AUTHORS DATA")
        console.table(Allbooks.map(a => a.toJSON()))
        const book3 = await books.findByPk(3);
        console.table(book3.toJSON());
        const book4 = await books.findOne({where:{name:'Harry Potter and the Philosophers Stone'}});
        console.table(book4.toJSON());
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
        const book5 = await books.findByPk(3);
        if (book5) {
            await books.update(new_details, { where: { id: 3 } });
            const updatedAuthor = await books.findAll();
            console.table( updatedAuthor.map(a=>a.toJSON()));
        } else {
            console.log("Book not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
};
const delete_data = async()=>{
    try{
        const book6 = await books.findByPk(3);
        if (book6) {
            await books.destroy({ where: { id: 3} });
            const updatedbook = await books.findAll();
            console.table( updatedbook.map(a=>a.toJSON()));
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