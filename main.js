const f = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
};

const f2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 3000);
  });
};

console.log('----');
console.log($);


//
//
//
// const testAsync = async ()=>{
//   const t = await f();
//   console.log('f');
//   console.log(t);
//   const t2 = await f2();
//   console.log('f2');
//   console.log(t);
//   const t3 = await f();
//   console.log('f3');
//   console.log(t);
// }
//
// console.time('async');
// testAsync();
// console.timeEnd('async');
