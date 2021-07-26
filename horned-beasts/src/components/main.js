import React from "react";

import HornedBeasts from "./HornedBeast";

import data from "./lab.json";
console.log(data);

class Main extends React.Component {
  render() {
    return (
      <main>
        {/* <HornedBeasts
          title={data.title}
          des={data.description}
          url={data.image_url}
          alt={data.narwhal}
        /> */}

        {data.map(function (element) {
          return (
            <HornedBeasts
              title={element.title}
              des={element.description}
              url={element.image_url}
              alt={element.keyword}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
