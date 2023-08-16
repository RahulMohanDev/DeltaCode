Array.prototype.myMap = function (cb) {
  const mappedArray = [];
  for (let el of this) {
    mappedArray.push(cb(el));
  }
  return mappedArray;
};

Array.prototype.myReduce = function (cb, initialValue) {
  let total = initialValue;
  for (let el of this) {
    total = cb(total, el);
  }
  return total;
};

Array.prototype.myFilter = function (cb) {
  const mappedArray = [];
  for (let el of this) {
    if (cb(el)) mappedArray.push(el);
  }
  return mappedArray;
};
