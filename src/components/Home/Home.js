import React, { useState } from "react";
import { Container, Card, Row, Col, Carousel, Button, Accordion, CardGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Home.css"
import background from "../../img/background.jpg";
import Footer from "../Footer/Footer";
import climate1 from "../../img/climate1.jpg";
import climate2 from "../../img/climate2.jpg";
import climate3 from "../../img/climate3.jpg";


const Home = () => {
  const [showFooter, setShowFooter] = useState(true);
  const navigate=useNavigate();

  return (
    <Container
      fluid
      style={{
        backgroundColor:"#9fe68b6e"
      }}
    >
      <Row className="px-8 my-2">
        <Col sm={6}>
          <Card className="text-left bg-transparent border-0 text-black my-2 py-1">
            <Card.Body padding="0">
              <h3>Welcome to AlterCarbon</h3><br/>
              <h5>
                AlterCarbon is a platform where people can track their
                individual/household carbon footprints and the amount of
                greenhouse gas emissions from City of Calgary's facilities.{" "}
              </h5>
              <h5>
                The logged in users can calculate, save, and analyze their
                carbon footprints caused by the daily activities, such as
                electricity and natural gas consumptions, treatments of
                waterwaste and foodwaste, and car usage. This platform also provides solutions to offset carbon footprints.
              </h5>
            </Card.Body>
          </Card>
          <Button
            className="position-relative start-50 translate-middle"
            onClick={() => navigate("/signup")}
            variant="primary"
            size="lg"
          >
            Get Started
          </Button>

          <Accordion flush>
            <Accordion.Item
              eventKey="0"
              style={{ color: "black", background: "0", fontWeight: "light" }}
            >
              <Accordion.Header>
                 What is climate change?
              </Accordion.Header>
              <Accordion.Body>
                Climate change refers to long-term shifts in temperatures and
                weather patterns. These shifts may be natural, such as through
                variations in the solar cycle. But since the 1800s, human
                activities have been the main driver of climate change,
                primarily due to burning fossil fuels like coal, oil and gas
                (United Nations)
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              style={{ color: "black", background: "0", fontWeight: "light" }}
            >
              <Accordion.Header style={{fontWeight:"bold"}}>
                 What are the effects of climate change?
              </Accordion.Header>
              <Accordion.Body>
                Global climate change has already had observable effects on the
                environment. Glaciers have shrunk, ice on rivers and lakes is
                breaking up earlier, plant and animal ranges have shifted and
                trees are flowering sooner.
                <br />
                Some of the long-term effects of global climate change includes
                rising temperature, changes in precipitation patterns, more
                droughts and heat waves, rising sea level, and severe
                hurricanes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              style={{ color: "black", background: "0", fontWeight: "light" }}
            >
              <Accordion.Header>
                What can we do?
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Mitigation: Climate change can be mitigated by reducing
                  greenhouse gas emissions and by enhancing sinks that absorb
                  greenhouse gases from the atmosphere. Carbon footprints can be
                  mitigated by clean energy, energy conservation, carbon
                  sequestration, and so on.
                  <br />
                  Adaptation: Adaptation is "the process of adjustment to
                  current or expected changes in climate and its effects".
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col className="carousel" sm={6}>
          <Carousel
            fade
            style={{ borderRadius: "55px 55px 55px 55px", overflow: "hidden" }}
          >
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={climate3}
                height="500"
                wwight="400"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={climate2}
                height="500"
                wwight="400"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={climate1}
                height="500"
                wwight="400"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="footer" style={{background:"rgba(232, 1174, 62, 0.26)"}}>
        <Col className="footer-col-1" sm={3}>
          <Card className="text-center bg-transparent border-0 text-black my-2 py-1">
            {showFooter && <Footer setShowFooter={setShowFooter} />}
          </Card>
        </Col>
        <Col className="footer-col-2" sm={3}>
          <Card className="text-left bg-transparent border-0 text-black my-2 py-1">
            <Card.Body style={{ text: "center" }}>
              <Card.Title style={{ color: "black", fontWeight: "bold" }}>
                Learn More about Climate Change
              </Card.Title>
              <Card.Link
                style={{ color: "#3d0bf1", fontWeight: "bold" }}
                href="https://www.un.org/en/climatechange"
              >
                UN-Climate Action
              </Card.Link>
              <br />
              <Card.Link
                style={{ color: "#3d0bf1", fontWeight: "bold" }}
                href="https://climate.nasa.gov/"
              >
                NASA-Global Climate Change
              </Card.Link>
              <br />
              <Card.Link
                style={{ color: "#3d0bf1", fontWeight: "bold" }}
                href="https://www.alberta.ca/climate-change-alberta.aspx"
              >
                Climate change in Alberta
              </Card.Link>
              <br />
              <Card.Link
                style={{ color: "#3d0bf1", fontWeight: "bold" }}
                href="https://www.calgary.ca/uep/esm/energy-savings/climate-change.html?redirect=/climateprogram"
              >
                Calgary's Climate Change Program
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="footer-col-3 text-center bg-transparent border-0 my-2 py-2" sm={6}>
          <h3 style={{ color: "black", fontWeight: "bold" }}>About Us</h3>
          <CardGroup >
            <Card style={{background:"0",border:"0"}}>
              <Card.Body>
              <Card.Title style={{ color: "black", fontWeight: "bold" }}>Sixu (Cody) Zheng</Card.Title>
              <Card.Link style={{ color: "#3d0bf1", fontWeight: "bold" }} href="https://www.linkedin.com/in/sixu-cody-zheng">
                LinkedIn
              </Card.Link>
              </Card.Body>
            </Card>
            <Card style={{background:"0",border:"0"}}>
               <Card.Body>
               <Card.Title style={{ color: "black", fontWeight: "bold" }}>Shirisha Lakku (Siri)</Card.Title>
              <Card.Link style={{ color: "#3d0bf1", fontWeight: "bold" }} href="https://www.linkedin.com/in/siri-lakku">
                LinkedIn
              </Card.Link>
              </Card.Body>
            </Card>
            <Card style={{background:"0",border:"0"}}>
              <Card.Body>
              <Card.Title style={{ color: "black", fontWeight: "bold" }}>Odio-Zach</Card.Title>
              <Card.Link style={{ color: "#3d0bf1", fontWeight: "bold" }} href="">
                LinkedIn
              </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
