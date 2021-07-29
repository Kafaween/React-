import React, { Component } from 'react';
import Select from 'react-select';
const options = [
  { value: 4, label: 'All' },
  { value: 1, label: 'one' },
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
];
export class Drop extends Component {
  handldrop = (event) => {
    console.log(event.value);

    this.props.chose(event.value);
  };

  render() {
    return (
      <div>
        <h1>How many hornes?</h1>
        <Select onChange={this.handldrop} options={options} />
      </div>
    );
  }
}

export default Drop;
