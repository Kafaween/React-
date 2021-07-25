import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h1>&copy; All rights reserved author: {this.props.author}</h1>
      </footer>
    );
  }
}

export default Footer;
