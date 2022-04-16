console.log("start");
async function foo() {
  return "done!";
}
async function bar() {
  console.log("inside bar-start");
  let result = await foo();
  console.log(result); //"done!"
  console.log("inside bar-end");
}
bar();
console.log("end");
////////////////////////////////////////////////////////////////
var p = new Promise((resolve, reject) => {
  resolve(Error("The Fails!"));
});
p.catch((error) => console.log(error.message)).finally(() =>
  console.log("Promise ready 2!")
);
//Promise ready 2!

var p = new Promise((resolve, reject) => {
  reject("The Fails!");
});
p.then((error) => console.log(error.message)).finally(() =>
  console.log("Promise ready 2!")
);
//Promise ready 2! and error

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));
//print message twice

var p = new Promise((resolve, reject) => {
  return Promise.reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));
//UnhandledPromiseRejectionWarning

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error.message))
  .then((error) => console.log(error));
//print error and `undefined`

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error.message))
  .catch((error) => console.log(error.message));
//print error message once

new Promise((resolve, reject) => {
  resolve("Success!");
})
  .then(() => {
    throw Error("Oh noes!");
  })
  .catch((error) => {
    return "actually, that worked";
  })
  .catch((error) => console.log(error.message));
//nothing prints

Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
  });
//print "SUCCESS!"

Promise.resolve("Success!")
  .then((data) => {
    console.log(data.toUpperCase());
  })
  .then((data) => {
    console.log(data);
  });
//print "SUCCESS!" and Undefined

Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .then(console.log);

Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .then(console.log);
//print "SUCCESS!" and "SUCCESS!"

Promise.resolve("Success!")
  .then((data) => {
    data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
  });
//prints `undefined`

Promise.resolve("Success!")
  .then(() => {
    throw Error("Oh noes!");
  })
  .catch((error) => {
    return "actually, that worked";
  })
  .then((data) => {
    throw Error("The fails!");
  })
  .catch((error) => console.log(error.message))
//print "The fails!"
Promise.resolve("Success!")
  .then(() => {
    throw Error("Oh noes!");
  })
  .catch((error) => {
    return "actually, that worked";
  })
  .then((data) => {
    throw Error("The fails!");
  })
  .catch((error) => console.log(error.message))
  .finally(console.log('Final'))
  //print Final and then "The fails!"