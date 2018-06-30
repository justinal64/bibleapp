import * as React from "react";
import Header from "../components/typography/header";
import StyledDropdown from "../components/basic/dropdown";
import dbpkey from "../auth";

interface State {
  booksOfBible: string[];
  chapters: string[];
  verses: string[];
  loading: boolean;
  chapter?: string;
  bookNames: string[];
  bookId: string;
  damId: string;
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
      bookNames: [""],
      bookId: "",
      damId: "",
      loading: false
    };
  }

  componentDidMount() {
    let bookNames: any = [];
    let booksOfBible: any = [];
    fetch(`https://dbt.io/text/book?key=${dbpkey}&dam_id=ENGNAS&v=2`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.forEach((book: any) => {
          bookNames.push(book.book_name);
          booksOfBible.push(book);
        });
        this.setState({
          booksOfBible,
          bookNames,
          loading: true
        });
      });
  }

  chapters = (e: any) => {
    let currentChapter: object = this.state.booksOfBible.filter(
      (x: any) => x.book_name === e.target.value
    );
    console.log("bookId = ", currentChapter[0].book_id);

    let chapters: string[] = currentChapter[0].chapters
      .split(",")
      .map((chapter: any) => {
        return "Chapter " + chapter;
      });
    this.setState({
      chapters,
      bookId: currentChapter[0].book_Id,
      damId: currentChapter[0].dam_id
    });
  };

  verses = (e: any) => {
    console.log("bookId in verses = ", this.state.bookId);
    console.log("damId = ", this.state.damId);

    let chapterId = parseInt(e.target.value.match(/\d+/), 10);
    let verses: any = [];
    fetch(
      `https://dbt.io/text/verse?key=${dbpkey}&dam_id=${
        this.state.damId
      }&book_id=${this.state.bookId}&chapter_id=${chapterId}&v=2`
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
    let { chapters, verses, bookNames, booksOfBible } = this.state;
    console.log({ bookNames });
    console.log({ booksOfBible });

    return (
      <div className="Bible">
        <Header title="Bible Page" />

        <StyledDropdown
          onChange={this.chapters}
          options={!!bookNames ? bookNames : [""]}
        />
        <StyledDropdown onChange={this.verses} options={chapters} />
        <p> {verses} </p>
      </div>
    );
  }
}

export default Bible;
