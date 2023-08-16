// let sayMixin = {
//  say: (name)=>{
//      console.log(name+"hi");
//  }
// }

// class User {
//     constructor(name){
//         this.name = name;
//     }
// }

// SOL

let sayHiMixin = {};

Object.setPrototypeOf(sayHiMixin, sayMixin);

const parrent = Object.getPrototypeOf(sayHiMixin);

sayHiMixin.say = function () {
  return parrent.say(this.name);
};

// add to pototype
function setPrototype() {
  Object.assign(User.prototype, sayHiMixin);
}

// setPrototype();

// const user1 = new User("rahul");

// user1.say();
