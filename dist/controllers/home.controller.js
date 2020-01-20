"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var HomeController = /** @class */ (function () {
    function HomeController() {
        this.path = '/user';
        this.router = express.Router();
        this.index = function (req, res) {
            var data = {
                hello: 'Hello World!'
            };
            data.name = 'Hyeon';
            res.render('index', { data: data });
        };
        this.initRoutes();
    }
    HomeController.prototype.initRoutes = function () {
        this.router.get('/user', this.index);
    };
    return HomeController;
}());
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map