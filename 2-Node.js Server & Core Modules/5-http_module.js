const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("hello programmer ");
        res.write("how are you?");
        res.end();
    } else if (req.url === "/about") {
        res.write("thisis about us page");
        res.end();
    } else {
        res.write("not found");
        res.end();
    }
});
server.listen(3000);

// server.on("connection", () => {
//     console.log("new connection...");
// });
