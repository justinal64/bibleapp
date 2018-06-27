import * as React from "react";
import Header from "../components/typography/header";
// import StyledDropdown from "../components/basic/dropdown";
import dbpkey from "../auth";

interface State {
  booksOfBible: string[];
  chapters: string[];
  verses: string[];
  loading: boolean;
  chapter?: string;
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
      verses: [""],
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

  chapters = (e: any) => {
    let bookId = e.target.value.slice(0, 3);
    this.setState({
      chapter: bookId
    });
    let chapters: any = [];
    fetch(
      `http://dbt.io/library/chapter?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNAS&book_id=${bookId}&v=2`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("chapters = ", data);
        chapters = data.map((book: any) => {
          return book.chapter_name;
        });
        this.setState({
          chapters: chapters,
          loading: true
        });
      });
  };

  verses = (e: any) => {
    console.log("verses = ", e.target.value);
    let testament = "ENGNASO2ET";
    console.log(this.state.chapter);
    let bookId = this.state.chapter;
    let verses: any = [];
    fetch(
      `https://dbt.io/text/verse?key=${dbpkey}&dam_id=${testament}&book_id=${bookId}&chapter_id=1&v=2`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        verses = data.map((book: any) => {
          return book.verse_text;
        });
        this.setState({
          verses: verses,
          loading: true
        });
      });
  };

  testament = (book: any) => {
    console.log("book = ", book);
  };

  render() {
    let { booksOfBible, chapters, verses } = this.state;
    return (
      <div className="Bible">
        <Header title="Bible Page" />
        <select onChange={this.chapters}>
          {booksOfBible.map((option: string, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <select onChange={this.verses}>
          {chapters.map((option: string) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {/* <StyledDropdown
          change={this.chapters}
          options={loading ? booksOfBible : [""]}
        />
        <StyledDropdown change={this.verses} options={chapters} /> */}
        <p>{verses}</p>
      </div>
    );
  }
}

export default Bible;
