/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unreachable */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import  Logo  from "../../assets/img/azenci-logo.svg"
import { Link, useLocation } from "react-router-dom";

import "./Header.scss"

function Header() {
    
    const mainMenu = [
        {
            menuName: "Home",
            path: "/"

        },
        {
            menuName: "About",
            path: "/about"

        },
        {
            subMenuTitle: "Services",
            subMenu: [
                {
                    subMenuName: "Services 1",
                    subMenuPath: "/services1"
                },
                {
                    subMenuName: "Services 2",
                    subMenuPath: "/services2"
                },
                {
                    subMenuName: "Services 3",
                    subMenuPath: "/services3"
                }
            ],

        },
        {
            menuName: "Portfolio",
            path: "/portfolio",

        },
        {
            menuName: "Blog",
            path: "/blog"

        }
    ]

    const location = useLocation();

    return (
        <Navbar expand="lg" className="header-wrap">
            <Container>
                
                <Nav.Link as={Link} to={"/"}>
                    <img src={ Logo } alt="" />
                </Nav.Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto header-menu">

                        {
                            mainMenu?.map((menu, index) => {
                                return (
                                    <div key={index}>
                                    
                                        { menu.menuName ? 
                                            <Nav.Link as={Link} to={ menu?.path } className={ `${location?.pathname === menu?.path && "active"}` } >{ menu?.menuName }</Nav.Link>
                                            :
                                            <NavDropdown title={ menu?.subMenuTitle } id="basic-nav-dropdown">
                                                { 
                                                    menu?.subMenu.map((subItem, index) => {
                                                        return (
                                                            <NavDropdown.Item key={ index } as={Link} to={ subItem?.subMenuPath } className={ `${location?.pathname === subItem?.subMenuPath && "sub-menu-active"}` }>
                                                                { subItem?.subMenuName}
                                                            </NavDropdown.Item>
                                                        )
                                                    })
                                                }
                                            </NavDropdown>
                                        }
                                    </div>
                                )
                                
                            })
                        }

                    </Nav>
                </Navbar.Collapse>

                <div>
                    <Link to={ "/contact" } className="contact-fill-btn text-decoration-none radius-8 d-flex text-white fs-13 lh-15 fw-semibold">
                        <span>Contact</span>
                        <span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.01875 3.70703L12.8125 7.50078L9.01875 11.2945" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.1875 7.5H12.7062" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </Link>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
