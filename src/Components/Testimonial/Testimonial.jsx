// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

import { Col, Container, Row } from "react-bootstrap";
import "./testimonial.scss";
import CommonSectionHeading from "../CommonSectionHeading/CommonSectionHeading";

import TestimonialBG from "../../assets/img/testimonial-bg.svg";
import QuoteImg from "../../assets/img/quote-icon.svg";

import { testimonials } from "../../data";


const Testimonial = () => {
    // let ratingNumber = 3.7;
    // const roundedNum = Math.floor(ratingNumber);

    // let stars = [];

    // for (let i = 1; i <= roundedNum; i++) {
    //     stars.push(<img src={FillStart} key={i} alt="" className='img-fluid' />)
    // }

    const stars = Array(5).fill(0);

    return (
        <div
            className="testimonial-area pt-120 pb-120"
            style={{ backgroundImage: `url(${TestimonialBG})` }}
        >
            <div className="section-heading text-center ">
                <CommonSectionHeading
                    subHeading="Testimonial"
                    subheadingColor="text-main"
                    heading="What say our lovely client"
                    headingColor="text-dark-2"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    descriptionColor="text-dark-3"
                />
            </div>
            <Container>
                <Row>
                    <Col>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[ Autoplay, Pagination]}
                            className="testimonialSlide"
                            >

                            
                                
                            {testimonials.map((item) => {
                                return (
                                    <SwiperSlide key={item.id} className="testimonial-item text-center radius-16 bg-white">
                                        <div className="client-img position-relative">
                                            <div className="client-img-inner">
                                                <img src={item.userImg} alt="User" className="img-fluid" />
                                            </div>
                                            <div className={ `quote-icon d-flex align-items-center justify-content-center position-absolute ${item.bgColor}` } >
                                                <img src={ QuoteImg } alt="quote" className="img-fluid" />
                                            </div>
                                        </div>
                                        <p className="fs-6 lh-26 text-dark-3 pb-40 pt-30">
                                            { item.reviewText }
                                        </p>
                                        <h5 className="fs-18 lh-26 fw-bold text-dark-2 pb-15">
                                            { item.name }
                                        </h5>
                                        <div className="review-ratings d-flex justify-content-center align-items-center pt-1">
                                            <div className="ratings-point">
                                                {item?.ratings}
                                            </div>
                                            <div className="ratings-point d-flex align-items-center justify-content-center">
                                                {stars.map((star, index) => (
                                                    <svg key={index} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.7289 4.57767L9.4758 3.98457L7.57454 0.28611C7.52261 0.184848 7.43718 0.102875 7.33164 0.0530477C7.06697 -0.0723237 6.74535 0.0321525 6.61302 0.28611L4.71175 3.98457L0.458622 4.57767C0.341364 4.59374 0.234156 4.64679 0.152075 4.72715C0.0528435 4.82502 -0.00183745 4.95668 4.71478e-05 5.09321C0.00193175 5.22974 0.0602277 5.35996 0.162126 5.45527L3.23932 8.33399L2.51232 12.3989C2.49527 12.4935 2.50618 12.5907 2.5438 12.6796C2.58142 12.7686 2.64426 12.8456 2.72518 12.902C2.8061 12.9584 2.90186 12.9919 3.00162 12.9987C3.10138 13.0055 3.20114 12.9854 3.28958 12.9406L7.09378 11.0214L10.898 12.9406C11.0018 12.9936 11.1224 13.0113 11.238 12.992C11.5295 12.9438 11.7255 12.6786 11.6752 12.3989L10.9482 8.33399L14.0254 5.45527C14.1092 5.37651 14.1645 5.27364 14.1812 5.16113C14.2264 4.87985 14.0221 4.61946 13.7289 4.57767V4.57767Z"
                                                            fill={`${
                                                                Math.floor(item?.ratings) >
                                                                index
                                                                    ? "#FFA826"
                                                                    : "rgba(255, 168, 38, 0.2)"
                                                            }`}
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            
                            
                        </Swiper>

                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;
