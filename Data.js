  const authorsData=[
  { name: 'J.K. Rowling', birth_year: 1965, nationality: 'British' },
  { name: 'George Orwell', birth_year: 1903, nationality: 'British' },
  { name: 'Haruki Murakami', birth_year: 1949, nationality: 'Japanese' },
  { name: 'Gabriel García Márquez', birth_year: 1927, nationality: 'Colombian' }

]
const booksData = [
  { titles: 'One Hundred Years of Solitude', authorId: 4, genre: 'Magical Realism', isbn: '9780060883287', publication_year: '1967' },
  { titles: 'To Kill a Mockingbird', authorId: 1, genre: 'Fiction', isbn: '9780061120084', publication_year: '1960' },
  { titles: '1984', authorId: 2, genre: 'Dystopian', isbn: '9780451524935', publication_year: '1949' },
  { titles: 'Pride and Prejudice', authorId: 3, genre: 'Romance', isbn: '9781503290563', publication_year: '1813' },
  { titles: 'The Great Gatsby', authorId: 2, genre: 'Tragedy', isbn: '9780743273565', publication_year: '1925' },
  { titles: 'Harry Potter and the Philosopher\'s Stone', authorId: 1, genre: 'Fantasy', isbn: '9780747532743', publication_year: '1997' },
  { titles: 'Norwegian Wood', authorId: 3, genre: 'Fiction', isbn: '9780375704024', publication_year: '1987' },
  { titles: 'The Catcher in the Rye', authorId: 2, genre: 'Fiction', isbn: '9780316769488', publication_year: '1951' }
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