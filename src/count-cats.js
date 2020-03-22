module.exports = function countCats(matrix) {
    const ears = '^^';
    let counter = 0;

    for (let array of matrix) {
      for (let el of array) {
        if (el === ears) {
          counter++;
        }
      }
    }

    return counter;
};
