"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var bodyParser = require("body-parser");
var logger_1 = require("./middleware/logger");
var home_controller_1 = require("./controllers/home.controller");
var app = new app_1.default({
    port: 3000,
    controllers: [
        new home_controller_1.default(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger_1.default
    ]
});
app.listen();
//# sourceMappingURL=server.js.map