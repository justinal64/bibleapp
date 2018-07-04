import * as React from "react";
// import Header from "../components/typography/header";
import { Row, Col } from "react-flexbox-grid";
import Link from "../components/typography/link";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        {/* <Row center="lg">
          <Header title="This is a title" font={1.25} />
        </Row> */}
        <Row center="sm" middle="lg">
          <Col lg={5}>
            <Link href="/signup" title="Sponsor" />
            {/* <StyledButton title="Sponsor" font={3} /> */}
          </Col>
          <Col lg={2}>
            <hr />
          </Col>
          <Col lg={5}>
            <Link href="/signup" title="Participant" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
