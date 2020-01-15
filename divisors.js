function divisors(integer) {
    let divs = [];
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
        divs.push(i);
      }
    }
    if (divs.length === 0){
      return `${integer} is prime`;
    } else {
      return divs;
    }
  };


// Better solution: only have to check half the numbers leading up to the integer
//
//   function divisors(integer) {
//     var res = []
//     for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//     return res.length ? res : integer + ' is prime'
//   };