import { Col, Container, Row } from "react-bootstrap";
import "./Feature.scss"

import LeftShape from "../../assets/img/why-choose-us-left-shape.svg"
import RightShape from "../../assets/img/why-choose-us-right-shape.svg"
import tickCircle from "../../assets/img/tick-circle.svg"
import { features } from "../../data";




const Feature = () => {

    // const featuredItems = features.featureText.split(" | ")

    return (
        <>
            <div className="feature-area pt-120 pb-120 position-relative">
                <Container>
                    <Row className=" align-items-center">
                        <Col xl={6}>
                            <div className="">
                                <img src={ features.featureImg } alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className="me-5 pe-3">

                                <div className={`sub-heading fs-14 lh-16 fw-semibold pb-20 lt-09 text-uppercase text-main`}>
                                    { features.subTitle }
                                </div>
                                <h2 className={`section-heading fs-38 pb-20 lh-54 fw-bold text-dark-2`}>
                                    { features.title }
                                </h2>
                                <p className={`fs-18 lh-28 text-dark-3 pb-30`}>
                                    { features.description }
                                </p>

                                <ul>
                                    {
                                        features.featureList.map((featuredItem) => {
                                            return (
                                                <li key={ featuredItem.id } className="featured-list-item fs-6 lh-26 fw-normal text-dark-3 d-flex align-items-center"><span><img src={ tickCircle } alt="icon" className="img-fluid" /></span> { featuredItem.featureListText } </li>
                                            )
                                        })
                                        
                                    }

                                </ul>
                                
                                {/* <ul>
                                    {
                                        featuredItems.map((item ,index) => {
                                            return (
                                                <li key={index}> { item }</li>
                                            )
                                        })
                                    }
                                    
                                </ul> */}

                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="leftShape-img position-absolute start-0 top-0">
                    <img src={ LeftShape } alt="" className="img-fluid" />
                </div>
                <div className="rightShape-img position-absolute end-0 bottom-0">
                    <img src={ RightShape } alt="" className="img-fluid" />
                </div>
            </div>
        </>
    );
};

export default Feature;