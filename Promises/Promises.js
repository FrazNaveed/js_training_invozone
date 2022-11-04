let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 4000);
});

// .then(onFulfilled, onRejected)
promise.then(
  (val) => {
    console.log(val);
  },
  (val) => {
    console.log(val);
  }
);

console.log(promise);
