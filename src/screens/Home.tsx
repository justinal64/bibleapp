import * as React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { PrimaryButton } from "../components/utils/styling";

const StyledLink = styled.a`
  ${PrimaryButton};
  text-decoration: none;
  line-height: 2em;
  height: 100%;
  width: 100%;
  display: inline-block;
`;

const StyledDiv = styled.div`
  height: 2em;
`;

const StyledHr = styled.hr`
  @media (max-width: 700px) {
    display: none;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Row center="sm" middle="lg">
          <Col lg={4}>
            <StyledDiv>
              <StyledLink href="/sponsor">Sponsor</StyledLink>
            </StyledDiv>
          </Col>
          <Col lg={2}>
            <StyledHr />
          </Col>
          <Col lg={4}>
            <StyledDiv>
              <StyledLink href="/participate">Participate</StyledLink>
            </StyledDiv>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
