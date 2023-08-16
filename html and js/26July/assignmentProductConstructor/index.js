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
}

Product.prototype.getProductDetails = function () {
  return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`;
};

Product.prototype.deleteMethod = function (methodName) {
  delete Product.prototype[methodName];
};
