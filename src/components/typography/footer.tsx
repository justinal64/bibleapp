import * as React from "react";
import styled from "styled-components";

// This is just an example of a styled component
export interface Props {
  title: string;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class Footer extends React.Component<Props, object> {
  public render() {
    const { title } = this.props;
    return (
      <Wrapper title={title}>
        <Title>{title}</Title>
      </Wrapper>
    );
  }
}

export default Footer;
