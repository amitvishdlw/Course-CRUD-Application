import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Course from "./Course";

import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses=()=>{
    
    useEffect(()=>{
        document.title = "All Courses";
    }, []);

    // function to call server:
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                // console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded");
                setCourses(response.data);
            },
            (error)=> {
                console.log(error);
                toast.error("something went wrong");
            }
        );
    }

    useEffect(() => {
        getAllCoursesFromServer(); 
    }, []);

    const [courses, setCourses] = useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.courseId != id));
    }
    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {courses.length > 0
                ? courses.map((item) => <Course key={item.courseId} course = {item}
                    update={updateCourses}
                />) 
                : "No courses"   
            }
        </div>
    );
}

export default Allcourses;