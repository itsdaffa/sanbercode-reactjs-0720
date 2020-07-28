// soal 1
var objectDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}

console.log(objectDaftarPeserta);

// soal 2
var buahbuahan = [
    {nama: "strawberry", warna: "merah", adaBijinya: false, harga: 9000},
    {nama: "jeruk", warna: "oranye", adaBijinya: true, harga: 8000},
    {nama: "semangka", warna: "hijau & merah", adaBijinya: true, harga: 10000},
    {nama: "pisang", warna: "kuning", adaBijinya: false, harga: 5000}
]
console.log(buahbuahan[0]);

// soal 3
var dataFilm = []
function inputData(nama, durasi, genre, tahun) {
    var data = {nama: nama, durasi: durasi, genre: genre, tahun: tahun};
    dataFilm.push(data);
}

inputData("Kill Bill", "Dua jam kali", "Horror", 2000);
inputData("Parasite", "Dua jam juga kali", "Horror Comedy", 2019)
console.log(dataFilm);

// soal 4
///release 1
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }
}

var kambing = new Animal("Mbek");

console.log(kambing._name);
console.log(kambing._legs);
console.log(kambing._cold_blooded);

///release 2
class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }

    yell() {
        return "Auooo";
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        return "hop hop";
    }
}

var sungokong = new Ape("kera sakti");
var kodok = new Frog("buduk");

console.log(sungokong.yell());
console.log(kodok.jump());

// soal 5
class Clock { 
    constructor({ template }) {
        this.template = template;
    }

    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    };
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    };
  
  }

  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 

