"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourse = exports.listCourses = void 0;
const courseModel_1 = __importDefault(require("../models/courseModel"));
const listCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = Array.isArray(req.query.category)
        ? req.query.category[0]
        : req.query.category || "";
    try {
        const courses = category && category !== "all"
            ? yield courseModel_1.default.scan("category").eq(category).exec()
            : yield courseModel_1.default.scan().exec();
        res.json({ message: "Courses retreived successfully", data: courses });
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving courses", err });
    }
});
exports.listCourses = listCourses;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    try {
        const course = yield courseModel_1.default.get(courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found." });
        }
        res.json({ message: "Course retreived successfully", data: course });
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving course", err });
    }
});
exports.getCourse = getCourse;
