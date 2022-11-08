const promise1 = () => {
  return new Promise((res, rej) => {
    setInterval(() => {
      res("fraz");
    }, 1000);
  });
};

const promise2 = () => {
  return new Promise((res, rej) => {
    setInterval(() => {
      rej("naveed");
    }, 2000);
  });
};

const promise3 = () => {
  return new Promise((res, rej) => {
    setInterval(() => {
      res("fn");
    }, 3000);
  });
};

const promise = Promise.race([promise1(), promise2(), promise3()])
  .then((val) => {
    console.log(...val);
  })
  .catch((val) => {
    console.log(val);
  });
console.log(promise);
