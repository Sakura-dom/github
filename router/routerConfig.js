"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user/user");
var _a = require('./user/user'), getLogin = _a.getLogin, getCode = _a.getCode, setExams = _a.setExams, NewQuestions = _a.NewQuestions, getNowExam = _a.getNowExam, RemoveQuestions = _a.RemoveQuestions, setQuestionsImg = _a.setQuestionsImg;
var routerConfig = [
    {
        url: "/login",
        method: "POST",
        callback: getLogin
    },
    {
        url: "/getCode",
        method: "POST",
        callback: getCode
    },
    {
        url: "/create_ExamData",
        method: "POST",
        callback: setExams
    },
    {
        url: "/addNewQuestions",
        method: "POST",
        callback: NewQuestions
    },
    {
        url: "/getNowExam",
        method: "POST",
        callback: getNowExam
    },
    {
        url: "/deleteExam",
        method: "POST",
        callback: user_1.deleteExam
    },
    {
        url: "/removeQuestions",
        method: "POST",
        callback: RemoveQuestions
    },
    {
        url: "/setQuestionsImg",
        method: "POST",
        callback: setQuestionsImg
    },
    {
        url: "/removeImg",
        method: "POST",
        callback: user_1.removeImg
    },
    // {
    //   url:"/setAnswerImg",
    //   method:"POST",
    //   callback:setAnswerImg
    // },
    {
        url: "/changeQuestions",
        method: "POST",
        callback: user_1.changeQuestions
    },
    {
        url: "/addInfoQuestions",
        method: "POST",
        callback: user_1.addInfoQuestions
    },
    {
        url: "/removeInfoQuestions",
        method: "POST",
        callback: user_1.removeInfoQuestions
    },
    {
        url: "/setNowExamData",
        method: "POST",
        callback: user_1.setNowExamData
    },
    {
        url: "/CloneQuestions",
        method: "POST",
        callback: user_1.CloneQuestions
    },
    {
        url: "/storeQuestions",
        method: "POST",
        callback: user_1.storeQuestions
    },
    {
        url: "/cloneStoreQuestions",
        method: "POST",
        callback: user_1.cloneStoreQuestions
    },
    {
        url: "/addStore",
        method: "POST",
        callback: user_1.addStore
    },
    {
        url: "/publicExam",
        method: "POST",
        callback: user_1.publicExam
    },
    {
        url: "/updateExam",
        method: "POST",
        callback: user_1.updateExam
    },
    {
        url: "/createClassify",
        method: "POST",
        callback: user_1.createClassify
    },
    {
        url: "/removeClassify",
        method: "POST",
        callback: user_1.removeClassify
    },
    {
        url: "/addOption",
        method: "POST",
        callback: user_1.addOption
    },
    {
        url: "/removeOption",
        method: "POST",
        callback: user_1.removeOption
    },
    {
        url: "/getGradenData",
        method: "POST",
        callback: user_1.getGradenData
    },
    {
        url: "/getStudentData",
        method: "POST",
        callback: user_1.getStudentData
    },
    {
        url: "/addGradeData",
        method: "POST",
        callback: user_1.addGradeData
    },
    {
        url: "/removeGradeDate",
        method: "POST",
        callback: user_1.removeGradeDate
    },
    {
        url: "/setGradeData",
        method: "POST",
        callback: user_1.setGradeData
    },
    {
        url: "/addStudent",
        method: "POST",
        callback: user_1.addStudent
    },
    {
        url: "/revampStudent",
        method: "POST",
        callback: user_1.revampStudent
    },
    {
        url: "/removeStudent",
        method: "POST",
        callback: user_1.removeStudent
    },
    {
        url: "/addTypeData",
        method: "POST",
        callback: user_1.addTypeData
    },
    {
        url: "/removeStore",
        method: "POST",
        callback: user_1.removeStore
    },
    {
        url: "/uploadHeadImg",
        method: "POST",
        callback: user_1.uploadHeadImg
    },
    {
        url: "/StateMent",
        method: "POST",
        callback: user_1.StateMent
    },
    {
        url: "/removeTypeData",
        method: "POST",
        callback: user_1.removeTypeData
    },
    //--------------题库出题---------------
    // 获取题库数据
    {
        url: '/getQuestions',
        method: 'POST',
        callback: user_1.getQuestions
    },
    // 添加试题
    {
        url: '/addQuestions',
        method: 'POST',
        callback: user_1.addQuestions
    },
    // 删除试题
    {
        url: "/distQuestions",
        method: 'POST',
        callback: user_1.distQuestions
    },
    {
        url: "/deleteList",
        method: 'POST',
        callback: user_1.deleteList
    },
    {
        url: "/amendQuestions",
        method: "POST",
        callback: user_1.amendQuestions
    },
    {
        url: "/addIscheck",
        method: "POST",
        callback: user_1.addIscheck
    },
    {
        url: "/ischeckList",
        method: "POST",
        callback: user_1.ischeckList
    },
    {
        url: "/labourExam",
        method: "POST",
        callback: user_1.labourExam
    },
    // 获取题库数据
    {
        url: '/getQuestions',
        method: 'POST',
        callback: user_1.getQuestions
    },
    // 添加试题
    {
        url: '/addQuestions',
        method: 'POST',
        callback: user_1.addQuestions
    },
    // 删除试题
    {
        url: "/distQuestions",
        method: 'POST',
        callback: user_1.distQuestions
    },
    {
        url: "/deleteList",
        method: 'POST',
        callback: user_1.deleteList
    },
    {
        url: "/amendQuestions",
        method: "POST",
        callback: user_1.amendQuestions
    },
    {
        url: "/addIscheck",
        method: "POST",
        callback: user_1.addIscheck
    },
    {
        url: "/ischeckList",
        method: "POST",
        callback: user_1.ischeckList
    },
    {
        url: "/getUesId",
        method: "POST",
        callback: user_1.getUesId
    },
    //-----------人工判卷---------
    {
        url: "/reactList",
        method: "POST",
        callback: user_1.getData
    },
    {
        url: "/reactGetList",
        method: "GET",
        callback: user_1.getPersonal
    },
    {
        url: "/getexamList",
        method: "POST",
        callback: user_1.getlists
    },
    {
        url: "/submitExamLists",
        method: "POST",
        callback: user_1.getList
    },
    //考试
    {
        url: "/getExam",
        method: "POST",
        callback: user_1.getExamData
    },
    {
        url: "/delExam",
        method: "POST",
        callback: user_1.delExamData
    },
    {
        url: '/editExam',
        method: 'POST',
        callback: user_1.editExamData
    },
    {
        url: '/searchExam',
        method: 'POST',
        callback: user_1.searchExamData
    },
    {
        url: '/adiminData',
        method: 'POST',
        callback: user_1.getAdiminData
    },
    {
        url: '/adiminDelect',
        method: 'POST',
        callback: user_1.delAdiminDelect
    },
    {
        url: '/adiminAdd',
        method: 'POST',
        callback: user_1.addAdiminData
    },
    {
        url: '/changAdimin',
        method: 'POST',
        callback: user_1.stateAdimin
    },
    {
        url: '/adiminedit',
        method: 'POST',
        callback: user_1.editAdiminData
    }
];
exports.default = routerConfig;
