import * as React from "react";
// import Header from "../components/typography/header";
import { Row, Col } from "react-flexbox-grid";
import Link from "../components/typography/link";
// import StyledButton from "../components/typography/button";
import styled from "styled-components";
import { PrimaryButton } from "../components/utils/styling";
const CustomLink = styled.a`
  ${PrimaryButton};
  line-height: 2em;
  height: 100%;
  width: 100%;
  display: inline-block;
`;

const CustomDiv = styled.div`
  height: 2em;
`;

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        {/* <Row center="lg">
          <Header title="This is a title" font={1.25} />
        </Row> */}
        <Row center="sm" middle="lg">
          <Col lgOffset={1} lg={4}>
            {/* <Link href="/signup" title="Sponsor" />
            <StyledButton title="Sponsor" font={3} /> */}
            <CustomDiv>
              <CustomLink href="/bible">Sponsor</CustomLink>
            </CustomDiv>
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
