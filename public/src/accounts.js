//finished
function findAccountById(accounts, id) {
  const [foundAccount] = accounts.filter(individualUser => individualUser.id === id);
  return foundAccount;
}

//finished
function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 10 : -10 );
};

//finished
//books is an object: books[index].borrows = array of borrows on that book
function numberOfBorrows({id : userID}, books) {
  let countOfBorrows = 0;
  for(let book in books){
    const borrowArray = books[book].borrows;
    const borrowedInstances = borrowArray.filter(eachBorrow => eachBorrow.id === userID);
    countOfBorrows += borrowedInstances.length;
  };
  return countOfBorrows;
}


function getBooksPossessedByAccount(account, books, authors) {
  
  const userID = account.id;
  
  const allCheckedOut = [];
  
  //puts authors into books array
  for(let i = 0; i < books.length; i++){
    for(let j = 0; j < authors.length; j++){
      const book = books[i];
      const author = authors[j];
      if(book.authorId === author.id){
        book["author"] = authors[j];
      };
    };
  };

  //searches books array for userID and whether or not a book has been returned
   for(let book of books){
    for(let borrow of book.borrows){
      if(borrow.id === userID && borrow.returned === false){
        allCheckedOut.push(book);
      };
    };   
  };
return allCheckedOut;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
