import * as React from "react";
import Header from "../components/typography/header";
import StyledDropdown from "../components/basic/dropdown";

class Bible extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="Bible Page" />
        <StyledDropdown option={"test"} />
      </div>
    );
  }
}

export default Bible;
