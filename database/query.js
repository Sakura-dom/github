"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAll = void 0;
var connection_1 = __importDefault(require("./connection"));
function queryAll(sql) {
    return new Promise(function (resolve, reject) {
        connection_1.default.query(sql, function (err, res) {
            if (err) {
                console.log(sql);
                reject(err);
            }
            else {
                resolve(res);
            }
        });
    });
}
exports.queryAll = queryAll;
