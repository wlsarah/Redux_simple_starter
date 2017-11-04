import React from 'react';
import ReactDOM from 'react-dom';


//Create a new component. This component shall produce some HTML

//const App = function(){ //same as the following line
const App = () => {
  return <div>Hi!</div>;
}
//const is ES6 syntax


//Take this component's generated HTML and put in on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
//react to render app
