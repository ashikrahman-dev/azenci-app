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
                            <Row className=" align-items-center">
                                <Col xl={6}>
                                    <p className="fs-14 lh-16 fw-medium text-dark-5 ">
                                        Copyright © { new Date(). getFullYear() } Azenci. All Rights Reserved.
                                    </p>
                                </Col>
                                <Col xl={6}>
                                    <div className="social-links-wrap d-flex justify-content-end">
                                        <Link to={ "/facebook" } className="sicial-item d-flex align-items-center justify-content-center">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.8" d="M7.52148 7.9375H5.61719V13.625H3.07812V7.9375H0.996094V5.60156H3.07812V3.79883C3.07812 1.76758 4.29688 0.625 6.15039 0.625C7.03906 0.625 7.97852 0.802734 7.97852 0.802734V2.80859H6.9375C5.92188 2.80859 5.61719 3.41797 5.61719 4.07812V5.60156H7.87695L7.52148 7.9375Z" fill="#AAA8BD"/>
                                            </svg>
                                        </Link>

                                        <Link to={ "/twitter" } className="sicial-item d-flex align-items-center justify-content-center">
                                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6543 3.48438C11.6543 3.61133 11.6543 3.71289 11.6543 3.83984C11.6543 7.36914 8.98828 11.4062 4.08789 11.4062C2.56445 11.4062 1.16797 10.9746 0 10.2129C0.203125 10.2383 0.40625 10.2637 0.634766 10.2637C1.87891 10.2637 3.02148 9.83203 3.93555 9.12109C2.76758 9.0957 1.77734 8.33398 1.44727 7.26758C1.625 7.29297 1.77734 7.31836 1.95508 7.31836C2.18359 7.31836 2.4375 7.26758 2.64062 7.2168C1.42188 6.96289 0.507812 5.89648 0.507812 4.60156V4.57617C0.863281 4.7793 1.29492 4.88086 1.72656 4.90625C0.990234 4.42383 0.533203 3.61133 0.533203 2.69727C0.533203 2.18945 0.660156 1.73242 0.888672 1.35156C2.20898 2.95117 4.18945 4.01758 6.39844 4.14453C6.34766 3.94141 6.32227 3.73828 6.32227 3.53516C6.32227 2.0625 7.51562 0.869141 8.98828 0.869141C9.75 0.869141 10.4355 1.17383 10.9434 1.70703C11.5273 1.58008 12.1113 1.35156 12.6191 1.04688C12.416 1.68164 12.0098 2.18945 11.4512 2.51953C11.9844 2.46875 12.5176 2.31641 12.9746 2.11328C12.6191 2.64648 12.1621 3.10352 11.6543 3.48438Z" fill="#AAA8BD"/>
                                            </svg>
                                        </Link>

                                        <Link to={ "/instagram" } className="sicial-item d-flex align-items-center justify-content-center">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.8" d="M6 3.20508C4.375 3.20508 3.08008 4.52539 3.08008 6.125C3.08008 7.75 4.375 9.04492 6 9.04492C7.59961 9.04492 8.91992 7.75 8.91992 6.125C8.91992 4.52539 7.59961 3.20508 6 3.20508ZM6 8.0293C4.95898 8.0293 4.0957 7.19141 4.0957 6.125C4.0957 5.08398 4.93359 4.24609 6 4.24609C7.04102 4.24609 7.87891 5.08398 7.87891 6.125C7.87891 7.19141 7.04102 8.0293 6 8.0293ZM9.70703 3.10352C9.70703 2.72266 9.40234 2.41797 9.02148 2.41797C8.64062 2.41797 8.33594 2.72266 8.33594 3.10352C8.33594 3.48438 8.64062 3.78906 9.02148 3.78906C9.40234 3.78906 9.70703 3.48438 9.70703 3.10352ZM11.6367 3.78906C11.5859 2.875 11.3828 2.0625 10.7227 1.40234C10.0625 0.742188 9.25 0.539062 8.33594 0.488281C7.39648 0.4375 4.57812 0.4375 3.63867 0.488281C2.72461 0.539062 1.9375 0.742188 1.25195 1.40234C0.591797 2.0625 0.388672 2.875 0.337891 3.78906C0.287109 4.72852 0.287109 7.54688 0.337891 8.48633C0.388672 9.40039 0.591797 10.1875 1.25195 10.873C1.9375 11.5332 2.72461 11.7363 3.63867 11.7871C4.57812 11.8379 7.39648 11.8379 8.33594 11.7871C9.25 11.7363 10.0625 11.5332 10.7227 10.873C11.3828 10.1875 11.5859 9.40039 11.6367 8.48633C11.6875 7.54688 11.6875 4.72852 11.6367 3.78906ZM10.418 9.47656C10.2402 9.98438 9.83398 10.3652 9.35156 10.5684C8.58984 10.873 6.8125 10.7969 6 10.7969C5.16211 10.7969 3.38477 10.873 2.64844 10.5684C2.14062 10.3652 1.75977 9.98438 1.55664 9.47656C1.25195 8.74023 1.32812 6.96289 1.32812 6.125C1.32812 5.3125 1.25195 3.53516 1.55664 2.77344C1.75977 2.29102 2.14062 1.91016 2.64844 1.70703C3.38477 1.40234 5.16211 1.47852 6 1.47852C6.8125 1.47852 8.58984 1.40234 9.35156 1.70703C9.83398 1.88477 10.2148 2.29102 10.418 2.77344C10.7227 3.53516 10.6465 5.3125 10.6465 6.125C10.6465 6.96289 10.7227 8.74023 10.418 9.47656Z" fill="#AAA8BD"/>
                                            </svg>
                                        </Link>

                                        <Link to={ "/pintarest" } className="sicial-item d-flex align-items-center justify-content-center">
                                            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.8" d="M5.30469 0.802734C2.68945 0.802734 0.125 2.5293 0.125 5.34766C0.125 7.125 1.11523 8.14062 1.72461 8.14062C1.97852 8.14062 2.13086 7.45508 2.13086 7.25195C2.13086 7.02344 1.52148 6.51562 1.52148 5.52539C1.52148 3.49414 3.07031 2.04688 5.07617 2.04688C6.82812 2.04688 8.09766 3.03711 8.09766 4.83984C8.09766 6.18555 7.56445 8.69922 5.8125 8.69922C5.17773 8.69922 4.61914 8.24219 4.61914 7.60742C4.61914 6.64258 5.30469 5.70312 5.30469 4.71289C5.30469 3.03711 2.91797 3.3418 2.91797 5.37305C2.91797 5.80469 2.96875 6.26172 3.17188 6.66797C2.81641 8.16602 2.10547 10.4258 2.10547 11.9746C2.10547 12.457 2.15625 12.9141 2.20703 13.3965C2.2832 13.498 2.25781 13.498 2.38477 13.4473C3.6543 11.6953 3.62891 11.3398 4.1875 9.05469C4.51758 9.63867 5.30469 9.96875 5.96484 9.96875C8.65625 9.96875 9.875 7.32812 9.875 4.9668C9.875 2.45312 7.69141 0.802734 5.30469 0.802734Z" fill="#AAA8BD"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;