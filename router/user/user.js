"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editAdiminData = exports.getList = exports.getlists = exports.getPersonal = exports.getData = exports.labourExam = exports.ischeckList = exports.addIscheck = exports.amendQuestions = exports.deleteList = exports.distQuestions = exports.addQuestions = exports.getUesId = exports.getQuestions = exports.StateMent = exports.uploadHeadImg = exports.removeStudent = exports.revampStudent = exports.addStudent = exports.addTypeData = exports.setGradeData = exports.removeTypeData = exports.removeGradeDate = exports.addGradeData = exports.getStudentData = exports.getGradenData = exports.removeOption = exports.addOption = exports.removeClassify = exports.createClassify = exports.updateExam = exports.publicExam = exports.removeStore = exports.addStore = exports.cloneStoreQuestions = exports.storeQuestions = exports.removeInfoQuestions = exports.addInfoQuestions = exports.setNowExamData = exports.changeQuestions = exports.removeImg = exports.setQuestionsImg = exports.CloneQuestions = exports.RemoveQuestions = exports.NewQuestions = exports.deleteExam = exports.setExams = exports.getNowExam = exports.getCode = exports.getLogin = void 0;
exports.getExamData = exports.delExamData = exports.editExamData = exports.searchExamData = exports.getAdiminData = exports.delAdiminDelect = exports.addAdiminData = exports.stateAdimin = void 0;
var jwt_1 = __importDefault(require("../../middleware/jwt"));
var query_js_1 = require("../../database/query.js");
var axios_1 = __importDefault(require("axios"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var uuid_1 = require("uuid");
var request = axios_1.default.create({
    baseURL: 'https://106.ihuyi.com/webservice'
});
//登录验证
var getLogin = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var iphone, _a, code, _b, password, sql, res, sql_1, result, timeCha, token, sql_2, result, token;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                iphone = ctx.request.body.iphone;
                _a = ctx.request.body.code, code = _a === void 0 ? '' : _a;
                _b = ctx.request.body.password, password = _b === void 0 ? '' : _b;
                sql = "select * from conservator_data where iphone=".concat(iphone);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _c.sent();
                if (!(res.length !== 0)) return [3 /*break*/, 6];
                if (!(password === '')) return [3 /*break*/, 3];
                sql_1 = "select * from conservator_data where code=".concat(code, " and iphone=").concat(iphone);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql_1)];
            case 2:
                result = _c.sent();
                if (result.length !== 0) { //验证码正确,判断是否在时效期
                    timeCha = new Date().getTime() - new Date(result[0].time).getTime();
                    if (timeCha > 1000 * 60 * 5) {
                        ctx.body = {
                            code: '400',
                            msg: '验证码失效,请重新发送',
                        };
                    }
                    else {
                        token = jwt_1.default.signUserToken({ iphone: iphone, code: code });
                        ctx.body = {
                            code: '200',
                            msg: "登陆成功",
                            token: token,
                            res: result[0]
                        };
                    }
                }
                else {
                    ctx.body = {
                        code: '400',
                        msg: '验证码错误',
                    };
                }
                return [3 /*break*/, 5];
            case 3:
                if (!(code === '')) return [3 /*break*/, 5];
                sql_2 = "select * from conservator_data where password=\"".concat(password, "\" and iphone=").concat(iphone);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql_2)];
            case 4:
                result = _c.sent();
                if (result.length !== 0) { //密码正确
                    token = jwt_1.default.signUserToken({ iphone: iphone, password: password });
                    ctx.body = {
                        code: '200',
                        msg: "登陆成功",
                        token: token,
                        res: result[0]
                    };
                }
                else {
                    ctx.body = {
                        code: '400',
                        msg: '密码错误'
                    };
                }
                _c.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                ctx.body = {
                    code: '400',
                    msg: '账号不存在',
                };
                _c.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getLogin = getLogin;
//发送验证码
var getCode = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var iphone, sql, res, arry, str, i, index, result, sql_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                iphone = ctx.request.body.iphone;
                sql = "select * from conservator_data where iphone=".concat(iphone);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                if (!(res.length !== 0)) return [3 /*break*/, 5];
                arry = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
                str = '';
                for (i = 0; i < 4; i++) {
                    index = Math.floor(Math.random() * arry.length);
                    str += arry[index];
                }
                return [4 /*yield*/, request({
                        url: '/sms.php',
                        params: {
                            method: "Submit",
                            account: 'C31556762',
                            password: 'aacc8bfc408dfc9e253060133101b38c',
                            mobile: iphone,
                            content: "\u60A8\u7684\u9A8C\u8BC1\u7801\u662F\uFF1A".concat(str, "\u3002\u8BF7\u4E0D\u8981\u628A\u9A8C\u8BC1\u7801\u6CC4\u9732\u7ED9\u5176\u4ED6\u4EBA\u3002")
                        }
                    })];
            case 2:
                result = _a.sent();
                if (!(result.status === 200)) return [3 /*break*/, 4];
                sql_3 = "update conservator_data set code=".concat(str, ",time=NOW() where iphone=").concat(iphone);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql_3)];
            case 3:
                _a.sent();
                ctx.body = {
                    code: "200",
                    msg: "发送成功"
                };
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                ctx.body = {
                    code: "400",
                    msg: "账号不存在"
                };
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getCode = getCode;
//显示当前管理员创建的考试
var getNowExam = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, sql, res, x, sqq, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = ctx.request.body.userId;
                sql = "select * from exam_history where author=".concat(userId);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                if (!(res.length !== 0)) return [3 /*break*/, 6];
                x = 0;
                _a.label = 2;
            case 2:
                if (!(x < res.length)) return [3 /*break*/, 5];
                sqq = "select * from student_score where exam_id=".concat(res[x].id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                data = _a.sent();
                res[x].len = data.length;
                _a.label = 4;
            case 4:
                x++;
                return [3 /*break*/, 2];
            case 5:
                ctx.body = {
                    code: "200",
                    msg: "当前管理员考试",
                    res: res
                };
                return [3 /*break*/, 7];
            case 6:
                ctx.body = {
                    code: "200",
                    msg: "当前管理员考试",
                    res: res
                };
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getNowExam = getNowExam;
//创建新考试  编辑考试
var setExams = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, id, userId, sql, result, arry, arr, i, sqq, res, sql, sqq, res;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = ctx.request.body, _b = _a.id, id = _b === void 0 ? '' : _b, userId = _a.userId;
                if (!(id !== '')) return [3 /*break*/, 8];
                sql = "select * from exam_history where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                result = _c.sent();
                if (!(result[0].exam_questions !== null)) return [3 /*break*/, 6];
                arry = result[0].exam_questions.split(',');
                arr = [];
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < arry.length)) return [3 /*break*/, 5];
                sqq = "select * from questions_store where id=".concat(arry[i]);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                res = _c.sent();
                arr.push(res[0]);
                _c.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                ctx.body = {
                    code: "200",
                    msg: "编辑未完成考试,复制考试",
                    arr: arr,
                    result: result[0]
                };
                return [3 /*break*/, 7];
            case 6:
                ctx.body = {
                    code: "200",
                    msg: "编辑未完成考试,复制考试",
                    arr: [],
                    result: result[0]
                };
                _c.label = 7;
            case 7: return [3 /*break*/, 11];
            case 8:
                sql = "insert into exam_history (state,total_score,author,update_time,exam_name,exam_nav,name_flag,iphone_flag) values (\"\u7F16\u8F91\u4E2D\",\"0\",".concat(userId, ",NOW(),\"\u8003\u8BD5\u6807\u9898\",\"\u611F\u8C22\u60A8\u80FD\u62BD\u51FA\u51E0\u5206\u949F\u65F6\u95F4\u6765\u53C2\u52A0\u672C\u6B21\u7B54\u9898\uFF0C\u73B0\u5728\u6211\u4EEC\u5C31\u9A6C\u4E0A\u5F00\u59CB\u5427\uFF01\",1,1)");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 9:
                _c.sent();
                sqq = "select * from exam_history";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 10:
                res = _c.sent();
                ctx.body = {
                    code: "200",
                    msg: "新考试",
                    result: res[res.length - 1],
                    arr: [],
                };
                _c.label = 11;
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.setExams = setExams;
//删除考试
var deleteExam = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                sql = "delete from exam_history where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _a.sent();
                ctx.body = {
                    code: '200',
                    msg: "删除考试"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.deleteExam = deleteExam;
//添加新题
var NewQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, id, exam_id, sql, sqq, res, sqa, rss, arr, sq;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, type = _a.type, id = _a.id, exam_id = _a.exam_id;
                sql = '';
                if (type === '单选题' || type === '多选题') {
                    sql = "insert into questions_store (type,topic_nav,answer,score,stage,create_time,author,optionA,optionB,optionC,optionD) \n     values (\"".concat(type, "\",\"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879\",\"").concat(type === '单选题' ? 'optionA' : 'optionA,optionB', "\",5,\"node\",NOW(),").concat(id, ",\"\u9009\u9879A\",\"\u9009\u9879B\",\"\u9009\u9879C\",\"\u9009\u9879D\")");
                }
                else if (type === '判断题') {
                    sql = "insert into questions_store (type,topic_nav,answer,score,stage,create_time,author,estimate_true,estimate_false) \n    values (\"".concat(type, "\",\"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879\",\"estimate_true\",5,\"node\",NOW(),").concat(id, ",\"\u662F\",\"\u5426\")");
                }
                else if (type === '填空题') {
                    sql = "insert into questions_store (type,topic_nav,answer,score,stage,create_time,author,fill_Text) \n    values (\"".concat(type, "\",\"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879\",\"\u59D3\u540D______\u73ED\u7EA7_______\u5E74\u9F84_______\",5,\"node\",NOW(),").concat(id, ",\"\u59D3\u540D______\u73ED\u7EA7_______\u5E74\u9F84_______\")");
                }
                else if (type === '简答题') {
                    sql = "insert into questions_store (type,topic_nav,answer,score,stage,create_time,author,short_text) \n    values (\"".concat(type, "\",\"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879\",\"\",5,\"node\",NOW(),").concat(id, ",\"\")");
                }
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _b.sent();
                sqq = "select * from questions_store";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 2:
                res = _b.sent();
                sqa = "select * from exam_history where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 3:
                rss = _b.sent();
                arr = rss[0].exam_questions !== null ? rss[0].exam_questions.split(',') : [];
                arr.push(res[res.length - 1].id);
                sq = "update  exam_history set  exam_questions=\"".concat(arr.join(), "\",update_time=NOW() where id=").concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sq)];
            case 4:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "加题"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.NewQuestions = NewQuestions;
