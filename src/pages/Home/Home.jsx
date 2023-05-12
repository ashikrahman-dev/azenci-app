import { Col, Container, Row } from "react-bootstrap"
import  HeroImage  from "../../assets/img/hero-img.svg"
import FillButton from "../../Components/FillButton/FillButton"
import MinimalButton from "../../Components/MinimalButton/MinimalButton"


export const Home = () => {
  return (
    <>

      <div className="hero-banner">
        <Container>
          <Row className="pt-120 pb-120 align-items-center">
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
                <FillButton />
                <MinimalButton />
              </div>
            </Col>
            <Col xl={6}>
              <div >
                <img src={ HeroImage } alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
    
  )
}


