// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama+" "+kataKedua.charAt(0).toUpperCase().concat(kataKedua.substring(1))+" "+kataKetiga+" "+kataKeempat.toUpperCase());

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat));

// soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 15);
var kataKetiga = kalimat.substring(15, 19);
var kataKeempat = kalimat.substring(19, 25);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai =  55;
var index = "N/A";

if (nilai >= 80) {
    index = "A"
}
else if (nilai >= 70 && nilai < 80) {
    index = "B"
}

else if (nilai >= 60 && nilai < 70) {
    index = "C"
}

else if (nilai >= 50 && nilai < 60) {
    index = "D"
}

else {
    index = "C"
}

console.log("Nilai: "+nilai)
console.log("Indeks: "+index)

// soal 5
var tanggal = 22;
var bulan = 11;
var tahun = 2000;

switch (bulan) {
    case 1: {bulan = "Januari"; break;}
    case 2: {bulan = "Februari"; break;}
    case 3: {bulan = "Maret"; break;}
    case 4: {bulan = "April"; break;}
    case 5: {bulan = "Mei"; break;}
    case 6: {bulan = "Juni"; break;}
    case 7: {bulan = "Juli"; break;}
    case 8: {bulan = "Agustus"; break;}
    case 9: {bulan = "September"; break;}
    case 10: {bulan = "Oktober"; break;}
    case 11: {bulan = "November"; break;}
    case 12: {bulan = "Desember"; break;}
}

console.log(String(tanggal)+" "+bulan+" "+String(tahun))