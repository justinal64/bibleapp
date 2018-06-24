import * as React from "react";
import Header from "../components/typography/header";
import StyledDropdown from "../components/basic/dropdown";
import dbpkey from "../auth";

interface State {
  booksOfBible: string[];
  chapters: string[];
  verses: string[];
  loading: boolean;
}

interface Props {
  option?: string;
}

class Bible extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      booksOfBible: [""],
      chapters: ["Pick a Book"],
      verses: ["Pick a Book and Chapter"],
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

  chapters = () => {
    let chapters: any = [];
    fetch(`http://dbt.io/library/book?key=${dbpkey}&dam_id=ENGNAS&v=2`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        chapters = data.map((book: any) => {
          return book.book_name;
        });
        this.setState({
          booksOfBible: chapters,
          loading: true
        });
      });
  };

  render() {
    let { booksOfBible, chapters, verses, loading } = this.state;

    return (
      <div className="Bible">
        <Header title="Bible Page" />
        <StyledDropdown options={loading ? booksOfBible : [""]} />
        <StyledDropdown options={chapters} />
        <StyledDropdown options={verses} />
      </div>
    );
  }
}

export default Bible;
