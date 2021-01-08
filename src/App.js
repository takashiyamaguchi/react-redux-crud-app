import React, { Component } from 'react';

class App extends Component {
  render(){
    // const greeting = 'Hi';
    // const dom = <h1 className="foo">{ greeting }</h1>;
    // return dom;

    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("test")}} />
      </React.Fragment>
    )
  }
}

// class App extends Component {
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello"
//     );
//   }
// }

export default App;
