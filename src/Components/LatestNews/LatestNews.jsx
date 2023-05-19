import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";


import { Col, Container, Row } from "react-bootstrap";
import CommonSectionHeading from "../CommonSectionHeading/CommonSectionHeading";
import MinimalButton from "../MinimalButton/MinimalButton";
import "./LatestNews.scss";

import blogDateIcon from '../../assets/img/calendar-2.svg'
import blogAuthorIcon from '../../assets/img/user.svg'
import { Link } from "react-router-dom";
import { LatestNewsData } from "../../data";



const LatestNews = () => {
    return (
        <div className="pt-120 pb-120">
            <Container>
                <div className="section-heading text-center pb-60">
                    <CommonSectionHeading
                        subHeading="News Update"
                        subheadingColor="text-main"
                        heading="Our latest news & blog"
                        headingColor="text-dark-2"
                        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        descriptionColor="text-dark-3"
                    />
                </div>
                <Row>
                    <Col>

                        
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            navigation={
                                true
                            }
                            modules={[ Autoplay, Navigation]}
                            className="last-news-carousel"
                        >
                            

                        {
                            LatestNewsData.map((newsItem) => {
                                return (
                                    <SwiperSlide key={ newsItem.id } className="single-latest-news radius-16">
                                        <div className="featured-img">
                                            <img
                                                src={ newsItem.featuredImg }
                                                alt="Post image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="news-content-wrap">
                                            <div className="date-author-wrap pb-15 d-flex align-items-center fs-14 lh-16 text-dark-2 fw-medium">
                                                <div className="news-date d-flex align-items-center">
                                                    <span>
                                                        <img src={blogDateIcon} alt="" />
                                                    </span>
                                                    <span>
                                                        Feb 15, 2023
                                                    </span>
                                                </div>
                                                <Link to={ "/author" } className="author-name d-flex align-items-center text-decoration-none text-dark-2">
                                                    <span>
                                                        <img src={blogAuthorIcon} alt="" />
                                                    </span>
                                                    <span>
                                                        Ronald Richards
                                                    </span>
                                                </Link>
                                            </div>
                                            <h5 className="fs-18 lh-26 fw-bold text-dark-1 pb-10">
                                                { newsItem.title }
                                            </h5>
                                            <p className="fs-6 lh-26 text-dark-3">
                                                { newsItem.content }
                                            </p>
                                            <Link to={ "read-more" } className="read-more-btn text-decoration-none fs-15 lh-18 fw-semibold d-flex align-items-center">
                                                <span>
                                                    Read more
                                                </span>
                                                <span>
                                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.82251 1.44727L14.375 5.99977L9.82251 10.5523" stroke="url(#paint0_linear_0_1)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M1.625 6H14.2475" stroke="url(#paint1_linear_0_1)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <defs>
                                                        <linearGradient id="paint0_linear_0_1" x1="9.82251" y1="1.44727" x2="14.7634" y2="1.66313" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#8C7DFF"/>
                                                        <stop offset="1" stopColor="#7DA9FF"/>
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_0_1" x1="1.625" y1="6" x2="7.81753" y2="12.8299" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#8C7DFF"/>
                                                        <stop offset="1" stopColor="#7DA9FF"/>
                                                        </linearGradient>
                                                        </defs>
                                                    </svg>
                                                    
                                                </span>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        </Swiper>
                    </Col>
                </Row>
                <div className="explore-more-btn text-center pt-60">
                    <MinimalButton
                        buttonText="Explore More"
                        buttonLink="/blog"
                    />
                </div>
            </Container>
        </div>
    );
};

export default LatestNews;
