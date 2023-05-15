import { Col, Container, Row } from "react-bootstrap";
import "./Feature.scss"

import LeftShape from "../../assets/img/why-choose-us-left-shape.svg"
import RightShape from "../../assets/img/why-choose-us-right-shape.svg"
import { features } from "../../data";




const Feature = () => {
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