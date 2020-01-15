function songDecoder(song){
    let wubIndex = song.indexOf('WUB');
    if (wubIndex >= 0) {
      return (song.substring(0, wubIndex) + ' ' + songDecoder(song.substring(wubIndex + 3))).trim();
    } else {
      return song;
    }
  }

// Better solution: use regex
//   function songDecoder(song){
//     return song.replace(/(WUB)+/g," ").trim()
//   }