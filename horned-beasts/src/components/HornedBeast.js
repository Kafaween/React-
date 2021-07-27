import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
// import Container from "react-bootstrap/Container";

// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  onclick = () => {
    console.log(this.state);
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <Col md={4}>
        <h2>{this.props.title}</h2>
        <div className="">
          <Image
            className="w-100  h-100"
            fluid
            onClick={this.onclick}
            src={this.props.url}
            alt={this.props.alt}
            title={this.props.title}
          />
        </div>
        <p>{this.props.des}</p>
        <p>favaroited : {this.state.counter}</p>
      </Col>
    );
  }
}

export default HornedBeast;
