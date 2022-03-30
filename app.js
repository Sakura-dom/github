"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_body_1 = __importDefault(require("koa-body"));
var index_1 = __importDefault(require("./router/index"));
var path_1 = __importDefault(require("path"));
var koa_static_1 = __importDefault(require("koa-static"));
var koa2_cors_1 = __importDefault(require("koa2-cors"));
var koa_jwt_1 = __importDefault(require("koa-jwt"));
var jwt_1 = require("./middleware/jwt");
var cors_1 = require("./middleware/cors");
var pathName = (0, koa_static_1.default)(path_1.default.join(__dirname, './public'));
var app = new koa_1.default();
app.use(pathName);
app.use((0, koa_body_1.default)({
    multipart: true,
    formidable: {
        uploadDir: './public/img'
    }
}));
app.use((0, koa2_cors_1.default)(cors_1.corsHander));
//加签验签在路由之前
app.use((0, koa_jwt_1.default)({ secret: jwt_1.jwtConfig.jwtSecret }).unless({
    //配置白名单
    path: jwt_1.jwtConfig.whiteList
}));
app.use(index_1.default.routes()).use(index_1.default.allowedMethods());
app.listen(jwt_1.jwtConfig.port, function () {
    console.log("http://localhost:".concat(jwt_1.jwtConfig.port, " \u5DF2\u542F\u52A8"));
});