//删除题目
var RemoveQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, in_data, examId, sqa, rss, arr, sp, ss, imgData, rem, sq;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, in_data = _a.in_data, examId = _a.examId;
                sqa = "select * from exam_history where id=".concat(examId);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 1:
                rss = _b.sent();
                arr = rss[0].exam_questions.split(',');
                arr.splice(arr.indexOf(id + ''), 1);
                sp = "select * from questions_store where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sp)];
            case 2:
                ss = _b.sent();
                imgData = Object.keys(ss[0]).filter(function (item) { return item.indexOf('img') !== -1 && ss[0][item] !== null; });
                in_data === 0 ? imgData.forEach(function (item) {
                    fs_1.default.unlinkSync(path_1.default.join(__dirname, "../../public/".concat(ss[0][item])));
                }) : '';
                rem = "delete from questions_store where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(rem)];
            case 3:
                _b.sent();
                sq = "update  exam_history set  exam_questions=\"".concat(arr.join(), "\",update_time=NOW() where id=").concat(examId);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sq)];
            case 4:
                _b.sent();
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 5:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除题目",
                };
                return [2 /*return*/];
        }
    });
}); };
exports.RemoveQuestions = RemoveQuestions;
//复制题目
var CloneQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, exam_id, sqq, res, list, imgData, sao, listData, imgNameData, str, sqo, reso, sqa, rss, arr, sq;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, exam_id = _a.exam_id;
                sqq = "select * from questions_store where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 1:
                res = _b.sent();
                list = Object.keys(res[0]).filter(function (item) { return (item.indexOf('create_time') === -1 && item.indexOf('id') === -1 && item.indexOf('in_data') === -1); });
                imgData = Object.keys(res[0]).filter(function (item) { return item.indexOf('img') !== -1 && res[0][item] !== null; });
                sao = "select * from questions_store";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sao)];
            case 2:
                listData = _b.sent();
                imgNameData = [];
                imgData.forEach(function (item) {
                    var img = fs_1.default.readFileSync(path_1.default.join(__dirname, "../../public/".concat(res[0][item])));
                    var ind = res[0][item].lastIndexOf(".");
                    var targ = res[0][item].slice(ind);
                    fs_1.default.writeFileSync(path_1.default.join(__dirname, "../../public/img/".concat(+listData[listData.length - 1].id + 1).concat(targ)), img);
                    imgNameData.push("img/".concat(+listData[listData.length - 1].id + 1).concat(targ));
                });
                str = 'insert into questions_store (in_data,';
                list.forEach(function (item, index) {
                    str += "".concat(item, ",");
                });
                str += "create_time) values (0,";
                list.forEach(function (item, index) {
                    if (imgData.indexOf(item) !== -1) {
                        str += "\"".concat(imgNameData[imgData.indexOf(item)], "\",");
                    }
                    else {
                        typeof res[0][item] === 'string' ? str += "\"".concat(res[0][item], "\",") : str += "".concat(res[0][item], ",");
                    }
                });
                str += "NOW())";
                return [4 /*yield*/, (0, query_js_1.queryAll)(str)];
            case 3:
                _b.sent();
                sqo = "select * from questions_store";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqo)];
            case 4:
                reso = _b.sent();
                sqa = "select * from exam_history where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 5:
                rss = _b.sent();
                arr = rss[0].exam_questions !== null ? rss[0].exam_questions.split(',') : [];
                arr.push(reso[reso.length - 1].id);
                sq = "update  exam_history set  exam_questions=\"".concat(arr.join(), "\",update_time=NOW() where id=").concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sq)];
            case 6:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除题目",
                };
                return [2 /*return*/];
        }
    });
}); };
exports.CloneQuestions = CloneQuestions;
//上传问题图片
var setQuestionsImg = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, question, _b, key, exam_id, index, ind, name, targ, img, sqq, rr, sql, sql, sq;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = ctx.request.body, question = _a.question, _b = _a.key, key = _b === void 0 ? '' : _b, exam_id = _a.exam_id;
                index = ctx.request.files.file.path.lastIndexOf("\\");
                ind = ctx.request.files.file.name.lastIndexOf(".");
                name = ctx.request.files.file.path.slice(index + 1) + '';
                targ = ctx.request.files.file.name.slice(ind);
                img = fs_1.default.readFileSync(ctx.request.files.file.path);
                fs_1.default.writeFileSync(path_1.default.join(__dirname, '../../public/img/' + name + targ), img);
                fs_1.default.unlinkSync(ctx.request.files.file.path);
                sqq = "select * from questions_store where id=".concat(question);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 1:
                rr = _c.sent();
                if (!(key !== '')) return [3 /*break*/, 3];
                rr[0][key + '_img'] !== null ? fs_1.default.unlinkSync(path_1.default.join(__dirname, "../../public/".concat(rr[0][key + '_img']))) : "";
                sql = "update questions_store set  ".concat(key, "_img=\"img/").concat(name + targ, "\" where id=").concat(question);
                console.log('wneti', sql);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 2:
                _c.sent();
                return [3 /*break*/, 5];
            case 3:
                rr[0].topic_img !== null ? fs_1.default.unlinkSync(path_1.default.join(__dirname, "../../public/".concat(rr[0].topic_img))) : "";
                sql = "update questions_store set  topic_img=\"img/".concat(name + targ, "\" where id=").concat(question);
                console.log('danan', sql);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 4:
                _c.sent();
                _c.label = 5;
            case 5:
                sq = "update  exam_history set update_time=NOW() where id=".concat(exam_id);
                console.log(sq);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sq)];
            case 6:
                _c.sent();
                ctx.body = {
                    code: "200",
                    msg: '上传问题图片'
                };
                return [2 /*return*/];
        }
    });
}); };
exports.setQuestionsImg = setQuestionsImg;
//删除图片
var removeImg = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, type, exam_id, sqq, res, sql, sqq, res, sql, sq;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, type = _a.type, exam_id = _a.exam_id;
                if (!(type === 'topic')) return [3 /*break*/, 3];
                sqq = "select * from questions_store where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 1:
                res = _b.sent();
                res[0].topic_img !== null ? fs_1.default.unlinkSync(path_1.default.join(__dirname, "../../public/".concat(res[0].topic_img))) : "";
                sql = "update questions_store set  topic_img=null where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 2:
                _b.sent();
                return [3 /*break*/, 6];
            case 3:
                sqq = "select * from questions_store where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 4:
                res = _b.sent();
                res[0][type] !== null ? fs_1.default.unlinkSync(path_1.default.join(__dirname, "../../public/".concat(res[0][type]))) : "";
                sql = "update questions_store set  ".concat(type, "=null where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6:
                sq = "update  exam_history set update_time=NOW() where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sq)];
            case 7:
                _b.sent();
                ctx.body = {
                    code: "01",
                    msg: "删除图片"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.removeImg = removeImg;
//修改题目类型 正确答案  分值  (答案，题目)
var changeQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var data, str_1, list_1, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = ctx.request.body;
                if (!(data.length !== 0)) return [3 /*break*/, 3];
                str_1 = 'update questions_store set ';
                console.log(str_1);
                list_1 = Object.keys(data).filter(function (item) { return item !== 'create_time' && item !== 'exam_id'; });
                list_1.forEach(function (item, index) {
                    if (index < list_1.length - 1) {
                        if (typeof data[item] === 'string') {
                            str_1 += "".concat(item, "=\"").concat(data[item], "\",");
                        }
                        else {
                            str_1 += "".concat(item, "=").concat(data[item], ",");
                        }
                    }
                    else if (index === list_1.length - 1) {
                        if (typeof data[item] === 'string') {
                            str_1 += "".concat(item, "=\"").concat(data[item], "\" where id=").concat(data.id);
                        }
                        else {
                            str_1 += "".concat(item, "=").concat(data[item], " where id=").concat(data.id);
                        }
                    }
                });
                console.log('---------------------');
                return [4 /*yield*/, (0, query_js_1.queryAll)(str_1)];
            case 1:
                _a.sent();
                sql = "update exam_history set update_time=NOW() where id=".concat(data.exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                ctx.body = {
                    code: '200',
                    msg: "修改题目类型"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.changeQuestions = changeQuestions;
//修改考试信息
var setNowExamData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var data, str, list;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = ctx.request.body;
                str = 'update exam_history set ';
                list = Object.keys(data).filter(function (item) { return item.indexOf('time') === -1; });
                list.forEach(function (item, index) {
                    if (typeof data[item] === 'string') {
                        str += "".concat(item, "=\"").concat(data[item], "\",");
                    }
                    else {
                        str += "".concat(item, "=").concat(data[item], ",");
                    }
                });
                str += "update_time=NOW() where id=".concat(data.id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(str)];
            case 1:
                _a.sent();
                ctx.body = {
                    code: '200',
                    msg: "修改考试信息"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.setNowExamData = setNowExamData;
//添加信息题
var addInfoQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, key, sql;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, key = _a.key;
                sql = "update exam_history set ".concat(key, "=1,update_time=NOW() where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "添加信息题"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addInfoQuestions = addInfoQuestions;
//删除信息题
var removeInfoQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, key, sql;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, key = _a.key;
                sql = "update exam_history set ".concat(key, "=0,update_time=NOW() where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除信息题"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.removeInfoQuestions = removeInfoQuestions;
//题库分类 搜索题库
var storeQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, _b, val, tree, sel, list, sal, last, obje, i, i, i, sql, obj, res, x, x;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = ctx.request.body, userId = _a.userId, _b = _a.val, val = _b === void 0 ? '' : _b;
                tree = [];
                sel = "select * from store_data where user_id=".concat(userId);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sel)
                    //公共题库
                ];
            case 1:
                list = _c.sent();
                sal = "select * from store_questions where public=1";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sal)];
            case 2:
                last = _c.sent();
                obje = { topic_nav: "公共题库", children: [] };
                if (val === '') {
                    for (i = 0; i < last.length; i++) {
                        obje.children.push(last[i]);
                    }
                }
                else {
                    for (i = 0; i < last.length; i++) {
                        last[i].topic_nav.indexOf(val) !== -1 ? obje.children.push(last[i]) : '';
                    }
                }
                tree.push(obje);
                i = 0;
                _c.label = 3;
            case 3:
                if (!(i < list.length)) return [3 /*break*/, 6];
                sql = "select * from store_questions where store_id=".concat(list[i].id);
                obj = { topic_nav: list[i].name, children: [] };
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 4:
                res = _c.sent();
                if (val === '') {
                    for (x = 0; x < res.length; x++) {
                        obj.children.push(res[x]);
                    }
                }
                else {
                    for (x = 0; x < res.length; x++) {
                        res[x].topic_nav.indexOf(val) !== -1 ? obj.children.push(res[x]) : '';
                    }
                }
                tree.push(obj);
                _c.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 3];
            case 6:
                ctx.body = {
                    code: "200",
                    msg: "题库分类",
                    tree: tree
                };
                return [2 /*return*/];
        }
    });
}); };
exports.storeQuestions = storeQuestions;
//复制题库题目
var cloneStoreQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, item, exam_id, list, imgData, sao, listData, imgNameData, str, sqo, reso, sqa, rss, arr, sq;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, item = _a.item, exam_id = _a.exam_id;
                list = Object.keys(item).filter(function (item) { return (item.indexOf('create_time') === -1 && item.indexOf('id') === -1 && item.indexOf('public') === -1); });
                imgData = Object.keys(item).filter(function (ite) { return ite.indexOf('img') !== -1 && item[ite] !== null; });
                sao = "select * from questions_store";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sao)];
            case 1:
                listData = _b.sent();
                imgNameData = [];
                imgData.forEach(function (itt) {
                    var img = fs_1.default.readFileSync(path_1.default.join(__dirname, "../../public/".concat(item[itt])));
                    var ind = item[itt].lastIndexOf(".");
                    var targ = item[itt].slice(ind);
                    fs_1.default.writeFileSync(path_1.default.join(__dirname, "../../public/img/".concat(+listData[listData.length - 1].id + 1).concat(targ)), img);
                    imgNameData.push("img/".concat(+listData[listData.length - 1].id + 1).concat(targ));
                });
                str = 'insert into questions_store (';
                list.forEach(function (item, index) {
                    str += "".concat(item, ",");
                });
                str += "create_time) values (";
                list.forEach(function (ite, index) {
                    if (imgData.indexOf(ite) !== -1) {
                        str += "\"".concat(imgNameData[imgData.indexOf(ite)], "\",");
                    }
                    else {
                        typeof item[ite] === 'string' ? str += "\"".concat(item[ite], "\",") : str += "".concat(item[ite], ",");
                    }
                });
                str += "NOW())";
                return [4 /*yield*/, (0, query_js_1.queryAll)(str)];
            case 2:
                _b.sent();
                sqo = "select * from questions_store";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqo)];
            case 3:
                reso = _b.sent();
                sqa = "select * from exam_history where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 4:
                rss = _b.sent();
                arr = rss[0].exam_questions !== null ? rss[0].exam_questions.split(',') : [];
                arr.push(reso[reso.length - 1].id);
                sq = "update  exam_history set  exam_questions=\"".concat(arr.join(), "\",update_time=NOW() where id=").concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sq)];
            case 5:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "复制题库题目"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.cloneStoreQuestions = cloneStoreQuestions;
