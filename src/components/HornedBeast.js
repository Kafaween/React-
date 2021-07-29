import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import SelectedBeast from './SelectedBeast';

// import Image from 'react-bootstrap/Image';
// import Container from "react-bootstrap/Container";
// import Modal from 'react-bootstrap/Modal';
// import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

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
    this.props.handleShow();
    this.props.handledata({
      title: this.props.title,
      url: this.props.url,
      des: this.props.des,
    });
  };

  render() {
    return (
      <Col md={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            className='w-100  h-100'
            fluid
            onClick={this.onclick}
            src={this.props.url}
            alt={this.props.alt}
            title={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.des}</Card.Text>
            <Card.Text>{this.props.horn}</Card.Text>
            <Card.Text>favaroited : {this.state.counter}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
