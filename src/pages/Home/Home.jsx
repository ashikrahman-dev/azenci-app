import { Col, Container, Row } from "react-bootstrap"
import  HeroImage  from "../../assets/img/hero-img.svg"
import FillButton from "../../Components/FillButton/FillButton"
import MinimalButton from "../../Components/MinimalButton/MinimalButton"

import "./Home.scss"
import { brandLogo } from "../../data"
import Services from "../../Components/Services/Services"
import Feature from "../../Components/Feature/Feature"
import KeyFeature from "../../Components/KeyFeature/KeyFeature"
import Portfolio from "../../Components/Portfilio/Portfolio"
import Testimonial from "../../Components/Testimonial/Testimonial"




const Home = () => {
  return (
    <>
      <div className="hero-banner">
        <Container className="overflow-hidden">
          <Row className="hero-banner-inner align-items-center my-3">
            <Col xl={6}>
              <div className="subheading pb-20">
                Digital Agency
              </div>
              <h1 className="banner-heading pb-20">
                <span className="fw-normal d-block">Digital Creative</span>
                Business Agency
              </h1>
              <p className="pe-5 me-5">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="dual-btutton-wrap d-flex pt-50">

                <FillButton buttonText="Get Started" buttonLink="/about" />
                <MinimalButton buttonText="See Portfolio" buttonLink="portfolio" />
              </div>
            </Col>
            <Col xl={6}>
              <div className="text-end">
                <img src={ HeroImage } alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
          <Row className="brand-logo">
            <h6 className="our-partners-title text-dark-1 fw-bold fs-6 lh-26 text-center position-relative pb-30">
              Our Trusted Partners
            </h6>
            <Col>
              <div className="our-partners-wrap d-flex align-items-center pb-50 ">
                {
                  brandLogo.map((logo, index) => {
                    return (
                      <div className="partner-logo-item" key={index}>
                        <img src={logo.logoUrl} alt="Logo" />
                      </div>
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Services />
      <Feature />
      <KeyFeature />
      <Portfolio />
      <Testimonial />

    </>
    
  )
}

export default Home;

