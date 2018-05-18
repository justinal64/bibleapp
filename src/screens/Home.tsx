import * as React from "react";
import Header from "../components/typography/header";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="Options" font={1.25} />
        <p>This is my Home page!!!</p>
      </div>
    );
  }
}

export default Home;
