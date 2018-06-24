import * as React from "react";
import Header from "../components/typography/header";
import StyledDropdown from "../components/basic/dropdown";
import dbpkey from "../auth";

interface State {
  booksOfBible: any;
  loading: boolean;
}

interface Props {
  option?: string;
}

class Bible extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      booksOfBible: "",
      loading: false
    };
  }

  componentDidMount() {
    let books: any = [];
    fetch(`http://dbt.io/library/book?key=${dbpkey}&dam_id=ENGNAS&v=2`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        books = data.map((book: any) => {
          return book.book_name;
        });
        this.setState({
          booksOfBible: books,
          loading: true
        });
      });
  }

  render() {
    // let optionItems;
    // if (this.state.booksOfBible !== "") {
    //   optionItems = this.state.booksOfBible.map((book: any) => (
    //     <option key={book.book_name}>{book.book_name}</option>
    //   ));
    // }
    if (this.state.loading === false) {
      return null;
    } else {
      return (
        <div className="App">
          <Header title="Bible Page" />
          <StyledDropdown options={this.state.booksOfBible} />
          <select>
            <option>Chapter</option>
          </select>
          <select>
            <option>Verse</option>
          </select>
        </div>
      );
    }
  }
}

export default Bible;
