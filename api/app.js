function a() {
  return "A";
}
function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B");
    }, 2000);
  });
}
function c() {
  return "C";
}

// console.log(a());
// b().then((value) => {
//   console.log(value);
//   console.log(c());
// });
async function app() {
  console.log(a());
  console.log(await b());
  console.log(c());
}
app();
