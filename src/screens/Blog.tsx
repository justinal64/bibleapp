import * as React from "react";
import Header from "../components/typography/header";

// const logo = require("./logo.svg");

class Blog extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="This is where my blog posts will go" />
      </div>
    );
  }
}

export default Blog;
