const authorsData=[
  { name: 'J.K. Rowling', birth_year: 1965, nationality: 'British' },
  { name: 'George Orwell', birth_year: 1903, nationality: 'British' },
  { name: 'Haruki Murakami', birth_year: 1949, nationality: 'Japanese' },
  { name: 'Gabriel García Márquez', birth_year: 1927, nationality: 'Colombian' }

]
const booksData = [
    { id:1,title: 'Harry Potter and the Philosopher\'s Stone', authorId: 1, genre: 'Fantasy', isbn: '9780747532743', publication_year: '1997' },
    {id:2, title: 'Wonderfull day', authorId: 2, genre: 'Dystopian Fiction', isbn: '9780451524935', publication_year: '1949' },
    { id:3,title: 'Norwegian Wood', authorId: 3, genre: 'Fiction', isbn: '9780375704024', publication_year: '1987' },
    { id:4,title: 'One Hundred Years of Solitude', authorId: 4, genre: 'Magical Realism', isbn: '9780060883287', publication_year: '1967' }
  ];
  
  
  const membersData = [
    { name: 'John Doe', address: '123 Main St, Anytown', phone_number: 555-1234, email: 'john.doe@example.com' },
    { name: 'Jane Smith', address: '456 Oak Ave, Another Town', phone_number: 555-5678, email: 'jane.smith@example.com' }
  ];
  
  const loansData = [
    { member_id: 1, book_id: 1, loan_date: new Date(), due_date: new Date('2024-07-15') },
    { member_id: 2, book_id: 3, loan_date: new Date(), due_date: new Date('2024-07-20') }
  ];
  
  const reservationsData = [
    { member_id: 1, book_id: 2, reservation_date: new Date() },
    { member_id: 2, book_id: 4, reservation_date: new Date() }
  ];
  
  module.exports = {
    authorsData,
    booksData,
    membersData,
    loansData,
    reservationsData
  };