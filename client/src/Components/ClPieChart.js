import React, { Component } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

class ClPieChart extends Component {
 
  constructor() {
    super();
    this.state = {
      DataPoint: [],
      refresh : ''
    };
    
  }  

  componentDidMount() {
    console.log('Chart Refresh Called');
    fetch('/pie')
      .then(res => res.json())
      .then(DataPoint=> this.setState({DataPoint}, () => console.log('Data Points fetched...', DataPoint)));
  }
  

  render() {

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Website Traffic Sources"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 18, label: "Direct" },
                { y: 49, label: "Organic Search" },
                { y: 9, label: "Paid Search" },
                { y: 5, label: "Referral" },
                { y: 19, label: "Social" }
            ]
        }]
    }
    return (
      
        <div>
        <PieChart
         data={this.state.DataPoint}
            /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
  }
}

export default ClPieChart;
