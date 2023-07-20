function makeCar(name, wheelCount) {
  const obj = {};
  obj.name = name;
  obj.wheelCount = wheelCount;
  obj.type = "Car";
  // obj.__proto__=vehicle;
  Object.setPrototypeOf(obj, vehicle);
  return obj;
}

function makeBike(name, wheelCount) {
  const obj = {};
  obj.name = name;
  obj.wheelCount = wheelCount;
  obj.type = "Bike";
  Object.setPrototypeOf(obj, vehicle);
  // obj.__proto__=vehicle;
  return obj;
}
