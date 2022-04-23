const removeFromArray = function (arr, ...args) {

    args.forEach((element) => {
        if(arr.includes(element)) {
            arr.splice(arr.indexOf(element), 1);
        }
    });
      return arr;
}; 
// Do not edit below this line
module.exports = removeFromArray;