//收藏题库
var addStore = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, questions, userId, topic_nav, str, sal, result, list, i, i, sqq, resu, sql;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, questions = _a.questions, userId = _a.userId, topic_nav = _a.topic_nav;
                str = "insert into store_questions(public,store_id,create_time,ischeck,";
                sal = "select * from store_data where user_id=".concat(userId, " and name=\"").concat(topic_nav, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sal)];
            case 1:
                result = _b.sent();
                list = Object.keys(questions).filter(function (item) { return item.indexOf('id') == -1 && item.indexOf('create_time') === -1 && item.indexOf('in_data') === -1; });
                for (i = 0; i < list.length; i++) {
                    if (i !== list.length - 1) {
                        str += "".concat(list[i], ",");
                    }
                    else {
                        str += "".concat(list[i], ")");
                    }
                }
                topic_nav !== '公共题库' ? str += " values (0,".concat(result[0].id, ",NOW(),\"true\",") : str += " values (1,null,NOW(),\"true\",";
                for (i = 0; i < list.length; i++) {
                    if (typeof questions[list[i]] === 'string') {
                        i !== list.length - 1 ? str += "\"".concat(questions[list[i]], "\",") : str += "\"".concat(questions[list[i]], "\")");
                    }
                    else {
                        i !== list.length - 1 ? str += "".concat(questions[list[i]], ",") : str += "".concat(questions[list[i]], ") ");
                    }
                }
                return [4 /*yield*/, (0, query_js_1.queryAll)(str)];
            case 2:
                _b.sent();
                sqq = "select * from store_questions";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                resu = _b.sent();
                sql = "update questions_store set in_data=1,store_id=".concat(resu[resu.length - 1].id, " where id=").concat(questions.id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 4:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "收藏题库",
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addStore = addStore;
//取消收藏
var removeStore = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, store_id, sql, delet;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, store_id = _a.store_id;
                sql = "update  questions_store set in_data=0,store_id=null where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _b.sent();
                delet = "delete from store_questions where id=".concat(store_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(delet)];
            case 2:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: '取消收藏'
                };
                return [2 /*return*/];
        }
    });
}); };
exports.removeStore = removeStore;
//发布考试
var publicExam = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var vv, _a, name, pass_score, type, create_time, end_time, times, exam_id, total_socre, sql;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                vv = (0, uuid_1.v4)().replace(/\-/g, '');
                _a = ctx.request.body, name = _a.name, pass_score = _a.pass_score, type = _a.type, create_time = _a.create_time, end_time = _a.end_time, times = _a.times, exam_id = _a.exam_id, total_socre = _a.total_socre;
                sql = "update exam_history set name=\"".concat(name, "\",pass_score=").concat(pass_score, ",type=\"").concat(type, "\",times=").concat(times, ",\n  create_time=\"").concat(create_time, "\",end_time=\"").concat(end_time, "\",exam_href=\"").concat(vv.slice(0, 16), "\",state=\"\u5DF2\u53D1\u5E03\",total_score=").concat(total_socre, "\n  ,update_time=NOW() \n   where id=").concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "发布考试",
                    uuid: vv
                };
                return [2 /*return*/];
        }
    });
}); };
exports.publicExam = publicExam;
//取消发布  返回编辑
var updateExam = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var exam_id, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                exam_id = ctx.request.body.exam_id;
                sql = "update exam_history set state=\"\u7F16\u8F91\u4E2D\" where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _a.sent();
                ctx.body = {
                    code: "200",
                    msg: "取消发布  返回编辑"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.updateExam = updateExam;
//新建题库分类
var createClassify = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, name, sql, res, sqq;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, userId = _a.userId, name = _a.name;
                sql = "select * from store_data where user_id=".concat(userId, " and name=\"").concat(name, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                if (!(res.length === 0)) return [3 /*break*/, 3];
                sqq = "insert into store_data (user_id,name) values(".concat(userId, ",\"").concat(name, "\")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 2:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "新建分类"
                };
                return [3 /*break*/, 4];
            case 3:
                ctx.body = {
                    code: "400",
                    msg: "新建分类"
                };
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createClassify = createClassify;
//删除题库分类
var removeClassify = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, userId, sql;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, name = _a.name, userId = _a.userId;
                sql = "delete from store_data where user_id=".concat(userId, " and name=\"").concat(name, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _b.sent();
                ctx.body = {
                    code: '200',
                    msg: "删除分类"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.removeClassify = removeClassify;
//添加选项
var addOption = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, exam_id, sql, res, arr, arry, sqq, sqa;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, exam_id = _a.exam_id;
                sql = "select * from questions_store where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                arr = Object.keys(res[0]).filter(function (item) { return item.indexOf('option') !== -1 && res[0][item] === null && item.indexOf('img') == -1; });
                arry = Object.keys(res[0]).filter(function (item) { return item.indexOf('option') !== -1 && res[0][item] !== null && item.indexOf('img') == -1; });
                console.log(arr);
                console.log(arry);
                if (!(arr.length > 0)) return [3 /*break*/, 4];
                sqq = "update questions_store set ".concat(arr[0], "=\"\u9009\u9879").concat(arr[0].split('')[arr[0].split('').length - 1], "\" where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 2:
                _b.sent();
                sqa = "update exam_history set update_time=NOW() where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 3:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "添加选项"
                };
                return [3 /*break*/, 5];
            case 4:
                ctx.body = {
                    code: "400",
                    msg: "添加选项"
                };
                _b.label = 5;
            case 5:
                ctx.body = {
                    code: "200",
                    msg: "添加选项"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addOption = addOption;
//删除选项
var removeOption = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, exam_id, key, sql, res, arr, aoo, sql_4, sqq, res_1, anser, arr_1, insert, i, sqa, sql_5, sqa, sqo, sqq, res_2, arr_2, insert, i;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, exam_id = _a.exam_id, key = _a.key;
                console.log(ctx.request.body);
                sql = "select * from questions_store where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                console.log(res[0].in_data);
                console.log(res[0][key + '_img']);
                res[0].in_data === 0 && res[0][key + '_img'] !== null ? fs_1.default.unlinkSync(path_1.default.join(__dirname, "../../public/".concat(res[0][key + '_img']))) : '';
                arr = Object.keys(res[0]).filter(function (item) { return item.indexOf('option') !== -1 && res[0][item] === null && item.indexOf('img') == -1; });
                aoo = ['optionA', 'optionB', 'optionC', 'optionD', 'optionE', 'optionF', 'optionG', 'optionH', 'optionI', 'optionJ'];
                console.log(arr.length);
                if (!(res[0].type === '多选题')) return [3 /*break*/, 8];
                if (!(arr.length < 6)) return [3 /*break*/, 6];
                sql_4 = "update  questions_store set ".concat(key, "=null where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql_4)];
            case 2:
                _b.sent();
                sqq = "select * from questions_store  where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                res_1 = _b.sent();
                anser = res_1[0].answer.split(',');
                anser.indexOf(key) !== -1 ? anser.splice(anser.indexOf(key), 1) : '';
                arr_1 = Object.keys(res_1[0]).filter(function (item) { return item.indexOf('option') !== -1 && res_1[0][item] !== null && item.indexOf('img') == -1; });
                if (anser.length < 2) {
                    arr_1[0] !== anser[0] ? anser.push(arr_1[0]) : anser.push(arr_1[1]);
                }
                insert = "update  questions_store set answer=\"".concat(anser.join(','), "\",").concat(key, "_img=null,");
                for (i = 0; i < 10; i++) {
                    if (i > arr_1.length - 1) {
                        i === 9 ? insert += "".concat(aoo[i], "=null") : insert += "".concat(aoo[i], "=null,");
                    }
                    else {
                        insert += "".concat(aoo[i], "=\"").concat(res_1[0][arr_1[i]], "\",");
                    }
                }
                insert += "   where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(insert)];
            case 4:
                _b.sent();
                sqa = "update exam_history set update_time=NOW() where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 5:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除选项"
                };
                return [3 /*break*/, 7];
            case 6:
                ctx.body = {
                    code: "400",
                    msg: "多选题最少4个选项"
                };
                _b.label = 7;
            case 7: return [3 /*break*/, 15];
            case 8:
                if (!(res[0].type === '单选题')) return [3 /*break*/, 15];
                if (!(arr.length < 8)) return [3 /*break*/, 14];
                sql_5 = "update  questions_store set ".concat(key, "=null where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql_5)];
            case 9:
                _b.sent();
                sqa = "update exam_history set update_time=NOW() where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 10:
                _b.sent();
                sqo = "update exam_history set update_time=NOW() where id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqo)];
            case 11:
                _b.sent();
                sqq = "select * from questions_store  where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 12:
                res_2 = _b.sent();
                arr_2 = Object.keys(res_2[0]).filter(function (item) { return item.indexOf('option') !== -1 && res_2[0][item] !== null && item.indexOf('img') == -1; });
                insert = arr_2.indexOf(res_2[0].answer) !== -1 ? "update  questions_store set  " : "update  questions_store set  answer=".concat(arr_2[0]);
                for (i = 0; i < 10; i++) {
                    if (i > arr_2.length - 1) {
                        i === 9 ? insert += "".concat(aoo[i], "=null") : insert += "".concat(aoo[i], "=null,");
                    }
                    else {
                        insert += "".concat(aoo[i], "=\"").concat(res_2[0][arr_2[i]], "\",");
                    }
                }
                insert += "   where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(insert)];
            case 13:
                _b.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除选项"
                };
                return [3 /*break*/, 15];
            case 14:
                ctx.body = {
                    code: "400",
                    msg: "单选题最少2个选项"
                };
                _b.label = 15;
            case 15: return [2 /*return*/];
        }
    });
}); };
exports.removeOption = removeOption;
//----------学员-----------
//获取专业班级数据
var getGradenData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var sal, list, arr, x, obj, sqq, res, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sal = "select * from type_data";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sal)];
            case 1:
                list = _a.sent();
                arr = [];
                x = 0;
                _a.label = 2;
            case 2:
                if (!(x < list.length)) return [3 /*break*/, 5];
                obj = { name: list[x].name, id: '' + list[x].id, children: [], key: '专业' };
                sqq = "select * from grade_data where type_id=".concat(list[x].id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                res = _a.sent();
                for (i = 0; i < res.length; i++) {
                    obj.children.push(res[i]);
                }
                arr.push(obj);
                _a.label = 4;
            case 4:
                x++;
                return [3 /*break*/, 2];
            case 5:
                ctx.body = {
                    code: "200",
                    msg: "获取专业班级数据",
                    arr: arr
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getGradenData = getGradenData;
//获取学员数据
var getStudentData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, val, _c, value, data, arr, sql, res, sql, res, sql, res;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = ctx.request.body, _b = _a.val, val = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
                data = ctx.request.body;
                if (!(val === '')) return [3 /*break*/, 5];
                arr = [];
                if (!data.children) return [3 /*break*/, 2];
                sql = "select * from student_data where type=".concat(data.id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _d.sent();
                ctx.body = {
                    code: "200",
                    msg: "获取学员数据",
                    res: res.filter(function (item) { return item.name.indexOf(value) !== -1; })
                };
                return [3 /*break*/, 4];
            case 2:
                sql = "select * from student_data where grade_id=".concat(data.id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 3:
                res = _d.sent();
                ctx.body = {
                    code: "200",
                    msg: "获取学员数据",
                    res: res.filter(function (item) { return item.name.indexOf(value) !== -1; })
                };
                _d.label = 4;
            case 4: return [3 /*break*/, 7];
            case 5:
                sql = "select * from student_data ";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 6:
                res = _d.sent();
                ctx.body = {
                    code: "200",
                    msg: "获取全部学员数据",
                    res: res.filter(function (item) { return item.name.indexOf(value) !== -1; })
                };
                _d.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getStudentData = getStudentData;
//添加年级分类
var addGradeData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sal, res, arr, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                sal = "select * from grade_data where type_id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sal)];
            case 1:
                res = _a.sent();
                arr = res.filter(function (item) { return item.name.indexOf("新班级") !== -1; });
                sql = "insert into grade_data (name,type_id) values(\"\u65B0\u73ED\u7EA7".concat(arr.length + 1, "\",").concat(id, ")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 2:
                _a.sent();
                ctx.body = {
                    code: "200",
                    msg: "添加年级分类"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addGradeData = addGradeData;
//删除年级分类
var removeGradeDate = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                sql = "delete from grade_data where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _a.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除年级分类"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.removeGradeDate = removeGradeDate;
//删除专业分类
var removeTypeData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                sql = "delete from type_data where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _a.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除专业分类"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.removeTypeData = removeTypeData;
//修改专业和班级名称
var setGradeData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, val, key, sql, sqq, result, sqq, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, val = _a.val, key = _a.key;
                sql = " ";
                if (!(key === 'type')) return [3 /*break*/, 5];
                sqq = "select * from type_data where name=\"".concat(val, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 1:
                result = _b.sent();
                if (!(result.length === 0)) return [3 /*break*/, 3];
                sql = "update type_data set name=\"".concat(val, "\" where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 2:
                _b.sent();
                ctx.body = {
                    code: '200',
                    msg: "修改专业名称1"
                };
                return [3 /*break*/, 4];
            case 3:
                result[0].id == id ? ctx.body = {
                    code: '200',
                    msg: "修改专业名称"
                } :
                    ctx.body = {
                        code: '400',
                        msg: "专业名称不能重复"
                    };
                _b.label = 4;
            case 4: return [3 /*break*/, 9];
            case 5:
                if (!(key === 'grade')) return [3 /*break*/, 9];
                sqq = "select * from grade_data where name=\"".concat(val, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 6:
                result = _b.sent();
                if (!(result.length === 0)) return [3 /*break*/, 8];
                sql = "update grade_data set name=\"".concat(val, "\" where id=").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 7:
                _b.sent();
                ctx.body = {
                    code: '200',
                    msg: "修改班级名称"
                };
                return [3 /*break*/, 9];
            case 8:
                result[0].id == id ? ctx.body = {
                    code: '200',
                    msg: "修改班级名称"
                } :
                    ctx.body = {
                        code: '400',
                        msg: "班级名称不能重复"
                    };
                _b.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.setGradeData = setGradeData;
//添加专业分类
var addTypeData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, data, arr, sqq;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sql = "select * from type_data";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                data = _a.sent();
                arr = data.filter(function (item) { return item.name.indexOf('新专业') !== -1; });
                sqq = "insert into type_data (name) value (\"\u65B0\u4E13\u4E1A".concat(arr.length + 1, "\")");
                console.log(sqq);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 2:
                _a.sent();
                ctx.body = {
                    code: "200",
                    msg: "添加专业分类"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addTypeData = addTypeData;
//添加学员
var addStudent = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nameVal, iphoneVal, type_id, grade_id, sql, res, sqq, result, sql_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, nameVal = _a.nameVal, iphoneVal = _a.iphoneVal, type_id = _a.type_id, grade_id = _a.grade_id;
                console.log(ctx.request.body);
                sql = "select * from student_data where iphone=".concat(iphoneVal);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                if (!(res.length !== 0)) return [3 /*break*/, 2];
                ctx.body = {
                    code: '400',
                    msg: "学员手机号不可重复"
                };
                return [3 /*break*/, 5];
            case 2:
                sqq = "select * from grade_data where id=".concat(grade_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                result = _b.sent();
                sql_6 = "insert into student_data(type,grade_id,iphone,name,grade_name)  \n    values(".concat(type_id, ",").concat(grade_id, ",").concat(iphoneVal, ",\"").concat(nameVal, "\",\"").concat(result[0].name, "\")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql_6)];
            case 4:
                _b.sent();
                ctx.body = {
                    code: '200',
                    msg: "添加学员"
                };
                _b.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.addStudent = addStudent;
//修改学员
var revampStudent = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nameVal, iphoneVal, type_id, grade_id, id, sqa, resu, sqq, result, sql;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, nameVal = _a.nameVal, iphoneVal = _a.iphoneVal, type_id = _a.type_id, grade_id = _a.grade_id, id = _a.id;
                sqa = "select * from student_data where iphone=".concat(iphoneVal);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqa)];
            case 1:
                resu = _b.sent();
                if (!(resu.length !== 0)) return [3 /*break*/, 2];
                resu[0].id == id ? ctx.body = {
                    code: '200',
                    msg: "修改学员"
                } :
                    ctx.body = {
                        code: '400',
                        msg: "学员手机不可重复"
                    };
                return [3 /*break*/, 5];
            case 2:
                sqq = "select * from grade_data where id=".concat(grade_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                result = _b.sent();
                sql = "update student_data set type=".concat(type_id, ",grade_id=").concat(grade_id, ",iphone=").concat(iphoneVal, ",name=\"").concat(nameVal, "\",grade_name=\"").concat(result[0].name, "\"where id=").concat(id, " ");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 4:
                _b.sent();
                ctx.body = {
                    code: '200',
                    msg: "修改学员"
                };
                _b.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.revampStudent = revampStudent;
//删除学员
var removeStudent = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sql;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                sql = "delete from student_data where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                _a.sent();
                ctx.body = {
                    code: "200",
                    msg: "删除学员"
                };
                return [2 /*return*/];
        }
    });
}); };
exports.removeStudent = removeStudent;
//上传头像
var uploadHeadImg = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(ctx.request.body);
        ctx.body = {
            code: "200"
        };
        return [2 /*return*/];
    });
}); };
exports.uploadHeadImg = uploadHeadImg;
//数据报表
var StateMent = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var exam_id, sql, result, arr, i, sqq, res, obj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                exam_id = ctx.request.body.exam_id;
                sql = "select * from student_score where exam_id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                result = _a.sent();
                arr = [];
                if (!(result.length !== 0)) return [3 /*break*/, 6];
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < result.length)) return [3 /*break*/, 5];
                sqq = "select * from student_data where id=".concat(result[i].student_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sqq)];
            case 3:
                res = _a.sent();
                obj = Object.assign(result[i], res[0]);
                arr.push(obj);
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                ctx.body = {
                    code: "200",
                    msg: "数据报表",
                    arr: arr
                };
                return [3 /*break*/, 7];
            case 6:
                ctx.body = {
                    code: "200",
                    msg: "数据报表",
                    arr: arr
                };
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.StateMent = StateMent;
//---------------题库出题-------------
// 获取考试列表数据
var getQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('222');
                sql = "select * from store_questions";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getQuestions = getQuestions;
