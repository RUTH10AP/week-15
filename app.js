// // require("./add.js");

// // console.log("hello viewers");

// // const multi = require("./export.js");

// // const product = multi(12, 3);
// // const product1 = multi(10, 8);
// // console.log(product);
// // console.log(product1);

// console.log(__dirname);
// console.log(__filename);

// const os = require("os");
// console.log("platform:", os.platform());
// console.log("Architecture:", os.arch());

// const greet = require(`./greet`);
// console.log(greet("alice"));

// const fs = require("fs");
// fs.writeFileSync("akrav.txt", "hello,akrav lab");
const fs = require("fs");
fs.writeFileSync("ruth.txt", "you did great ruthana");
const bela = fs.readFileSync("ruth.txt", "utf-8");

console.log(bela);
// const data = fs.readFileSync("akrav.txt", "utf-8");
// console.log(data);
