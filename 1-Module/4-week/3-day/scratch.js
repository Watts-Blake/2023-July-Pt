const ourFunc = () => {
  console.log(
    "the var key word will hoist its declaration to the top of your function, but your variable swill be undefined",
    str,
    arr
  );
  for (let i = 0; i < 10; i++) {
    var str = "declared with const, can not be reassing and is block scoped";
    string = "reassignment";
    console.log(str);
    // notice that you still can mutate that data if it is able to be mutated
    var arr = [1, 2, 3, 4];
    arr[0] = "we mutated";
    console.log(arr);
  }
  console.log("var is function scoped so we do have access", str);
  console.log("var is function scoped so we do have access", arr);
};

console.log(
  "var is function scoped so we do not have access in our global",
  str
);
console.log(
  "var is function scoped so we do not have access in our global",
  arr
);
ourFunc();
