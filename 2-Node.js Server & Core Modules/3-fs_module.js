let fs = require("fs");

fs.writeFileSync("myFile.txt", "hello World! ");
fs.appendFileSync("myFile.txt", "how are you?");
let data = fs.readFileSync("myFile.txt");
console.log(data);
console.log(data.toString());
// async
fs.readFile("myFile.txt", (err, data2) => {
    console.log(data2.toString());
});
console.log("hello");
