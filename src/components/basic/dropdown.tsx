import * as React from "react";
import styled from "styled-components";

interface Props {
  options: string[];
  change: any;
  // booksOfBible?: any;
}

// This is just an example of a styled component
const StyledDropdown = styled.select`
  font-size: 1.5em;
`;

class Dropdown extends React.Component<Props> {
  testament = (book: any) => {
    console.log("books = ", book);
  };

  public render() {
    const { options, change } = this.props;
    return (
      // TODO: Find a better way to create a dynamic dropdown.....
      <StyledDropdown
        key={options}
        onChange={() => {
          change("This is a test");
        }}
      >
        {options.map((option: string) => (
          <option key={option}>{option}</option>
        ))}
      </StyledDropdown>
    );
  }
}

export default Dropdown;
