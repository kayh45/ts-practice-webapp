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
var mysql = __importStar(require("mysql"));
var DBtestController = /** @class */ (function () {
    function DBtestController() {
        var _this = this;
        this.path = '/dbtest';
        this.router = express.Router();
        this.connectionString = {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'test'
        };
        this.exe_add = function (req, res) {
            var name = req.body.name;
            var email = req.body.email;
            var conn = mysql.createConnection(_this.connectionString);
            conn.connect();
            conn.query("insert into users (name, email) values (?, ?)", [name, email], function (err, result, fields) {
                if (err)
                    throw err;
                console.log('Successfully saved');
                res.redirect('/dbtest');
            });
            conn.end();
        };
        this.index = function (req, res) {
            var conn = mysql.createConnection(_this.connectionString);
            var data = {
                title: 'This is a DB Test Page.'
            };
            conn.connect();
            conn.query("select * from users", function (err, rows, fields) {
                var users = [];
                if (err)
                    throw err;
                rows.forEach(function (el) {
                    users.push(el);
                    console.log(el);
                });
                data.users = users;
                res.render('dbtest/index', { data: data });
            });
            conn.end();
        };
        this.initRoutes();
    }
    DBtestController.prototype.initRoutes = function () {
        this.router.get(this.path, this.index);
        this.router.post(this.path + '/exe_add', this.exe_add);
    };
    return DBtestController;
}());
exports.default = DBtestController;
//# sourceMappingURL=dbtest.controller.js.map