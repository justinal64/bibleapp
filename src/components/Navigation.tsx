import * as React from "react";
import Link from "./typography/link";
import { Row, Col } from "react-flexbox-grid";

// import Button from "./typography/button";
// This is just an example of a styled component

class Navigation extends React.Component<object> {
  public render() {
    return (
      <div>
        <Row center="xs">
          <Col xsOffset={1} lg={2} xs={1}>
            Logo
          </Col>
          <Col lg={2} md={2} xs={12}>
            <Link href="/" title="Home" />
          </Col>
          <Col lg={2} md={2} xs={12}>
            <Link href="/login" title="Login" />
          </Col>
          <Col lg={2} md={2} xs={12}>
            <Link href="/tutorial" title="Tutorial" />
          </Col>
          <Col lg={2} md={2} xs={12}>
            <Link href="/bible" title="Bible" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
