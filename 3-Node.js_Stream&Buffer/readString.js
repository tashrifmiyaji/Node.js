// const fs = require("fs");

// // const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, "utf-8");

// // ourReadStream.on("data", (data) => {
// //     console.log(data);
// // });
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

// ourReadStream.on("data", (chunk) => {
//     console.log(chunk.toString());
// });
// console.log("hello");

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(`<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <title>Document</title>
        </head>

        <body>
          <form action="/process" method="post">
          <textarea name="messsage"></textarea>
          <input type="submit"/>
          </form>
        </body>

        </html>`);
        res.end();
    } else if (req.url === "/process") {
        // req.on("data", (chunk) => {
        //     console.log(chunk.toString());
        // });
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            console.log("string is finished");
            const parsedBody = Buffer.concat(body);
            console.log(parsedBody.toString());
        });
        res.write("thanks for submited");
        res.end();
    } else {
        res.write("not found");
        res.end();
    }
});
server.listen(3000);