var getUesId = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sql = "select * from store_data";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getUesId = getUesId;
// 添加
var addQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, create_time, score, answer, stage, topLoL, judgeAll, short_text, author, diff, sql, res;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, type = _a.type, create_time = _a.create_time, score = _a.score, answer = _a.answer, stage = _a.stage, topLoL = _a.topLoL, judgeAll = _a.judgeAll, short_text = _a.short_text, author = _a.author, diff = _a.diff;
                console.log(ctx.request.body);
                sql = "insert into store_questions(ischeck,type,topic_nav,public,store_id,topic_img,answer,\n    score,stage,create_time,author,short_text,short_img,fill_text,estimate_true,estimate_false,\n    optionA,optionA_img,optionB,optionB_img,optionC,optionC_img,optionD,optionD_img,optionE,optionE_img,\n    optionF,optionF_img,optionG,optionG_img,optionH,optionH_img,optionI,optionI_img,optionJ,optionJ_img) \n    values('true','".concat(type, "','").concat(topLoL[0].topVal, "','").concat(diff === "1" ? '1' : '0', "','").concat(diff === "1" ? '0' : diff, "','").concat(type === '填空题' ? '' : topLoL[0].img, "',\n    '").concat(answer, "','").concat(score, "','").concat(stage, "',NOW(),'").concat(author, "','").concat(short_text, "','short_img',\n    '").concat(type === '填空题' ? topLoL[0].topVal : '', "','").concat(judgeAll === 0 ? '是' : '', "','").concat(judgeAll === 1 ? '否' : '', "',\n    '").concat(topLoL[1].topVal, "','").concat(topLoL[1].img, "','").concat(topLoL[2].topVal, "','").concat(topLoL[2].img, "','").concat(topLoL[3].topVal, "',\n    '").concat(topLoL[3].img, "','").concat(topLoL.length >= 5 ? topLoL[4].topVal : '', "','").concat(topLoL.length >= 5 ? topLoL[4].img : '', "',\n    '").concat(topLoL.length >= 6 ? topLoL[5].topVal : '', "','").concat(topLoL.length >= 6 ? topLoL[5].img : '', "','").concat(topLoL.length >= 7 ? topLoL[6].topVal : '', "',\n    '").concat(topLoL.length >= 7 ? topLoL[6].img : '', "','").concat(topLoL.length >= 8 ? topLoL[7].topVal : '', "','").concat(topLoL.length >= 8 ? topLoL[7].img : '', "',\n    '").concat(topLoL.length >= 9 ? topLoL[8].topVal : '', "','").concat(topLoL.length >= 9 ? topLoL[8].img : '', "','").concat(topLoL.length >= 10 ? topLoL[9].topVal : '', "',\n    '").concat(topLoL.length >= 10 ? topLoL[9].img : '', "','").concat(topLoL.length >= 11 ? topLoL[10].topVal : '', "','").concat(topLoL.length >= 11 ? topLoL[10].img : '', "')");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                console.log(res);
                ctx.body = {
                    code: 200,
                    msg: '添加成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addQuestions = addQuestions;
// 单删除
var distQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                console.log(id);
                sql = "delete from store_questions where id=".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 200,
                    msg: '删除成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.distQuestions = distQuestions;
//批量删除
var deleteList = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var list;
    return __generator(this, function (_a) {
        list = ctx.request.body.list;
        console.log(list);
        list.forEach(function (item) { return __awaiter(void 0, void 0, void 0, function () {
            var sql, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "delete from store_questions where id=".concat(item.id);
                        return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        ctx.body = {
            code: 200,
            msg: '删除成功',
            data: null
        };
        return [2 /*return*/];
    });
}); };
exports.deleteList = deleteList;
// 修改试题
var amendQuestions = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, type, create_time, score, answer, stage, topLoL, judgeAll, short_text, author, sql, res;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, type = _a.type, create_time = _a.create_time, score = _a.score, answer = _a.answer, stage = _a.stage, topLoL = _a.topLoL, judgeAll = _a.judgeAll, short_text = _a.short_text, author = _a.author;
                sql = "UPDATE store_questions SET topic_nav='".concat(topLoL[0].topVal, "',topic_img='").concat(topLoL[0].img, "',answer='").concat(answer, "',score='").concat(score, "',stage='").concat(stage, "',create_time='").concat(create_time, "',author='").concat(author, "',short_text='").concat(short_text, "',estimate_true='").concat(judgeAll === 0 ? '是' : '', "',estimate_false='").concat(judgeAll === 1 ? "否" : '', "',optionA='").concat(topLoL[1].topVal, "',optionA_img='").concat(topLoL[1].img, "',optionB='").concat(topLoL[2].topVal, "',optionB_img='").concat(topLoL[2].img, "',optionC='").concat(topLoL[3].topVal, "',optionC_img='").concat(topLoL[3].img, "',optionD='").concat(topLoL.length >= 5 ? topLoL[4].topVal : '', "',optionD_img='").concat(topLoL.length >= 5 ? topLoL[4].img : '', "',optionE='").concat(topLoL.length >= 6 ? topLoL[5].topVal : '', "',optionE_img='").concat(topLoL.length >= 6 ? topLoL[5].img : '', "',optionF='").concat(topLoL.length >= 7 ? topLoL[6].topVal : '', "',optionF_img='").concat(topLoL.length >= 7 ? topLoL[6].img : '', "',optionG='").concat(topLoL.length >= 8 ? topLoL[7].topVal : '', "',optionG_img='").concat(topLoL.length >= 8 ? topLoL[7].img : '', "',optionH='").concat(topLoL.length >= 9 ? topLoL[8].topVal : '', "',optionH_img='").concat(topLoL.length >= 9 ? topLoL[8].img : '', "',optionI='").concat(topLoL.length >= 10 ? topLoL[9].topVal : '', "',optionI_img='").concat(topLoL.length >= 10 ? topLoL[9].img : '', "',optionJ='").concat(topLoL.length >= 11 ? topLoL[10].topVal : '', "',optionJ_img='").concat(topLoL.length >= 11 ? topLoL[10].img : '', "' WHERE id='").concat(id, "'");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                console.log(res);
                console.log('0000');
                ctx.body = {
                    code: 200,
                    msg: '修改成功',
                    data: null
                };
                return [2 /*return*/];
        }
    });
}); };
exports.amendQuestions = amendQuestions;
var addIscheck = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, ischeck, sql, res;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, ischeck = _a.ischeck;
                sql = "UPDATE store_questions SET ischeck=\"".concat(ischeck, "\" WHERE id='").concat(id, "'");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                console.log(res);
                console.log('0000');
                ctx.body = {
                    code: 200,
                    msg: '修改成功',
                    data: null
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addIscheck = addIscheck;
var ischeckList = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ischeck, all;
    return __generator(this, function (_b) {
        _a = ctx.request.body, ischeck = _a.ischeck, all = _a.all;
        console.log(ischeck);
        ischeck.forEach(function (item) { return __awaiter(void 0, void 0, void 0, function () {
            var sql, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "UPDATE store_questions SET ischeck=\"".concat(all, "\" WHERE id='").concat(item.id, "'");
                        return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        ctx.body = {
            code: 200,
            msg: '删除成功',
            data: null
        };
        return [2 /*return*/];
    });
}); };
exports.ischeckList = ischeckList;
//---------人工判卷-----------
var labourExam = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var exam_id, arr, sele, resu, i, stud, stundent, obj, sql, res, x, sel, result, obje;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                exam_id = ctx.request.body.exam_id;
                arr = [];
                sele = "select * from student_score where exam_id=".concat(exam_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sele)];
            case 1:
                resu = _a.sent();
                if (!(resu.length === 0)) return [3 /*break*/, 2];
                ctx.body = {
                    code: "200",
                    msg: "人工判卷",
                    arr: arr
                };
                return [3 /*break*/, 12];
            case 2:
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < resu.length)) return [3 /*break*/, 11];
                stud = "select * from student_data where id=".concat(resu[i].student_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(stud)];
            case 4:
                stundent = _a.sent();
                obj = {
                    times: resu[i].times,
                    total_score: resu[i].total_score,
                    name: stundent[0].name,
                    grade: stundent[0].grade_name,
                    questions: []
                };
                sql = "select * from student_answer where student_id=".concat(resu[i].student_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)
                    // console.log('res',res);
                ];
            case 5:
                res = _a.sent();
                x = 0;
                _a.label = 6;
            case 6:
                if (!(x < res.length)) return [3 /*break*/, 9];
                sel = "select * from questions_store where id=".concat(res[x].questions_id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sel)];
            case 7:
                result = _a.sent();
                obje = __assign(__assign({}, result[0]), { questions_answer: res[x].questions_answer, questions_flag: res[x].questions_flag });
                obj.questions.push(obje);
                _a.label = 8;
            case 8:
                x++;
                return [3 /*break*/, 6];
            case 9:
                arr.push(obj);
                _a.label = 10;
            case 10:
                i++;
                return [3 /*break*/, 3];
            case 11:
                ctx.body = {
                    code: "200",
                    msg: "人工判卷",
                    arr: arr
                };
                _a.label = 12;
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.labourExam = labourExam;
// 获取考试题的数据
var getData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var list, arr, arrs, i, data, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                list = ctx.request.body.list;
                arr = list.split(",");
                arrs = [];
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < arr.length)) return [3 /*break*/, 4];
                data = "select * from questions_store where id=\"".concat(arr[i], "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 2:
                res = _a.sent();
                arrs.push(res[0]);
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4:
                ctx.body = {
                    code: "01",
                    msg: "数据",
                    data: arrs,
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getData = getData;
// 一进页面获取到的个人信息的数据
var getPersonal = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, data, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.query.id;
                data = "select * from exam_history where exam_href=\"".concat(id, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 1:
                res = _a.sent();
                // console.log(res);
                ctx.body = {
                    code: "01",
                    msg: "数据",
                    data: res,
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getPersonal = getPersonal;
// 开始考试
var getlists = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nameValue, phoneValue, subjectValue, examId, data, res, studentId, ress, data, res, studentId, ress, data, res, studentId, ress, data, res, studentId, ress, data, res, studentId, ress;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, nameValue = _a.nameValue, phoneValue = _a.phoneValue, subjectValue = _a.subjectValue, examId = _a.examId;
                if (!(nameValue !== "" && phoneValue !== "" && subjectValue.length !== 0)) return [3 /*break*/, 5];
                data = "select * from student_data where name=\"".concat(nameValue, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 1:
                res = _b.sent();
                console.log(res);
                console.log(res, examId);
                if (!(res.length !== 0)) return [3 /*break*/, 3];
                studentId = "select * from student_answer where student_id=\"".concat(res[0].id, "\" and exam_id=\"").concat(examId, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(studentId)];
            case 2:
                ress = _b.sent();
                if (res[0].iphone === phoneValue) {
                    if (res[0].grade_name === subjectValue) {
                        if (ress.length === 0) {
                            ctx.body = {
                                code: "01",
                                msg: "个人信息正确",
                                data: res,
                            };
                        }
                        else {
                            ctx.body = {
                                code: "05",
                                msg: "该场考试该考生已考过",
                            };
                        }
                    }
                    else {
                        ctx.body = {
                            code: "04",
                            msg: "请填写正确的班级",
                        };
                    }
                }
                else {
                    ctx.body = {
                        code: "03",
                        msg: "请填写正确的电话号码",
                    };
                }
                return [3 /*break*/, 4];
            case 3:
                if (res.length === 0) {
                    console.log(111);
                    ctx.body = {
                        code: "02",
                        msg: "请填写正确的姓名",
                    };
                }
                _b.label = 4;
            case 4: return [3 /*break*/, 22];
            case 5:
                if (!(nameValue !== "" && phoneValue !== "" && subjectValue.length === 0)) return [3 /*break*/, 10];
                data = "select * from student_data where name=\"".concat(nameValue, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 6:
                res = _b.sent();
                if (!(res.length !== 0)) return [3 /*break*/, 8];
                studentId = "select * from student_answer where student_id=\"".concat(res[0].id, "\" and exam_id=\"").concat(examId, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(studentId)];
            case 7:
                ress = _b.sent();
                if (res[0].iphone === phoneValue) {
                    if (ress.length === 0) {
                        ctx.body = {
                            code: "01",
                            msg: "个人信息正确",
                            data: res,
                        };
                    }
                    else {
                        ctx.body = {
                            code: "05",
                            msg: "该场考试该考生已考过",
                        };
                    }
                }
                else {
                    ctx.body = {
                        code: "03",
                        msg: "请填写正确的电话号码",
                    };
                }
                return [3 /*break*/, 9];
            case 8:
                ctx.body = {
                    code: "02",
                    msg: "请填写正确的姓名",
                };
                _b.label = 9;
            case 9: return [3 /*break*/, 22];
            case 10:
                if (!(nameValue !== "" &&
                    phoneValue === "" &&
                    subjectValue.length === 0)) return [3 /*break*/, 13];
                data = "select * from student_data where name=\"".concat(nameValue, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 11:
                res = _b.sent();
                studentId = "select * from student_answer where student_id=\"".concat(res[0].id, "\" and exam_id=\"").concat(examId, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(studentId)];
            case 12:
                ress = _b.sent();
                if (res.length !== 0) {
                    if (ress.length === 0) {
                        ctx.body = {
                            code: "01",
                            msg: "个人信息正确",
                            data: res,
                        };
                    }
                    else {
                        ctx.body = {
                            code: "05",
                            msg: "该场考试该考生已考过",
                        };
                    }
                }
                else {
                    ctx.body = {
                        code: "02",
                        msg: "请填写正确的姓名",
                    };
                }
                return [3 /*break*/, 22];
            case 13:
                if (!(phoneValue !== "" &&
                    nameValue === "" &&
                    subjectValue.length === 0)) return [3 /*break*/, 18];
                data = "select * from student_data where iphone=\"".concat(phoneValue, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 14:
                res = _b.sent();
                if (!(res.length !== 0)) return [3 /*break*/, 16];
                studentId = "select * from student_answer where student_id=\"".concat(res[0].id, "\" and exam_id=\"").concat(examId, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(studentId)];
            case 15:
                ress = _b.sent();
                if (ress.length === 0) {
                    ctx.body = {
                        code: "01",
                        msg: "个人信息正确",
                        data: res,
                    };
                }
                else {
                    ctx.body = {
                        code: "05",
                        msg: "该场考试该考生已考过",
                    };
                }
                return [3 /*break*/, 17];
            case 16:
                ctx.body = {
                    code: "03",
                    msg: "请填写正确的电话号码",
                };
                _b.label = 17;
            case 17: return [3 /*break*/, 22];
            case 18:
                if (!(subjectValue.length !== 0 &&
                    phoneValue === "" &&
                    nameValue === "")) return [3 /*break*/, 22];
                data = "select * from student_data where grad_name=\"".concat(subjectValue, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 19:
                res = _b.sent();
                if (!(res.length !== 0)) return [3 /*break*/, 21];
                studentId = "select * from student_answer where student_id=\"".concat(res[0].id, "\" and exam_id=\"").concat(examId, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(studentId)];
            case 20:
                ress = _b.sent();
                if (res.length === 0) {
                    ctx.body = {
                        code: "01",
                        msg: "个人信息正确",
                        data: res,
                    };
                }
                else {
                    ctx.body = {
                        code: "05",
                        msg: "该场考试该考生已考过",
                        data: res,
                    };
                }
                return [3 /*break*/, 22];
            case 21:
                ctx.body = {
                    code: "04",
                    msg: "请填写正确的班级",
                };
                _b.label = 22;
            case 22: return [2 /*return*/];
        }
    });
}); };
exports.getlists = getlists;
// 点击交卷的时候获取到的数据
var getList = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, ending, examList, examId, i, data_1, datas_1, mql_1, res_3, mql_2, res_4, mql_3, res_5, data, datas, num, i, mql, res;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, ending = _a.ending, examList = _a.examList, examId = _a.examId;
                i = 0;
                _b.label = 1;
            case 1:
                if (!(i < examList.length)) return [3 /*break*/, 10];
                data_1 = "select * from questions_store where id=\"".concat(examList[i].id, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data_1)];
            case 2:
                datas_1 = _b.sent();
                if (!(examList[i].type !== "简答题" || examList[i].type !== "填空题")) return [3 /*break*/, 7];
                if (!(datas_1[0].answer === examList[i].answer)) return [3 /*break*/, 4];
                mql_1 = "insert into student_answer(student_id,exam_id, questions_id,questions_answer,questions_flag,questions_score) values (".concat(id, ",").concat(examId, ",").concat(examList[i].id, ",\"").concat(examList[i].answer, "\",\"1\" ,\"").concat(datas_1[0].score, "\")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(mql_1)];
            case 3:
                res_3 = _b.sent();
                return [3 /*break*/, 6];
            case 4:
                mql_2 = "insert into student_answer(student_id,exam_id, questions_id,questions_answer,questions_flag,questions_score) values (".concat(id, ",").concat(examId, ",").concat(examList[i].id, ",\"").concat(examList[i].answer, "\",\"0\",\"").concat(datas_1[0].score, "\")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(mql_2)];
            case 5:
                res_4 = _b.sent();
                _b.label = 6;
            case 6: return [3 /*break*/, 9];
            case 7:
                mql_3 = "insert into student_answer(student_id,exam_id, questions_id,questions_answer,questions_score) values (".concat(id, ",").concat(examId, ",").concat(examList[i].id, ",\"").concat(examList[i].answer, "\",,\"").concat(datas_1[0].score, "\")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(mql_3)];
            case 8:
                res_5 = _b.sent();
                _b.label = 9;
            case 9:
                i++;
                return [3 /*break*/, 1];
            case 10:
                data = "select * from student_answer where student_id=\"".concat(id, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(data)];
            case 11:
                datas = _b.sent();
                num = 0;
                for (i = 0; i < datas.length; i++) {
                    // console.log(datas[i].questions_flag == 1);
                    if (datas[i].questions_flag == 1) {
                        num += +(datas[i].questions_score);
                    }
                }
                mql = "insert into student_score(student_id,exam_id,times,total_score) values (".concat(id, ",").concat(examId, ",\"").concat(ending, "\",").concat(num, ")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(mql)];
            case 12:
                res = _b.sent();
                ctx.body = {
                    code: "01",
                    msg: "1111",
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getList = getList;
//-------------考试-------------
// 权限管理编辑个人信息
var editAdiminData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, adimin, id;
    return __generator(this, function (_b) {
        _a = ctx.request.body, adimin = _a.adimin, id = _a.id;
        //  console.log(adimin,id);
        ctx.body = {
            code: 200,
            msg: '获取数据',
            // data:res
        };
        return [2 /*return*/];
    });
}); };
exports.editAdiminData = editAdiminData;
// 权限管理管理员变总管理员
var stateAdimin = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, adimin, id, sql, res;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, adimin = _a.adimin, id = _a.id;
                sql = "update conservator_data set adimin = ".concat(adimin, " where id = ").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _b.sent();
                ctx.body = {
                    code: 200,
                    msg: '获取数据',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.stateAdimin = stateAdimin;
// 权限管理添加子管理员
var addAdiminData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var addList, imgUrl, sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                addList = ctx.request.body.addList;
                imgUrl = 'https://s1.kaoshixing.com/static/account/images/default-pic.png?v=09956fd556';
                sql = "insert into conservator_data (iphone, password,name,time,head_img) values\n         (".concat(addList._value.iphone, ", \"").concat(addList._value.password, "\", \"").concat(addList._value.name, "\",NOW(),\n         \"").concat(imgUrl, "\")");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 200,
                    msg: '获取数据',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.addAdiminData = addAdiminData;
// 权限管理删除数据
var delAdiminDelect = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                sql = "delete from conservator_data where id = ".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.delAdiminDelect = delAdiminDelect;
//权限管理获取数据
var getAdiminData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var search, sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                search = ctx.request.body.search;
                console.log(search, 81);
                sql = "select * from conservator_data";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)
                    //  console.log(111);
                    //  console.log(res);
                ];
            case 1:
                res = _a.sent();
                //  console.log(111);
                //  console.log(res);
                if (search != '') {
                    res = res.filter(function (item) { return item.name.indexOf(search) !== -1; });
                }
                console.log(res);
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getAdiminData = getAdiminData;
// 搜索
var searchExamData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var inputValue, sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inputValue = ctx.request.body.inputValue;
                sql = "select * from exam_history where author = \"".concat(inputValue, "\"");
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)
                    // console.log(res)
                ];
            case 1:
                res = _a.sent();
                // console.log(res)
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.searchExamData = searchExamData;
// 编辑
var editExamData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, editData, sql, res;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, id = _a.id, editData = _a.editData;
                // console.log(editData.exam_name);
                console.log(editData._value.exam_name);
                sql = "update exam_history set name = \"".concat(editData._value.exam_name, "\" where id = ").concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)
                    // console.log(res);
                ];
            case 1:
                res = _b.sent();
                // console.log(res);
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.editExamData = editExamData;
// 删除
var delExamData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var id, sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = ctx.request.body.id;
                sql = "delete from exam_history where id = ".concat(id);
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)];
            case 1:
                res = _a.sent();
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.delExamData = delExamData;
// 获取考试列表数据
var getExamData = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var inputValue, sql, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inputValue = ctx.request.body.inputValue;
                sql = "select * from exam_history";
                return [4 /*yield*/, (0, query_js_1.queryAll)(sql)
                    // console.log(res);
                ];
            case 1:
                res = _a.sent();
                // console.log(res);
                if (inputValue != '') {
                    // res.map((item:any)=>{
                    //   console.log(typeof item.author);
                    // })
                    // console.log('188'); 
                    // console.log(inputValue);
                    res = res.filter(function (item) { return item.exam_name.indexOf(inputValue) !== -1; });
                }
                ctx.body = {
                    code: 200,
                    msg: '获取成功',
                    data: res
                };
                return [2 /*return*/];
        }
    });
}); };
exports.getExamData = getExamData;
