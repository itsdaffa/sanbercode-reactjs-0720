// soal 1
console.log("LOOPING PERTAMA");
var i = 2;
while (i <= 20) {
    console.log(i+" - I Love Coding");
    i += 2;
}

console.log("LOOPING KEDUA");
var j = 20;
while(j >= 2) {
    console.log(j+" - I will become a frontend developer");
    j -= 2;
}

console.log('\n');
// soal 2
for (var k=1; k <= 20; k++) {
    
    if (k%2 == 0) {
        console.log(k+" - Berkualitas")
    }

    else if (k%3==0 && k%2!=0) {
        console.log(k+" - I Love Coding")
    }

    else {
        console.log(k+" - Santai")
    }
}

console.log('\n');
//soal 3
dimension = 7;
for (var l="#"; l.length < dimension+1; l += "#") {
    console.log(l)
}

console.log('\n');
// soal 4
var kalimat="saya sangat senang belajar javascript";
array = kalimat.split(" ");
console.log(array);

console.log('\n');
// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var m = 0
for (var m = 0; m <= daftarBuah.length-1; m++) {
   console.log(daftarBuah.sort()[m]);
}



