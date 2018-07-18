import React from 'react';
import {Route, Switch, PropsRoute} from 'react-router-dom'
import { Grid, Row, Col} from 'react-bootstrap';
import ProductChart from './ProductChart.jsx';
var data = require('../mockData.js');


const WatchListItem = function(props) {

  var listItems = props.items.map((item) =>
    <li key={item.itemId.toString()}>
      <h4> {item.name} </h4>
      <ProductChart data={item} />
      <button value={item.itemId} onClick={props.handleClick}> remove </button>
    </li>
    );

  return (
    <ul> {listItems} </ul>
    )
}



class WatchList extends React.Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.handleRemoveItem = this.handleRemoveItem.bind(this);

    this.state = {
      removeItemId: ''
    }
  }


  componentDidMount() {
    // ajax call to load the user products
  }



  handleClick(e) {
    debugger
    this.setState({removeItemId: e.target.value});
    this.handleRemoveItem(e.target.value);

  }


  handleRemoveItem(itemId) {
    // ajax call to remove item from the list
  }

  render() {

    return (<Grid>

      <Row className="show-grid">
        <Col md={10} xs={10}>
          <code> </code>
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Col>

        <Col md={2} xs={2}>
          <code> </code>
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Col>
      </Row>


      <Row className="show-grid">
        <Col md={2} xs={2}>
          <code> </code>
        </Col>

        <Col md={8} xs={8}>
          <code> </code>

          <WatchListItem items={data.mockGraphData} handleClick={this.handleClick} />

        </Col>

        <Col md={2} xs={2}>
          <code> </code>
        </Col>
      </Row>


      <Row className="show-grid">
        <Col md={12} xs={12}>
          <code> </code>
          <br />
          "contact-us: xxx-xxx-xxxx"
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Col>
      </Row>

    </Grid>)

  }

}

export default WatchList



