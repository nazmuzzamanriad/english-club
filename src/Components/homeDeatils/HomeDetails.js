import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../Home/Home.css'

const HomeDetails = (props) => {
    const { name, Category, Course_fee, img } = props.course
    return (
        <div>


            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><h3>{name}</h3>
                        </Card.Title>
                        <Card.Text>
                            <p>{Category}</p>


                            <strong>Course fee: <span className="fee">{Course_fee}</span></strong>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default HomeDetails;