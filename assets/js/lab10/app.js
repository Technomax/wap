console.log('Foo: Start', new Date().toLocaleTimeString());

setTimeout(() => {
  console.log(
    'Poo: To be called in 5 seconds ',
    new Date().toLocaleTimeString()
  );
}, 5000);

const waitlogForNseconds = seconds => {
  const startTime = new Date().getTime();
  const milliseconds = 1000;
  const endTime = startTime + seconds * milliseconds;
  let currTime = new Date().getTime();
  while (endTime > currTime) {
    currTime = new Date().getTime();
  }
  console.log(
    `Goo: To be called after ${seconds} End `,
    new Date().toLocaleTimeString()
  );
};

waitlogForNseconds(4);

console.log('Bar: ', new Date().toLocaleTimeString());