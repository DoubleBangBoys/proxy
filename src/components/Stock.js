import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Stock extends Component {
  render() {
    return (
      <div id="Stock">
        {this.props.renderInventory}
      </div>
    );
  }
}


Stock.propTypes = {
  renderInventory: PropTypes.node.isRequired,
};

export default Stock;
