import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';


function mapStateToProps(state) {
  return{
    counter: state,
  }
}

class App extends Component {
  render() {
    return (
      <div>
       App {this.props.counter}
      </div>
    );
  }
}

export default connect (mapStateToProps);
