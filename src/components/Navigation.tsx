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
            Logo Here
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
        {/* <Button title="Test" font={0.75} button="Success" /> */}
        {/* <Link location="https://www.google.com" title="Google" /> */}
        {/* <Link location="/blog" title="Blog" /> */}
      </div>
    );
  }
}

export default Navigation;
