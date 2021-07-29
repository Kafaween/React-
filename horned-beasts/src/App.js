import React from 'react';
import SelectedBeast from './components/SelectedBeast';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';
import data from './components/lab.json';
import Drop from './components/Drop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: null,
      url: null,
      des: null,
      number: 0,
      choosen: 4,
    };
  }
  handledata = (obj) => {
    this.setState({
      title: obj.title,
      url: obj.url,
      des: obj.des,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleHide = () => {
    this.setState({
      show: false,
    });
  };
  chose = (x) => {
    this.setState({
      choosen: x,
    });
  };

  render() {
    return (
      <div>
        <Drop chose={this.chose} />

        <SelectedBeast
          show={this.state.show}
          title={this.state.title}
          url={this.state.url}
          handleHide={this.handleHide}
          des={this.state.des}
        />
        <Header title='this is header' />
        <Main
          choosen={this.state.choosen}
          d={data}
          handledata={this.handledata}
          handleShow={this.handleShow}
        />
        <Footer author='abdel-rahman kafaween' />
      </div>
    );
  }
}

export default App;
