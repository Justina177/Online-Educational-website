import React from 'react';
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../Images/web-design.png";
import courseImg2 from "../../Images/8cf88ffa0dc17bff72cdfd8ecd5b1e0d0a436c04.webp";
import courseImg3 from "../../Images/kids-learning.png"
import "./Courses.css";


const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          
          <Col lg="4">
            <div className="single__course__item">
                <div className="course__img">
                    <img src={courseImg1} alt="" className="w-100" />
                </div>

                <div className="courses__deatails">
                    <h5 className="course__title">
                        Web Design BootCamp 2023 for Beginers
                    </h5>

                    <div className="d-flex justify-content-between align-items-center">
                        <p className="rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i> 
                            6.2k
                        </p>
                        <p className="enroll d-flex align-items-center gap-1">
                            <a href="#home">Enroll Now</a>
                            12.5K
                        </p>
                    </div>
                </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="single__course__item">
                <div className="course__img">
                    <img src={courseImg2} alt="" className="w-100" />
                </div>

                <div className="courses__deatails">
                    <h5 className="course__title">
                        Web Design BootCamp 2023 for Beginers
                    </h5>

                    <div className="d-flex justify-content-between align-items-center">
                        <p className="rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i> 
                            5.8K
                        </p>
                        <p className="enroll d-flex align-items-center gap-1">
                            <a href="#home">Enroll Now</a>
                            12.5K
                        </p>
                    </div>
                </div>
            </div>
          </Col>

          <Col lg="4">
            <div className="single__course__item">
                <div className="course__img">
                    <img src={courseImg3} alt="" className="w-100" />
                </div>

                <div className="courses__deatails">
                    <h5 className="course__title">
                        Web Design BootCamp 2023 for Beginers
                    </h5>

                    <div className="d-flex justify-content-between align-items-center">
                        <p className="rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i> 
                            3.9k
                        </p>
                        <p className="enroll d-flex align-items-center gap-1">
                            <a href="#home">Enroll Now</a>
                            12.5K
                        </p>
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Courses