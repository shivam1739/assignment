function sqr(arr, fun1) {
  let res = arr.map((items) => {
    return items * items;
  });
  console.log("sqring the arr", res);
  fun1(arr);
}
function div(arr, fun2) {
  let res = arr.map((items) => {
    return items / 5;
  });
  console.log("dividinig the arr by 5 ", res);
  fun2(arr);
}
function root(arr) {
  let res = arr.map((items) => {
    return Math.sqrt(items);
  });
  console.log("root of array", res);
}

let driver = (arr) => {
  sqr(arr, () => {
    div(arr, () => {
      root(arr);
    });
  });
};

let arr = [4, 16, 25];
driver(arr);
