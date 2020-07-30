// SOAL 1
let r = 5 // jari-jari lingkaran
const luasLingkaran = (r) => {
    return 3.14 * (r**2)
}
const kelilingLingkaran = (r) => {
    return 3.14 * 2 * r
}

console.log(`Luas lingkaran dengan jari-jari ${r} merupakan ${luasLingkaran(r)} dan kelilingnya merupakan ${kelilingLingkaran(r)}`)

// SOAL 2
let kalimat = "";

const menambahkanKata = (kata) => {
    return kalimat += kata
}

let kata1= "saya";
let kata2= "adalah";
let kata3= "seorang";
let kata4= "frontend";
let kata5= "developer";

menambahkanKata(`${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`)
console.log(kalimat)

// SOAL 3
class Book {
    constructor(nama, totalHalaman, harga) {
        this.name = nama;
        this.totalPage = totalHalaman;
        this.price = harga;
    }
}

class Komik extends Book {
    constructor(nama, totalHalaman, harga, berwarna= false) { //berwarna bisa diganti True
        super(nama, totalHalaman, harga)
        this.isColorful = berwarna;
    }
}

let Kalkulus = new Book('Kalkulus', 3000, 49.99);
let Conan = new Komik('Detective Conan', 500, 29.99)
console.log(Kalkulus, '\n', Conan)