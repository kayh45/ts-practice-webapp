"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
class HomeController {
    constructor() {
        this.path = '/user';
        this.router = express.Router();
        this.index = (req, res) => {
            let data = {
                hello: 'Hello World!'
            };
            data.name = 'Hyeon';
            res.render('index', { data });
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/user', this.index);
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map