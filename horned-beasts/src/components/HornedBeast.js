import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
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
      <Container>
        <Row>
          <div>
            <Col md={6}>
              <h2>{this.props.title}</h2>
              <Image
                fluid
                onClick={this.onclick}
                src={this.props.url}
                alt={this.props.alt}
                title={this.props.title}
              />
              <p>{this.props.des}</p>
              <p>favaroited : {this.state.counter}</p>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default HornedBeast;
