import React from 'react';
import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import Course from '../Course/Course';
import './services.css'

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div >
                <h2 className="course-header">
                    Our Courses
                </h2>

            </div>
            <div className="course-container">
                <Row xs={1} md={3} className="g-4">
                    {

                        courses.map(course => <Course key={course.key
                        }
                            course={course}></Course>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Services;