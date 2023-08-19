import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
      <Row className="justify-content-center align-items-center">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./images/img1.jpg")}
                alt="First slide"
                height="539vh"
                fluid
              />
              <Carousel.Caption>
                <h3>Rolls-Royce Wraith</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./images/img2.jpg")}
                alt="Second slide"
                height="539vh"
                fluid
              />

              <Carousel.Caption>
                <h3>Rolls-Royce Phantom</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./images/img3.jpg")}
                alt="Third slide"
                height="539vh"
                fluid
              />

              <Carousel.Caption>
                <h3>Rolls-Royce Ghost</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
  );
};

export default Home;