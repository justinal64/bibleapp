import * as React from "react";
import styled from "styled-components";

export interface Props {
  href: string;
  title: string;
}

// This is just an example of a styled component
const StyledLink = styled.a`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// TODO: Pass in a value that is used to calculate
// fontSize, width, height, etc etc

class Link extends React.Component<Props, object> {
  public render() {
    const { href, title } = this.props;
    return <StyledLink href={href}>{title}</StyledLink>;
  }
}

export default Link;
