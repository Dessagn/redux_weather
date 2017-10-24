import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl, InputGroup, InputControl, Button } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  handleChange = (e) => {
    let term = e.target.value;
    this.setState({
      term
    });

  };
  handleSearch= (e) =>{
    e.preventDefault();
    console.log('Search Term is: ', this.state.term);
  };
  handleSubmit = (e) =>{
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit} className="search-bar">
        <FormGroup controlId="searchText">
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.term}
              placeholder="Search a City"
              onChange={(e)=>this.handleChange(e)}
              onKeyPress={(e)=>this.handleSearch(e)}
           />
           <InputGroup.Addon className="search-glyph" onClick={(e)=>this.handleSearch(e)}><Glyphicon glyph="search" /></InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default SearchBar;