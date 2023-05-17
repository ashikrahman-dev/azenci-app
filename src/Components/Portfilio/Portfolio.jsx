import { Col, Container, Row } from 'react-bootstrap';
import CommonSectionHeading from '../CommonSectionHeading/CommonSectionHeading';
import './portfolio.scss'


//Portfolio images.
import Portfolio1 from "../../assets/img/portfolio-1.svg"
import Portfolio2 from "../../assets/img/portfolio-2.svg"
import Portfolio3 from "../../assets/img/portfolio-3.svg"
import Portfolio4 from "../../assets/img/portfolio-4.svg"
import ViewDemoIcon from "../../assets/img/view-demo-btn.svg"
import { Link } from 'react-router-dom';

import FillButton from '../FillButton/FillButton'


const Portfolio = () => {
    return (
        <div className='portfolio-wrap pt-120 pb-120'>
            <div className="section-heading text-center pb-60">
                <CommonSectionHeading
                    subHeading="Portfolio"
                    subheadingColor="text-main"
                    heading="See our awesome portfolio"
                    headingColor="text-dark-2"
                    description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    descriptionColor="text-dark-3"
                />
            </div>
            <Container>
                <Row className='portfolio-row'>
                    <Col xl={6}>
                        <div className="portfolio-item-wrap">
                            <div className="portfolio-item position-relative">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src={ Portfolio1 } alt="Portfolio" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="portfolio-content position-absolute">
                                    <h4 className='portfolio-heading fs-4 lh-30 fw-bold text-white'>
                                        Sazone - SaaS Website Design
                                    </h4>
                                </div>
                                <div className="view-demo-btn-wrap position-absolute">
                                    <Link to={ "/"} className='view-demo-btn bg-white text-main fs-15 lh-18 fw-semibold d-flex align-items-center radius-12 text-decoration-none'>
                                        <span>View Live Demo</span>
                                        <span><img src={ ViewDemoIcon } alt="icon" className='img-fluid' /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item-wrap">
                            <div className="portfolio-item position-relative">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src={ Portfolio3 } alt="Portfolio" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="portfolio-content position-absolute">
                                    <h4 className='portfolio-heading fs-4 lh-30 fw-bold text-white'>
                                        Sazone - SaaS Website Design
                                    </h4>
                                </div>
                                <div className="view-demo-btn-wrap position-absolute">
                                    <Link to={ "/"} className='view-demo-btn bg-white text-main fs-15 lh-18 fw-semibold d-flex align-items-center radius-12 text-decoration-none'>
                                        <span>View Live Demo</span>
                                        <span><img src={ ViewDemoIcon } alt="icon" className='img-fluid' /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="portfolio-item-wrap">
                            <div className="portfolio-item position-relative">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src={ Portfolio2 } alt="Portfolio" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="portfolio-content position-absolute">
                                    <h4 className='portfolio-heading fs-4 lh-30 fw-bold text-white'>
                                        Sazone - SaaS Website Design
                                    </h4>
                                </div>
                                <div className="view-demo-btn-wrap position-absolute">
                                    <Link to={ "/"} className='view-demo-btn bg-white text-main fs-15 lh-18 fw-semibold d-flex align-items-center radius-12 text-decoration-none'>
                                        <span>View Live Demo</span>
                                        <span><img src={ ViewDemoIcon } alt="icon" className='img-fluid' /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-item-wrap">
                            <div className="portfolio-item position-relative">
                                <div className="portfolio-img-wrap">
                                    <div className="portfolio-img">
                                        <img src={ Portfolio4 } alt="Portfolio" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="portfolio-content position-absolute">
                                    <h4 className='portfolio-heading fs-4 lh-30 fw-bold text-white'>
                                        Sazone - SaaS Website Design
                                    </h4>
                                </div>
                                <div className="view-demo-btn-wrap position-absolute">
                                    <Link to={ "/"} className='view-demo-btn bg-white text-main fs-15 lh-18 fw-semibold d-flex align-items-center radius-12 text-decoration-none'>
                                        <span>View Live Demo</span>
                                        <span><img src={ ViewDemoIcon } alt="icon" className='img-fluid' /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
                <div className="explore-more-btn pt-60 text-center">
                    
                    <FillButton buttonText="Explore More" buttonLink="/portfolio" />
                </div>
            </Container>
        </div>
    );
};

export default Portfolio;

