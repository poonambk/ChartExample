import BarChart from 'react-bar-chart';
import React, { Component } from 'react';
 

class ClBarChart extends Component {

  constructor() {
    super();
    this.state = {
      DataPoint: [],
      refresh : ''
    };
    
  }  


  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }


  componentDidMount() {
    console.log('Chart Refresh Called');
    fetch('/bar')
      .then(res => res.json())
      .then(DataPoint=> this.setState({DataPoint}, () => console.log('Data Points fetched...', DataPoint)));
  }
  

  render() {

    const data = [
      {text: 'Man', value: 500}, 
      {text: 'Woman', value: 300} 
    ];

    const margin = {top: 20, right: 20, bottom: 30, left: 40};

   

    return (
      <div> 
      <BarChart ylabel=''
        width={500}
        height={500}
        margin={margin}
        data={this.state.DataPoint}
        onBarClick={this.handleBarClick}/>
  </div>

    );
  }
}

export default ClBarChart;
