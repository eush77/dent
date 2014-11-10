'use strict';


module.exports = function dent(array) {
  if (array === undefined) {
    return dent.tail.shift();
  }

  dent.array = array;
  dent.tail = array.slice();
  return dent();
};
