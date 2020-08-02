var readBooksPromise = require('./promise.js');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
];

function readBook(time, index) {
    readBooksPromise(time, books[index], function(sisaWaktu){
        if (sisaWaktu>0) {
            if(index+1<books.length){
                readBook(timeLeft, index+1)
            } else {
                console.log("TIME'S UP!")
            }
        }
    }).then(function (fulfilled) {
        readBooksPromise(fulfilled, books[index+1]);
    }).then(function (fulfilled) {
        readBooksPromise(fulfilled, books[index+1]);
    }).then(function (fulfilled) {}) 
    .catch(function(error) {
        console.log(error.message);
    })
}

readBook(10000, 0)