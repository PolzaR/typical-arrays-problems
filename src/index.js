
exports.min = function min (array) {
    if (array && array.length) {
      let min = array[0];
      for (let i = 1; i < array.length; i++) {
          if (array[i] < min) {
              min = array[i]
          }
      }
      return min;
      } else {
          return 0;
      }
  }
  
  exports.max = function max (array) {
    if (array && array.length) {
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
          if (array[i] > max) {
              max = array[i];
          }
      }
      return max;
      } else {
          return 0;
      }
  }
  
  exports.avg = function avg (array) {
    if (array && array.length) {
          let result = 0;
          for (let i = 0; i < array.length; i++) {
              result += array[i] / array.length;
          }
          if (result.toString().indexOf('.') === -1) {
          return result;
      } else {
          return result.toFixed(2);
      }
    } else {
          return 0;
      }
  }
