const outer = (argOuter) => {
  return (argInner) => {
    console.log(argOuter + argInner);
  };
};
const res = outer(1);
res(2);
res(3);
res(4);
