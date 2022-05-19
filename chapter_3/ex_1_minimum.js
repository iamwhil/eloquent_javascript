// Find the minimum of 2 numbers

const min = (a, b) => { a <= b ? console.log(a) : console.log(b) };

let min2 = function(a, b) {
  a <= b ? console.log(a) : console.log(b);
};

function min3(a, b) {
  a <= b ? console.log(a) : console.log(b);
};

min(1, 2);
min2(3, 4);
min3(5, 6);