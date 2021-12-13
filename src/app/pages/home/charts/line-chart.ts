import * as Highcharts from 'highcharts';

const min = 25;
const max = 95;

export const LineChartOptions: Highcharts.Options = {
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016',
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com',
    },

    yAxis: {
      min: 0,
      plotLines: [{
        id: 'limit-min',
        color: 'rgba(255,0,0,0.24)',
        dashStyle: 'Solid',
        width: 2,
        value: min,
        zIndex: 0
      }, {
        id: 'limit-max',
        color: 'rgba(255,0,0,0.24)',
        dashStyle: 'Solid',
        width: 2,
        value: max,
        zIndex: 0
      }],
        title: {
            text: 'Number of Employees',
        },
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017',
        },
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
    },

    plotOptions: {
        line: {
          dashStyle: 'Solid'
        },
        series: {
            label: {
                connectorAllowed: false,
            },
          dataLabels: {
            enabled: true,
            formatter: function() {
              if (this.y > 0) {
                return this.y;
              }
            }
          },
        },
    },

    series: [
        {
            type: undefined,
            name: 'Series 1',
            data: [80, 60, 58, 50, null, 70, 70],
        },
      {
        dashStyle: 'Dash',
        type: undefined,
        name: 'Series 2',
        data: [null, null, null, 50, 60, 70, null],
      },
      {
        dashStyle: 'Dash',
        type: undefined,
        name: 'Series 3',
        data: [null, null, null, 50, 30, 20, null],
      },
      {
        dashStyle: 'Dash',
        type: undefined,
        name: 'Series 4',
        data: [null, null, null, 50, 70, 90, null],
      },
      {
        dashStyle: 'LongDash',
        name: 'Installation',
        type: undefined,
        data: [null, 0, null, null, 0, null, null],
      },
    ],
    responsive: {
        rules: [
            {
                condition: {
                    maxWidth: 600,
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                    },
                },
            },
        ],
    },
};
