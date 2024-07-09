// CRUD Operations for Loans
const { where } = require('sequelize');
const loans = require('../Models/Loans');
// const {authorsData} = require('../Data');
const loansData1 = {
    member_id: 1, 
    book_id: 3, 
    loan_date: new Date(), 
    due_date: new Date('2024-07-16')
}

const create  =  async()=>{
    try{
        await loans.create(loansData1);
        const a =  await loans.findAll();
        console.table(a.map(b =>b.toJSON()))
        console.log("DATA CREATED");
        

    }
    catch{
        console.log("SOME THING ERROR HAPPENS")
    }
};
const read  =  async()=>{
    try{
        const Allloans = await loans.findAll();
        console.log("THIS IS THE AUTHORS DATA")
        console.table(Allloans.map(a => a.toJSON()))
        const loan3 = await loans.findByPk(3);
        console.table(loan3.toJSON());
        const loan4 = await loans.findOne({where:{member_id:2}});
        console.table(loan4.toJSON());
    }
    catch(error){
        console.log("SOME THING ERROR HAPPENS")
    }
};
const new_details = {
    member_id: 2, 
    book_id: 4, 
    loan_date: new Date(), 
    due_date: new Date('2024-07-18')
}
const update = async () => {
    try {
        const loan5 = await loans.findByPk(3);
        if (loan5) {
            await loans.update(new_details, { where: { id: 3 } });
            const updatedloan = await loans.findAll();
            console.table( updatedloan.map(a=>a.toJSON()));
        } else {
            console.log("Loan not found");
        }
    } catch (err) {
        console.log("Update failed", err);
    }
};
const delete_data = async()=>{
    try{
        const loan6 = await loans.findByPk(3);
        if (loan6) {
            await loans.destroy({ where: { id: 3} });
            const updatedloan = await loans.findAll();
            console.table( updatedloan.map(a=>a.toJSON()));
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