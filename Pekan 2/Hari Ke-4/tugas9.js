//SOAL 1
/* return dalam fungsi di bawah ini masih menggunakan object literal dalam ES5, ubahlah menjadi bentuk yang lebih sederhana di ES6.

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName()  */

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`) 
            }
        }

    }


newFunction("William", "Imoh").fullName()


// SOAL 2
/* Diberikan sebuah objek sebagai berikut:

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:

const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;

Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)

// Driver code
console.log(firstName, lastName, destination, occupation) */

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

  const {firstName, lastName, destination, occupation, spell} = newObject
  console.log(firstName, lastName, destination, occupation) 

  // SOAL 3
/*   Kombinasikan dua array berikut menggunakan array spreading ES6

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = west.concat(east)
//Driver Code
console.log(combined) */

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]

console.log(combined) 
