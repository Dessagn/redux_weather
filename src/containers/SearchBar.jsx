import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl, InputGroup, InputControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  handleChange = (e) => {
    let term = e.target.value;
    this.setState({ term });
  };

  handleSearch= (e) =>{
    e.preventDefault();
    /**We need to go and fetch weather here by passing in the city*/
    this.props.fetchWeather(this.state.term);
    /**Just to make the search bar empty after search is entered, */
    this.setState({term: ''});
  };

  render() {
    return (
      <form
        onSubmit={(e) => this.handleSearch(e)}
        className="search-bar">
        <FormGroup controlId="searchText">
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.term}
              placeholder="Search a City"
              onChange={(e)=>this.handleChange(e)} />
            <InputGroup.Addon className="search-glyph" onClick={(e) => this.handleSearch(e)}><Glyphicon glyph="search" /></InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);