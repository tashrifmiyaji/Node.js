// const fs = require("fs");

// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
// const ourwriteStream = fs.createWriteStream(`${__dirname}/output2.txt`);

// // ourReadStream.on("data", (chunk) => {
// //     ourwriteStream.write(chunk);
// // });

// ourReadStream.pipe(ourwriteStream);

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    const myReadString = fs.createReadStream(`${__dirname}/bigData.txt`, "utf-8");
    myReadString.pipe(res);
});
server.listen(3000);
console.log("hello");
