import { Col, Container, Row } from "react-bootstrap";
import { footerMenus } from "../../data";
import { Link } from "react-router-dom";
import FooterBG from "../../assets/img/footer-bg.svg"

import "./footer.scss"


const Footer = () => {
    return (
        <>
            <div className="footer-wrap" style={{ background: `url(${FooterBG})` }}>
                <div className="footer-top pt-80 pb-80">
                    <Container>
                        <Row>
                            {
                                footerMenus.map((item) => {
                                    return (
                                        <Col xl={ item.colXL } key={item.id}>
                                            {
                                                
                                                <div className="">
                                                    {item.footerLogo ? 
                                                    <div className="footer-logo-wrap pb-30">
                                                        <img src={item.footerLogo} alt={item.footerLogo} className="img-fluid" />
                                                    </div>
                                                    : 
                                                    <h5 className="fs-18 lh-26 fw-bold text-white widget-title">
                                                        {item.widgetTitle}
                                                    </h5>
                                                    }
                                                    
                                                    {
                                                        item.contactInfo ? 
                                                        item.contactInfo.map ((info) => {
                                                            return (
                                                                <ul key={info?.id} className=" list-unstyled pe-5 me-5">
                                                                    <li >
                                                                        <Link to={`${info.link && info.link}`} className="footer-info-link fs-14 lh-24 fw-normal text-dark-5 text-decoration-none d-flex align-items-start pb-20">
                                                                            <span><img src={ info.icon } alt="icon" /></span>
                                                                            <span>{ info?.infoText }</span>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            )
                                                        })
                                                        :
                                                        item.widgetMenu.map ((menu) => {
                                                            return (
                                                                <ul key={menu?.id} className="list-unstyled pe-5 me-5">
                                                                    <li>
                                                                        <Link to={`${menu.menuLocation }`} className="footer-menu-item fs-14 lh-24 fw-normal text-dark-5 text-decoration-none d-flex align-items-start">
                                                                            {menu?.menuItem}
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }

                                        </Col>
                                    )
                                })
                                
                            }
                        </Row>
                    </Container>
                </div>
                <div className="footer-bottom">
                    <div className="fullscreen-border"></div>
                    <div className="footer-bottom-wrap pt-30 pb-30">
                        <Container>
                            <Row>
                                <Col xl={6}>
                                    <p className="fs-14 lh-16 fw-medium text-dark-5 ">
                                        Copyright © { new Date(). getFullYear() } Azenci. All Rights Reserved.
                                    </p>
                                </Col>
                                <Col xl={6}></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;