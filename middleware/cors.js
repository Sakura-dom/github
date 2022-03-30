"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsHander = void 0;
exports.corsHander = {
    origin: function (ctx) {
        return '*';
    },
    maxAge: 5 * 24 * 60 * 60,
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'PATCH'],
    // allowHeaders:['Content-Type','Authorization','token','Accept','X-Requestd-With']
    allowHeaders: ['*']
};
