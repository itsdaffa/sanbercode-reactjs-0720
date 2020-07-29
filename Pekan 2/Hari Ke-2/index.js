var readBooks = require('./callback.js');

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
];

function readingBooks(time, index) {
    readBooks(time, books[index], function(sisaWaktu){
        if(sisaWaktu >= 0){
            readingBooks(sisaWaktu, index+1)
        } else {
            console.log("TIME'S UP") ////
        }
    })
}

readingBooks(10000,0)