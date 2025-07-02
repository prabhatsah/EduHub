import { Request, Response } from "express";
import Course from "../models/courseModel";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const category = Array.isArray(req.query.category)
    ? req.query.category[0]
    : req.query.category || "";

  try {
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();

    res.json({ message: "Courses retreived successfully", data: courses });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving courses", err });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  const { courseId } = req.params;

  try {
    const course = await Course.get(courseId);

    if (!course) {
      res.status(404).json({ message: "Course not found." });
    }

    res.json({ message: "Course retreived successfully", data: course });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving course", err });
  }
};
