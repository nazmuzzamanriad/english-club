import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './instructor.css'

const Instructor = (props) => {
    const { name, instructor_name, instructor_img, instructor_phone } = props.instructor;
    return (
        <div>
            <Col>
                <Card className="instructor">
                    <Card.Img className="instrucror-img" variant="top" src={instructor_img} />
                    <Card.Body>
                        <Card.Title><h3>{instructor_name}</h3>
                        </Card.Title>
                        <Card.Text >
                            <h4>Taken_course: {name}</h4>
                            <h5>Contact_number: {instructor_phone}</h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Instructor;