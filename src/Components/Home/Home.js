import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import HomeDetails from '../homeDeatils/HomeDetails';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const showCourses = courses.slice(0, 4)
    return (
        <div className="home-container">
            <h1 className="header-title">Language School</h1>
            <p className="details">Our tailor-made inlingua e-learning modules allow you to learn whenever and wherever you want – 24 hours a day, 365 days a year. Learning language online has never been easier.Combine your language course with blended learning to make faster progress. Improve your skills with our flex-e-books, that are created for you personally by our trainers. Accommodate your schedule and your needs by meeting your language trainer in the virtual classroom for face-to-face lessons and study individually and at any time with my.lab. Our e-learning module provides interactive training units that fully adapt to your current level of knowledge.</p>
            <div className="language-section">

                <h2>Choose Your Language</h2>

            </div>

            {
                <Row xs={1} md={4} className="g-4">
                    {

                        showCourses.map(course => <HomeDetails key={course.key}
                            course={course}></HomeDetails>)
                    }
                </Row>
            }


        </div>
    );
};

export default Home;