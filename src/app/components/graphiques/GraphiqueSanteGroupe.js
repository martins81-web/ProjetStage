import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
export class GraphiqueSanteGroupe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
      },

      series: [
        {
          name: 'series-1',
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
      ],
    };
  }

  render() {
    return (
      <Card>
        <Card.Header>Test</Card.Header>
        <Card.Body>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='area'
          />
        </Card.Body>
      </Card>
    );
  }
}

export default GraphiqueSanteGroupe;
