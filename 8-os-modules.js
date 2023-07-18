// const names = require("./4-names");
// // console.log(names);

// const sayHi = require("./5-utils");
// sayHi(names.john);
// sayHi(names.peter);
// sayHi("shashank");

// const data = require("./6-alternnative-flavor");
// console.log(data);
//require(`./7-mind-grenade`);

const os = require("os");
const user = os.userInfo();
console.log(user);

//method return system uptime in seconds
console.log(os.uptime());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
