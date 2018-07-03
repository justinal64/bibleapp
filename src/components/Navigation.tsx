import * as React from "react";
import Link from "./typography/link";
import { Row, Col } from "react-flexbox-grid";

// import Button from "./typography/button";
// This is just an example of a styled component

class Navigation extends React.Component<object> {
  public render() {
    return (
      <div>
        <Row>
          <Col xsOffset={1} lg={2} xs={1}>
            Logo
          </Col>
          <Col lg={2} xs={1}>
            <Link location="/" title="Home" />
          </Col>
          <Col xsOffset={1} lg={2} xs={1}>
            <Link location="/login" title="Login" />
          </Col>
          <Col lg={2} xs={1}>
            <Link location="/tutorial" title="Tutorial" />
          </Col>
          <Col lg={2} xs={1}>
            <Link location="/bible" title="Bible" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
