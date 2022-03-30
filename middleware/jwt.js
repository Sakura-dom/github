"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.jwtConfig = {
    port: 7777,
    jwtSecret: 'exam',
    whiteList: [
        /getCode/,
        /login/,
        /create_ExamData/,
        /addNewQuestions/,
        /getNowExam/,
        /removeQuestions/,
        /setQuestionsImg/,
        /removeImg/,
        /setAnswerImg/,
        /changeQuestions/,
        /getQuestions/,
        /reactList/,
        /getExam/,
        /delExam/,
        /editExam/,
        /searchExam/,
        /addInfoQuestions/,
        /removeInfoQuestions/,
        /setNowExamData/,
        /CloneQuestions/,
        /storeQuestions/,
        /cloneStoreQuestions/,
        /addStore/,
        /publicExam/,
        /updateExam/,
        /createClassify/,
        /removeClassify/,
        /addOption/,
        /removeOption/,
        /getGradenData/,
        /getStudentData/,
        /addGradeData/,
        /removeGradeDate/,
        /setGradeData/,
        /addStudent/,
        /revampStudent/,
        /removeStudent/,
        /addTypeData/,
        /removeStore/,
        /uploadHeadImg/,
        /deleteExam/,
        /reactList/,
        /reactGetList/,
        /getexamList/,
        /submitExamLists/,
        /StateMent/,
        /removeTypeData/,
        //题库出题
        /getQuestions/,
        /addQuestions/,
        /distQuestions/,
        /deleteList/,
        /amendQuestions/,
        /addIscheck/,
        /ischeckList/,
        /getUesId/,
        /labourExam/,
        //考试
        /getExam/,
        /delExam/,
        /editExam/,
        /searchExam/,
        /adiminData/,
        /adiminDelect/,
        /adiminAdd/,
        /changAdimin/,
        /adiminedit/
    ]
};
var JwtAuth = /** @class */ (function () {
    function JwtAuth() {
    }
    //加签方法
    JwtAuth.signUserToken = function (userData) {
        try {
            return jsonwebtoken_1.default.sign(userData, exports.jwtConfig.jwtSecret);
        }
        catch (err) {
            console.log(err, '----');
        }
    };
    //验签方法
    JwtAuth.verifyUserToken = function (token) {
        try {
            return jsonwebtoken_1.default.verify(token, exports.jwtConfig.jwtSecret);
        }
        catch (err) {
            return { code: 401, message: "验签失败" };
        }
    };
    return JwtAuth;
}());
exports.default = JwtAuth;
