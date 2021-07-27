import React from 'react';
import HornedBeasts from './HornedBeast';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: null,
      url: null,
      des: null,
    };
  }
  handlemodal = (obj) => {
    this.setState({
      show: !this.state.show,
      title: obj.title,
      url: obj.url,
      des: obj.des,
    });
  };

  render() {
    <HornedBeasts x={this.handlemodal} />;
    return (
      <div>
        <>
          <Modal show={this.state.show} onHide={this.handlemodal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  className='w-100  h-100'
                  fluid
                  src={this.state.url}
                  title={this.state.title}
                />
                <Card.Body>
                  <Card.Title>{this.state.title}</Card.Title>
                  <Card.Text>{this.state.des}</Card.Text>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={this.handlemodal}>
                Close
              </Button>
              <Button variant='primary' onClick={this.handlemodal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

export default SelectedBeast;
