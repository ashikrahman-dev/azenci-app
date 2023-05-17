import { Col, Container, Row } from 'react-bootstrap';
import './key-feature.scss'

import keyFeatureBg from '../../assets/img/key-features-bg.png'
import CommonSectionHeading from '../CommonSectionHeading/CommonSectionHeading';

import { dataKeyFeatures } from '../../data'


const KeyFeature = () => {
    return (
        <div className='key-features-wrap pt-120 pb-120' style={{ backgroundImage: `url(${keyFeatureBg})` }}>
            <Container>
                <div className="section-heading text-center pb-60">
                    <CommonSectionHeading
                        subHeading="Key Features"
                        subheadingColor="text-white"
                        heading="Are you ready to grow faster?"
                        headingColor="text-white"
                        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        descriptionColor="text-white"
                    />
                </div>
                <Row className='rowGutter'>
                    {
                        dataKeyFeatures.map((featureItem) => {
                            return (
                                <Col xl={4} md={6} key={featureItem.id}>
                                    <div className="single-key-feature bg-white radius-16">
                                        <h5 className='fs-18 lh-26 fw-bold text-dark-1 pb-20 d-flex align-items-center'>
                                            <span><img src={featureItem.icon} alt="" className='img-fluid' /></span>
                                            <span>{featureItem.title}</span>
                                        </h5>
                                        <p className='fs-14 lh-24 text-dark-3'>{featureItem.desc}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </div>
    );
};

export default KeyFeature;