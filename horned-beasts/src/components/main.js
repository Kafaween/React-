import React from 'react';
// import Modal from 'react-bootstrap/Modal';
import HornedBeasts from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Container>
          <Row>
            {/* <HornedBeasts
          title={data.title}
          des={data.description}
          url={data.image_url}
          alt={data.narwhal}
        /> */}

            {this.props.d.map((element) => {
              return (
                <HornedBeasts
                  title={element.title}
                  des={element.description}
                  url={element.image_url}
                  alt={element.keyword}
                  pass={this.Showmodal}
                />
              );
            })}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
