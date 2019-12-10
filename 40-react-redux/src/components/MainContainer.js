import React from 'react';
import Characters from './Characters';
import Movies from './Movies';
import { connect } from 'react-redux';

console.log(connect);

class MainContainer extends React.Component {

  render() {
    return (
      <main>
        <Characters />
        <Movies />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    chars: state.chars
  }
}



export default connect(mapStateToProps)(MainContainer);