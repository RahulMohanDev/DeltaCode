class FooBar {
  constructor(foo, bar) {
    this.foo = foo;
    this.bar = bar;
  }
}

function solve(obj, a, b) {
  // obj: object of class FooBar, with foo and bar as its attributes set from input
  // should somehow return the following
  // return obj.foo + obj.bar + func(a, b);
  return obj.foo + obj.bar + func.call(obj, a, b);
}
r