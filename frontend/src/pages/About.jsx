import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";
import ourMission from "../assets/images/ourMission.jpg";
import ourValues from "../assets/images/ourValues.jpg";
import ourTeam from "../assets/images/ourTeam.jpg";
const About = () => {
  return (
    <section className="about-us">
      <Container>
        <Row>
          <Col lg="12">
            <div className="about-us__intro text-center">
              <h2 className="about-us__title">About Us</h2>
              <p className="about-us__description">
                We are a travel platform dedicated to creating unforgettable
                travel experiences. With years of experience in the travel
                industry, we offer personalized services to help you plan your
                next adventure with ease.
              </p>
            </div>
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mt-5">
          <Col lg="6" className="mt-5">
            <div className="about-us__mission">
              <h3 className="about-us__section-title">Our Mission</h3>
              <p className="about-us__text">
                Our mission is to empower travelers by providing them with the
                best possible resources and information to ensure their trips
                are stress-free and memorable. We aim to create a world where
                everyone can explore new places and make lifelong memories.
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="about-us__img">
              <img
                src={ourMission}
                alt="Our Mission"
                className="about-us__section-image"
              />
            </div>
          </Col>
        </Row>

        {/* Values Section */}
        <Row className="mt-5">
          <Col lg="6">
            <div className="about-us__img">
              <img
                src={ourValues}
                alt="Our Values"
                className="about-us__section-image"
              />
            </div>
          </Col>
          <Col lg="6" className="mt-5">
            <div className="about-us__values">
              <h3 className="about-us__section-title">Our Values</h3>
              <ul className="about-us__list">
                <li>
                  Customer Satisfaction: We prioritize your needs and comfort.
                </li>
                <li>Integrity: We provide honest and transparent services.</li>
                <li>
                  Innovation: We continuously improve our offerings and
                  technology.
                </li>
                <li>
                  Community: We believe in creating a community of passionate
                  travelers.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mt-5">
          <Col lg="6" className="mt-5">
            <div className="about-us__team">
              <h3 className="about-us__section-title">Meet Our Team</h3>
              <p className="about-us__text">
                Our dedicated team of experts works tirelessly to ensure your
                travel experiences are seamless and enjoyable. We are passionate
                about helping you explore the world!
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="about-us__img">
              <img
                src={ourTeam}
                alt="Meet Our Team"
                className="about-us__section-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
