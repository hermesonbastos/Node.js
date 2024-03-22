const path = require("path");

console.log(path.resolve("hermeson.txt"));

const midFolder = "curriculos";
const fileName = "hermeson.txt";

console.log(path.join("/", midFolder, fileName));