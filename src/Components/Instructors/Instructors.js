import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstrucrors] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setInstrucrors(data))
    }, [])
    return (
        <div>

            <div >
                <h2 className="course-header">
                    Our Teachers
                </h2>

            </div>
            <div className="course-container">
                <Row xs={1} md={3} className="g-4">
                    {

                        instructors.map(instructor => <Instructor
                            instructor={instructor}
                            key={instructor.key}></Instructor>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Instructors;