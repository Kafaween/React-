import React from 'react';
import SelectedBeast from './components/SelectedBeast';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';
import data from './components/lab.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title='this is header' />
        <Main d={data} />
        <Footer author='abdel-rahman kafaween' />
        <SelectedBeast />
      </div>
    );
  }
}

export default App;
