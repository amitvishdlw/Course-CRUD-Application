package com.springrest.courses.services;

import com.springrest.courses.entities.Course;

import java.util.List;

public interface CourseService {
    public List<Course> getCourses();

    public Course getCourse(long courseId);

    public Course addCourse(Course course);

    public Course updateCourse(Course course);

    void deleteCourse(long courseId);
}
