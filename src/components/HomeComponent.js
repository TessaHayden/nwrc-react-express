import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "45rem" }}>
            <CardImg src={item.altImg} alt={item.name} />
            <CardBody>
              <CardTitle>Bill Hayden</CardTitle>
              <CardSubtitle>Owner &amp; Consultant</CardSubtitle>
              <hr />
              <CardText style={{ padding: ".7rem" }}>
                Bill Hayden has served the Pacific NorthWest for over 20 years
                as a restaurant consultant &amp; owner. Over 300 restaurants and
                businesses have utilized Bill's expertise and skills to: improve
                customer satisfaction, train employees, increase profits and
                reduce losses.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function RenderTopScreen() {
  return (
    <div className="shadow-box-div">
      <Container className="container-row">
        <Row>
          <Col className="col-sm-8 offset-2">
            {/* add unique fonts for specific words */}
            <p className="word-enlargement">For many</p>, the dream of owning
            their own resaurant runs very deep.  A unique concept, an ideal
            location, the perfected menu item or a sense of community calls to the
            heart and gives you passion. Sometimes though, certain details may be
            beyond the general scope of knowledge. Everything from blueprints,
            equipment, full menu development, employee training and more! Which is where your friendly Northwest Restaurant Consultant comes in to help prepare and navigate you on your journey.<br />
            <p className="break-space">
              When you've decided it's time to make your dreams a reality, call
              Bill Hayden :
            </p>
            <a
              role="button"
              className="btn btn-link a-link"
              href="tel:+15033497151"
            >
              <i className="fa fa-phone" /> 1 (503) 349-7151
            </a>
            <br />
            His passion and enthusiasm for your success will guide you through
            the process to success!
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function RenderCenterScreen({ item }) {
  return (
    <div className="home-top-div">
      <Card>
        <CardBody>
          <CardText>
            Northwest Restaurant Consultants tailor to fit the needs and budget
            of any restaurant project.
          </CardText>
          <CardText>
            Large or small, our experienced and talented consultants can provide
            you with all you need!
          </CardText>
        </CardBody>

        <CardImg
          variant="bottom"
          style={{ width: "45%" }}
          src="../assets/images/brevemug.jpg"
        />
      </Card>
    </div>
  );
}

function RenderBottomScreen() {
  return (
    <div className="home-bottom-page">
      <Container fluid className="vertical-align">
        <Row>
          <Card>
            <CardTitle style={{ margin: "1.2rem" }}>
              If you can dream it...
            </CardTitle>
            <CardBody>
              <CardText className="quote">You can do it.</CardText>
              <CardSubtitle style={{ margin: "1rem" }}>
                -Walt Disney
              </CardSubtitle>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

function Home(props) {
  return (
    <div className="screen-container">
      <RenderCard item={props.restaurant} />
      <RenderTopScreen item={props.examples} />
      <RenderCenterScreen examples={props.examples} />
      <RenderBottomScreen />
    </div>
  );
}

export default Home;
