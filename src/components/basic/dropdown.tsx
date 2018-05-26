import * as React from "react";
import styled from "styled-components";

export interface Props {
  option: string;
}

// This is just an example of a styled component
const StyledDropdown = styled.select`
  font-size: 1.5em;
`;

function mapoptions(test: string[]) {
  test.map(key => {
    // tslint:disable-next-line:no-console
    console.log(key);
    return (
      <option key={key} value={key.toLowerCase()}>
        {key.toUpperCase()}
      </option>
    );
  });
}

class Dropdown extends React.Component<Props, object> {
  public render() {
    const { option } = this.props;
    return (
      <StyledDropdown>{mapoptions([option, "Test", "Tester"])}</StyledDropdown>
    );
  }
}

export default Dropdown;
