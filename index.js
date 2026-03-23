const https = require("https");
const http = require("http");
const fs = require("fs");

const myModule = require("./my-module.js");
console.log(myModule.myFunction());

https
    .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
            data += chunk;
        });

        resp.on("end", () => {
            console.log(JSON.parse(data));
        });
    })
    .on("error", (err) => {
        console.log("Error: " + err.message);
    });

fs.writeFile("file.txt", "Hello World!", function (err) {
    if (err) throw err;
    console.log("File saved!");
});

fs.readFile("file.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
});

http
    .createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Hello World!");
        res.end();
    })
    .listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    })
    .on("error", (err) => {
        console.log("Error: " + err.message);
    });

const condition = true;

const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

async function myFunction() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myFunction();