function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
};

function findBookById(books, id) {
  return books.find(book => book.id === id);
};

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  const returnedBooks = books.filter(book => book.borrows[0].returned === true);
  const finalArray = [borrowedBooks,returnedBooks]
  return finalArray;
};

//return an array of all the transactions from the book's `borrows` key
//      whenever userID matches id in book.borrows.id
//add returned key-value pair into the array
//book is an object
//accounts is an array of objects
function getBorrowersForBook({borrows}, accounts) {
  const borrowArray = [];
  for(let borrow of borrows) {
      const borrowID = borrow.id;
      for(let account of accounts){
        const accountID = account.id;
        const accountReturn = borrow.returned;
        if (borrowID === accountID){
          account["returned"] = accountReturn;
          borrowArray.push(account);
        };
      };
    };
  
  while(borrowArray.length > 10){
    borrowArray.pop();
  };
  return borrowArray;
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
