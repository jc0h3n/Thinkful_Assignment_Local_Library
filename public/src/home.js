function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  const arrayOfBorrowInstances = books.map(book => book.borrows[0].returned);
  return arrayOfBorrowInstances.filter(element => element === false).length;
}

//helper function
function formatList (array){
  array.sort((acc, value) => acc.count > value.count ? -10 : 10);
  while(array.length > 5){
    array.pop();
  }
  return array;
};

function getMostCommonGenres(books) {
  const instances = books.map(book => book.genre);
  const genres = [...new Set(instances)];
  const countGenres = [];
  for(let genre of genres){
    let counter = 0;
    for(let instance of instances){
      if(genre === instance) counter++;
    };
    const input = {name: genre,
                    count: counter};
    countGenres.push(input);
  };
  return formatList(countGenres);
}

function getMostPopularBooks(books) {
  const MostPopBooks = [];
  for(let book of books){
    const borrowCount = book.borrows.length;
    const bookObject = { name: book.title,
                          count: borrowCount};
    MostPopBooks.push(bookObject);
  };
  return formatList(MostPopBooks)
}

function getMostPopularAuthors(books, authors) {
  const MostPopAuthor = [];
  for(let author of authors){
    const authorName = `${author.name.first} ${author.name.last}`;
    let borrowCounter = 0;
    for(let book of books){
      if(author.id === book.authorId){
        borrowCounter += book.borrows.length;
      };
    };
    const authorObject = {name : authorName,
                          count : borrowCounter};
    MostPopAuthor.push(authorObject);
  };

return formatList(MostPopAuthor);
};

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
