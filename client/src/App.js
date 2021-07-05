import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PieChart from './Components/ClPieChart';
import BarChart from './Components/ClBarChart';
import Form from './Components/Form';
import { Grid, Segment } from 'semantic-ui-react'
class App extends Component {

  constructor(props) {
    super(props)

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
        messageShown: false
    };
}


  // This method will be sent to the child component
  handler() {
    this.setState({
        messageShown: true
    });

    this.refs.Pie.componentDidMount();
    this.refs.Bar.componentDidMount();
}

render() {
  return (

<Grid columns={3} divided>
<Grid.Row stretched >
  <Grid.Column>
    <Segment>
    <Form action={this.handler}/>
    </Segment>
  </Grid.Column>
  <Grid.Column > 
    <Segment >
    <PieChart ref='Pie'></PieChart>
    </Segment>
  </Grid.Column>
  <Grid.Column>
    <Segment>
    <BarChart ref='Bar'></BarChart>
    </Segment>
  </Grid.Column>
</Grid.Row>
</Grid>


  
  );
}
}
export default App;
