// Mutasi Data Array
const s = [2, 5, 8];
function editArr() {
  // s = [5, 8, 2]; jika seperti ini hasilnya akan error

  s[0] = 5; // s index ke-0 diganti angka 5, dst
  s[1] = 8;
  s[2] = 2;
}
editArr();
console.log(s)





// Prevent Object Mutasi
function freezeObj() {
  const MATH_CONSTANTS = {
    PI:3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);






// Arrow Function

// 1. Arrow Function pada Anonymous Function:
var magic = function() {  //__________
  return new Date();      // ini adalah contoh Anonymous Function
};                        //__________

const arrow = () => new Date(); // ini adalah contoh penggunaan arrow function pada anonymous func untuk mempersingkat penulisan syntax

// 2. Arrow Function pada Function dengan parameter
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

    // berikut ini contoh arrow functionnya
    const myConcats = (ar1, ar2) => ar1.concat(ar2);
    console.log(myConcats([2, 3], [4, 5, 6]));







// Arrow Function Tingkat Tinggi (Filter & Map)
const himpunAngka = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const listAngka = (a) => {
  const angka = a.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return angka;
};

const angka = listAngka(himpunAngka);
console.log(angka);



const nomer = [34, 1.2, -4, -26, 9, -0.91, 10];
const list = (b) => {
  const nmr = b.filter(ang => Number.isInteger(ang) && ang > 0).map(z => z * z);
  return nmr;
};

const nmr = list(nomer);
console.log(nmr);



const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));