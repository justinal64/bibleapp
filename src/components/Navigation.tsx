import * as React from "react";
import Link from "./typography/link";
import Button from "./typography/button";
// This is just an example of a styled component

class Navigation extends React.Component<object> {
  public render() {
    return (
      <div>
        <Button title="Test" font={0.75} button="Success" />
        <Link location="https://www.google.com" title="Google" />
        <Link location="/login" title="Login" />
        <Link location="/blog" title="Blog" />
      </div>
    );
  }
}

export default Navigation;
