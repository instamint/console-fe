import BigNumber from 'bignumber.js'
import {showNumberFormat} from '../_metronic/helpers/format/number'

export const dataReactApexChart = {
  series: [
    {
      name: 'TVL',
      data: [],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: 'area' as 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth' as 'smooth',
    },
    xaxis: {
      type: 'datetime' as 'datetime',
      categories: [],
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          return showNumberFormat(value)
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  },
}
