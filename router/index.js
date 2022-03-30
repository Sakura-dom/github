"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routerConfig_1 = __importDefault(require("./routerConfig"));
var Router = require('koa-router');
// const router=new Router();
var router = new Router({ prefix: "/appo" });
routerConfig_1.default.forEach(function (item) {
    var cb = router[item.method.toLocaleLowerCase()];
    cb.call(router, item.url, item.callback.bind(router));
});
exports.default = router;
