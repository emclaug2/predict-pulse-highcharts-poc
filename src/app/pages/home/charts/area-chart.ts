import * as Highcharts from 'highcharts';

export const AreaChartOptions: Highcharts.Options = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Area chart with negative values'
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  credits: {
    enabled: false
  },
  series: [{
    type: undefined,
    name: 'John',
    data: [5, 3, 4, 7, 2]
  }, {
    type: undefined,
    name: 'Jane',
    data: [2, -2, -3, 2, 1]
  }, {
    type: undefined,
    name: 'Joe',
    data: [3, 4, 4, -2, 5]
  }]
};
