"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var connection = mysql_1.default.createPool({
    host: "192.168.5.104",
    port: 3306,
    user: "no4",
    password: 'rootroot',
    database: 'exam_data'
});
exports.default = connection;
