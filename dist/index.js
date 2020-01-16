"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var HttpPort = 3000;
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(HttpPort, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map