import * as React from "react";
// import Header from "../components/typography/header";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header title="This is a title" font={1.25} /> */}
        <h1>The Bible Dare</h1>
        <div>
          <button>Read The Bible</button>
          <button>How to contribute</button>
        </div>
        <div>
          <p>You can also read the bible here.</p>
        </div>
      </div>
    );
  }
}

export default Home;
