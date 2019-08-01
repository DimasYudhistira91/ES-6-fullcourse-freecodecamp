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

