import * as React from "react";
import styled from "styled-components";

interface Props {
  options: string[];
  // booksOfBible?: any;
}

// This is just an example of a styled component
const StyledDropdown = styled.select`
  font-size: 1.5em;
`;

class Dropdown extends React.Component<Props> {
  testament = (book: any) => {
    console.log("book = ", book);
  };

  public render() {
    const { options } = this.props;
    return (
      // TODO: Find a better way to create a dynamic dropdown.....
      <StyledDropdown
        key={options}
        onChange={() => {
          this.testament(this);
        }}
      >
        {options.map((book: any) => <option key={book}>{book}</option>)}
      </StyledDropdown>
    );
  }
}

export default Dropdown;
