import './error404.scss'

import Error404Image from '../../assets/img/error-404.svg'
import { Col, Container, Row } from 'react-bootstrap';
import MinimalButton from '../../Components/MinimalButton/MinimalButton';
import SubPageHeader from '../../Components/SubPageHeader/SubPageHeader';


import ErrorPageShape from '../../assets/img/error-page-shape.svg'

const Error404 = () => {
    return (
        <div className='position-relative'>
            <SubPageHeader
                pageTitle="404 Page"
            />
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className="error-wrap text-center pb-120 pt-120">
                            <div className='text-center pb-50'>
                                <img src={ Error404Image } alt="404 Image" className='img-fluid' />
                            </div>
                            <div className="error-content-wrap">
                                <h2 className='fs-38 lh-54 fw-bold text-dark-1 pb-20'>
                                    Oops... Looks Like You Goto Lost
                                </h2>
                                <p className='fs-18 lh-28 text-dark-3 pb-30'>
                                    The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                                </p>
                                <div className="mt-1">
                                    <MinimalButton 
                                        buttonText="Back Home Page" buttonLink="/home"
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="page-shape position-absolute start-0">
                <img src={ ErrorPageShape } alt="Shape" className='img-fluid' />
            </div>
        </div>
    );
};

export default Error404;