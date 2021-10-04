import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBook, faUniversity, faTrophy } from '@fortawesome/free-solid-svg-icons'
import './about.css'

const AboutUs = () => {
    const element = <FontAwesomeIcon icon={faUser} />
    const element2 = <FontAwesomeIcon icon={faBook} />
    const element3 = <FontAwesomeIcon icon={faUniversity} />
    const element4 = <FontAwesomeIcon icon={faTrophy} />
    return (
        <div className='about-container'>
            <div className="about-heading">
                <div>
                    <h1>WHO WE ARE</h1>
                    <p className="about-details">Our tailor-made inlingua e-learning modules allow you to learn whenever and wherever you want – 24 hours a day, 365 days a year. Learning language online has never been easier. Combine your language course with blended learning to make faster progress.</p>
                </div>
                <div>
                    <h1>WHAT WE DO</h1>
                    <p>Accommodate your schedule and your needs by meeting your language trainer in the virtual classroom for face-to-face lessons and study individually and at any time with my.lab. Our e-learning module provides interactive training units that fully adapt to your current level of knowledge</p>
                </div>


            </div>
            <div className="about-counter">
                <div>
                    <strong>{element}</strong>
                    <h2>60</h2>
                    <h4 className="content">CERTIFIED TEACHERS</h4>
                </div>
                <div>
                    {element2}
                    <h2>400</h2>
                    <h4 className="content"> CLASSES COMPLETE</h4>

                </div>
                <div>
                    {element4}
                    <h2>260</h2>
                    <h4 className="content">AWRADS WON</h4>
                </div>
                <div>
                    {element3}
                    <h2>176</h2>
                    <h4 className="content">STUDENT ENROLLED</h4>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;