import { Col, Container, Row } from "react-bootstrap";
import "./Services.scss"
import CommonSectionHeading from "../CommonSectionHeading/CommonSectionHeading";
import { services } from "../../data";

const Services = () => {

    return (
        <>
            <div className="services-wrap pt-120 pb-90 bg-white">
                <Container>
                    
                <div className="subheading-wrap text-center pb-60">
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
                        {
                            services.map((service) => {
                                return (
                                    <Col xl={4} md="6" key={service.id}>
                                        <div className="services-item-wrap mb-30">
                                            <div className="services-item text-center radius-16 bg-white">
                                                <div className="pb-30">
                                                    <img src={service.icon} alt={service.title} />
                                                </div>
                                                <h4 className="fs-4 lh-30 fw-bold text-dark-2 pb-20">{service.title}</h4>
                                                <p className="fs-6 lh-26 fw-normal text-dark-3">{service.desc}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Services;