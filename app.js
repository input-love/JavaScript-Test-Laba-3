function findCountOfElements(size, data) {
    let n = +size;

    if (isNaN(n)) {
      throw new Error(-1001);
    }
    if (n < 1 || n > 10000) {
      throw new Error(-1002);
    }

    let count = 0;
    for (let i = 1; i < n; i++) {
      if (data[i-1] < -1000 || data[i] < -1000 || data[i] > 1000 || data[i-1] > 1000) {
        throw new Error(-1002);
      } 
      else if (!Number.isInteger(data[i]) || !Number.isInteger(data[i -1])) {  
        throw new Error(-1001);
      }
      
      if (data[i] > data[i-1]) {
          count++;
      }
    }

  return count;
}

module.exports = findCountOfElements;

