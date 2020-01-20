"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var bodyParser = __importStar(require("body-parser"));
var logger_1 = __importDefault(require("./middleware/logger"));
var home_controller_1 = __importDefault(require("./controllers/home.controller"));
var dbtest_controller_1 = __importDefault(require("./controllers/dbtest.controller"));
var app = new App_1.default({
    port: 3000,
    controllers: [
        new home_controller_1.default(),
        new dbtest_controller_1.default(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger_1.default
    ]
});
app.listen();
//# sourceMappingURL=server.js.map