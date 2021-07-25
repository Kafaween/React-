import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.url}
          alt={this.props.alt}
          title={this.props.title}
        />
        <p>{this.props.des}</p>
      </div>
    );
  }
}

export default HornedBeast;
