const promise1 = new Promise((resolve, reject) => {
  resolve(3);
});
const promise2 = new Promise((resolve, reject) => {
  resolve(4);
});
Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "promise3");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "promise4");
});

Promise.race([promise3, promise4])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
