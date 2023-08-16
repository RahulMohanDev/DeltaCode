// 1st issue
// I was writing all of the function on prototype
// function Product(name,price,manufacturer) {
//     let tax;
//     this.name = name;
//     this.price = price;
//     this.manufacturer = manufacturer;
//     const calculateTotalPrice = () => {
//         return (this.price + this.price*(tax/100));
//     }
// }

// Product.prototype.getProductDetails = function () {
//     return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`
// }

// Product.prototype.deleteMethod=function (methordName) {
//     delete this[methordName];
// }

// Product.Prototype.getTotalPrice = function() {
//     return calculateTotalPrice();
// }

// move things to constructor to access private variables with closure

// 2nd issue
// I was using arrow function for private method and also using this inside the private function

// function Product(name, price, manufacturer) {
//   let tax;
//   this.name = name;
//   this.price = price;
//   this.manufacturer = manufacturer;
//   // i made the arrow function to normal function
//   const calculateTotalPrice = () => {
//     return price + price * (tax / 100);
//   };
//   this.setTax = (newTax) => {
//     tax = newTax;
//   };
//   this.getTax = () => {
//     return tax;
//   };
//   this.getTotalPrice = function () {
//     // return calculateTotalPrice();
//     // return calculateTotalPrice.call(this);
//     // return calculateTotalPrice(this.price);
//     // return calculateTotalPrice();
//   };
// }

// Product.prototype.getProductDetails = function () {
//   return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`;
// };

// Product.prototype.deleteMethod = function (methordName) {
//   delete this[methordName];
// };

// const p1 = new Product("marker", 15, "abc");
// p1.setTax(10);
// console.log(p1.getTotalPrice());

// arrow function don't have its own this and can't be assigned to a this also

//  arrow function will have fix this (lexical scope);
//  arrow function this can't be changed;
// this.firstName = "global";

// const arrow = () => {
//     console.log(this.firstName);
// };

// const normal = function () {
//     console.log(this.firstName);
// }

// const obj = {
//     firstName: "Abdul",
//     arrow: arrow,
//     normal: normal,
//   };

// arrow.call(obj,"arrow function");
// normal.call(obj,"normal function");

// obj.arrow();
// obj.normal();

// this.firstName = "global";

// const test = function () {
//     console.log(this.firstName);
// }

// test();

//
function Product(name, price, manufacturer) {
  let tax;
  this.name = name;
  this.price = price;
  this.manufacturer = manufacturer;
  // i made the arrow function to normal function
  const calculateTotalPrice = () => {
    return price + price * (tax / 100);
  };
  this.setTax = (newTax) => {
    tax = newTax;
  };
  this.getTax = () => {
    return tax;
  };
  this.getTotalPrice = function () {
    // return calculateTotalPrice();
    // return calculateTotalPrice.call(this);
    // return calculateTotalPrice(this.price);
    return calculateTotalPrice();
  };

  //   this is also right
  //   this.deleteMethod = function (methodName) {
  //     delete this[methodName];
  //   };

  //   this.getProductDetails = function () {
  //     return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`;
  //   };
}

// on solution
// Product.prototype.getProductDetails = function () {
//   return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`;
// };

// Product.prototype.deleteMethod = function (methodName) {
//   delete Product.prototype[methodName];
// };

const p1 = new Product("marker", 15, "abc");
p1.setTax(10);
//   console.log(p1.getTotalPrice());
console.dir(p1);
console.log(p1.getProductDetails);
p1.deleteMethod("getProductDetails");
console.log(p1.getProductDetails);
