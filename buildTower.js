function towerBuilder(nFloors) {
    let floors = [];
    let width = nFloors * 2 - 1;
    let midpoint = (width - 1) / 2;
    
    for (let floorNum = 0; floorNum < nFloors; floorNum++) {
      let floor = "";
      
      for(let charNum = 0; charNum < width; charNum++){
        if (charNum >= (midpoint - floorNum) && charNum <= (midpoint + floorNum)) {
          floor += '*';
        } else {
          floor += ' ';
        }
      }
      floors.push(floor);
    }
    return floors;
  }

// better solution fron code kata
//
//   function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//       const spaces = ' '.repeat(n - k - 1);
//       return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
//   }

/*  NOTES:
    Array.from() can take a second map function argument. MDN example makes no sense to me?

    String.repeat() constructs and returns a new string which contains the specified number 
    of copies of the string on which it was called, concatenated together.
*/