import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Services/services.css'

const Course = (props) => {
    const { name, Category, Students, Lessions, Duration, Course_fee, img } = props.course
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="card-body">
                        <Card.Title><h3>{name}</h3>
                        </Card.Title>
                        <Card.Text >
                            <h3>{Category}</h3>
                            <p>
                                Students:{Students}
                                <br />
                                Lessions: {Lessions
                                }
                                <br />
                                Class_Duration: {Duration}
                            </p>
                            <strong>Course fee: <span className="fee">{Course_fee}</span></strong>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Course;