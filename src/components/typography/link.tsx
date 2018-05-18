import * as React from "react";
import styled from "styled-components";

export interface Props {
  location: string;
  title: string;
}

// This is just an example of a styled component
const StyledLink = styled.a`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Link extends React.Component<Props, object> {
  public render() {
    const { location, title } = this.props;
    return <StyledLink href={location}>{title}</StyledLink>;
    // <a href="https://www.w3schools.com">Visit W3Schools</a>
  }
}

export default Link;
