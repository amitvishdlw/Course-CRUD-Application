package com.springrest.courses.services;

import com.springrest.courses.dao.CourseDao;
import com.springrest.courses.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService {

    //List<Course> list;

    @Autowired
    private CourseDao courseDao;

    public CourseServiceImpl() {
//        list = new ArrayList<>();
//        list.add(new Course(125,"Java Core Course","This course contains basics of JAVA"));
//        list.add(new Course(4252,"Spring Boot Course","Creating REST API using Spring Boot"));
    }

    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
//        return list;
    }

    @Override
    public Course getCourse(long courseId) {
        /*Course c = null;
        for(Course course: list) {
            if (course.getCourseId()==courseId) {
                c=course;
                break;
            }
        }
        return c;*/
        return courseDao.getById(courseId);
    }

    @Override
    public Course addCourse(Course course) {
        /*list.add(course);
        return course;*/
        courseDao.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
        /*list.forEach(e->{
            if (e.getCourseId() == course.getCourseId()) {
                e.setTitle(course.getTitle());
                e.setDescription(course.getDescription());
            }
        });
        return course;*/
        courseDao.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long courseId) {
        /*list=this.list.stream().filter(e->e.getCourseId()!=courseId).collect(Collectors.toList());*/
        Course entity = courseDao.getById(courseId);
        courseDao.delete(entity);
    }
}
