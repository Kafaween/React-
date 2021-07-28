import React from 'react';
import SelectedBeast from './components/SelectedBeast';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';
import data from './components/lab.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: null,
      url: null,
      des: null,
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
  render() {
    return (
      <div>
        <SelectedBeast
          show={this.state.show}
          title={this.state.title}
          url={this.state.url}
          handleHide={this.handleHide}
          des={this.state.des}
        />
        <Header title='this is header' />
        <Main
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
