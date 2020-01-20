"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var App = /** @class */ (function () {
    function App(appInit) {
        this.app = express_1.default();
        this.port = appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.asset();
        this.template();
    }
    App.prototype.middlewares = function (middleWares) {
        var _this = this;
        middleWares.forEach(function (middleWare) {
            _this.app.use(middleWare);
        });
    };
    App.prototype.routes = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/', controller.router);
        });
    };
    App.prototype.asset = function () {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    };
    App.prototype.template = function () {
        this.app.set('view engine', 'pug');
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the port " + _this.port);
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=App.js.map