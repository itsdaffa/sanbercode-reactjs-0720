// soal 1
function halo() {
    return "Halo Sanbers!"
}

console.log(halo());

// soal 2
function kalikan(num1, num2) {
    return num1*num2
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali)

//soal 3
function introduce(name, age, address, hobby) {
    return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby
}

var name = "Daffa";
var age = 18;
var address = "One Hacker Way";
var hobby = "Membaca";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan)