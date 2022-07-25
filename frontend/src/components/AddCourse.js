import axios from 'axios';
import React, { Fragment, useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import base_url from "../api/bootapi";

const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course";
    },[]);

    const [course, setCourse] = useState({});
    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    const postDatatoServer = (data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({courseId:"",title: "", description:""});
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error ! Something went wrong");
            }
        )
    };
    
    return <Fragment>
        <Form onSubmit={handleForm}>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <FormGroup>
                <label for="courseId">Course Id</label>
                <Input 
                    type="text" 
                    placeholder="Enter here" 
                    name="courseId" 
                    id="courseId"
                    onChange={(e)=>{
                        setCourse({...course,courseId:e.target.value});
                    }}
                    />
            </FormGroup>

            <FormGroup>
                <label for="title">Course Title</label>
                <Input type="text" placeholder="Enter title here" id="title"
                onChange={(e)=>{
                    setCourse({...course,title: e.target.value});
                }} 
                />
            </FormGroup>

            <FormGroup>
                <label for="description">Course Description</label>
                <Input 
                    type="textarea" 
                    placeholder="Enter description here" 
                    id="description" 
                    style={{ height : 150 }}
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value})
                    }}
                />
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success">
                    Add Course
                </Button>
                <Button type="reset" onClick={()=>{
                    setCourse({courseId:"", title:"", description:""});
                }} color="warning ml-2">Clear</Button>
            </Container>
        </Form>
    </Fragment>;
};

export default AddCourse;