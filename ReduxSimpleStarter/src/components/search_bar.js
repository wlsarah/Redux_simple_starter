import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: ''};
  }
  render() {
    return (
    <div>
    <input
    value={this.state.term}
    onChange = {event => this.setState({term: event.target.value})}/>

      </div>
);
  }
  // onInputChange(event){
  //   //when naming the function name, do it like "change" or "on" + name of element watching for event + event name
  //   console.log(event);
  //
  // }

}

// const SearchBar = () => {
//   return <input />; //React.createElement
//
// };
//functional component, class based component for internal record keeping

export default SearchBar;
