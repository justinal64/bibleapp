import * as React from "react";
import Header from "../components/typography/header";
import StyledDropdown from "../components/basic/dropdown";
import axios from "axios";
import dbpkey from "../auth";

function test() {
  // GET request for remote image
  axios({
    method: "get",
    url: `http://dbt.io/library/book?key=${dbpkey}&dam_id=ENGNAS&v=2`
  }).then(function(response: any) {
    // tslint:disable-next-line:no-console
    console.table("response = ", response);
    // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
  });
}

class Bible extends React.Component {
  render() {
    return (
      <div className="App">
        {test()}
        <Header title="Bible Page" />
        <StyledDropdown option={"test"} />
      </div>
    );
  }
}

export default Bible;
