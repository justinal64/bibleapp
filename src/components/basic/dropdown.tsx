import * as React from "react";
import styled from "styled-components";
import dbpkey from "../../auth";

interface Props {
  option?: string;
  // booksOfBible?: any;
}

interface State {
  booksOfBible: any;
}

// This is just an example of a styled component
const StyledDropdown = styled.select`
  font-size: 1.5em;
`;

class Dropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { booksOfBible: "" };
  }
  componentDidMount() {
    let books: any = [];
    fetch(`http://dbt.io/library/book?key=${dbpkey}&dam_id=ENGNAS&v=2`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        books = data.map((book: any) => {
          return book;
        });
        this.setState({
          booksOfBible: books
        });
      });
  }

  testament = () => {
    console.log("test");
  };

  public render() {
    let optionItems;
    if (this.state.booksOfBible !== "") {
      optionItems = this.state.booksOfBible.map((book: any) => (
        <option key={book.book_name}>{book.book_name}</option>
      ));
    }
    const { option } = this.props;
    return (
      // TODO: Find a better way to create a dynamic dropdown.....
      <div className="bible">
        <StyledDropdown onChange={this.testament} key="testament">
          <option />
          <option key="ot" value="ot">
            Old Testament
          </option>
          <option key="nt" value="NT">
            New Testament
          </option>
        </StyledDropdown>
        <StyledDropdown key={option}>
          <option />
          {optionItems}
        </StyledDropdown>
      </div>
    );
  }
}

export default Dropdown;
