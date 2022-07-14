const getTheTitles = function(books) {
    let authors=[];
    books.forEach(book => {
        authors.push(book.title);
    });
    return authors;
};

// Do not edit below this line
module.exports = getTheTitles;
