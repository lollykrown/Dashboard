'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PointElement, Title,
  LineElement, CategoryScale, LinearScale, BarElement, LineController,
  BarController, } from 'chart.js';
import { Doughnut, Line, Bar, Pie } from 'react-chartjs-2';
ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend, LinearScale, 
  PointElement, LineElement, Title, BarController, LineController, BarElement);


import { Chart as GoogleChart} from "react-google-charts";


const ProgressBar = ({percent}) => {
  const p = 100-percent
  const data = {
    datasets: [
      {
        data: [percent,p],
        backgroundColor: [
          "#FF9F43",
          "#DBDADE",
        ],
        display: true,
        borderColor: "transparent"
      }
    ]
  };

  return (
    <div className='relative h-16 w-28 mx-auto'>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          },
          rotation: -90,
          circumference: 180,
          cutout: "88%",
          maintainAspectRatio: false,
          responsive: true
        }} />
      <div className='absolute top-2/3 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
        <p>{percent}%</p>
      </div>
    </div>
  );
};

const LineChart = () => {
  const options = {
    scales:{
      x:{
        grid:{display: true},
        ticks: { display: false},
      },
      y:{display: false},
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
  };
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10,60,20,80,30,100],
        borderColor: '#00CFE8',
        backgroundColor: '#00CFE8',
      },
    ],
  };

  return (
      <Line data={data} options={options}/>
  );
};
const CurlyLineChart = ({color}) => {
  const options = {
    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: 'linear',
    //     from: 1,
    //     to: 0,
    //     loop: true
    //   }
    // },
    scales:{
      x:{display: false},
      y:{display: false}
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
  };
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','Jul','Aug','Sep'];

  const data = {
    labels,
    datasets: [
      {
        data: [20,10,50,30,45,15,80,44,55],
        borderColor: color,
        backgroundColor: color,
        tension: 0.3
      },
    ],
  };

  return (
      <Line data={data} options={options}/>
  );
};
const Circle = ({percent}) => {
  const data = {
    datasets: [
      {
        data: [34,50,21,30],
        backgroundColor: [
          "#28c76f",
          "#69d89a",
          "#a9e9c5",
          "#d4f4e2",
        ],
        display: true,
        borderColor: "transparent"
      }
    ]
  };

  return (
    <div className='relative w-32 h-36'>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          },
          rotation: -90,
          cutout: "66%",
          maintainAspectRatio: false,
          responsive: true
        }} />
      <div className='absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
        <p>{percent}<span className='block text-green-main'>Total</span></p>
      </div>
    </div>
  );
};

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov"],
    previousDate: {
      dataSet: [100, 200, 150,300, 450, 500,150,220,700,600,400]
    },
    currentDate: {
      dataSet: [-100,-200, -400, -300,-450,-300,-200,-400,-500,-350,-250]
    }
  };

  return (
    <div className="">
      <Bar
        data={{
          labels: data.labels,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "Earnings",
              backgroundColor: "#7367f0",
              barThickness: 8,
              categoryPercentage: 1,
              borderRadius:'50',
              data: data.previousDate.dataSet //From API
            },
            {
              label: "Expenses",
              backgroundColor: "#FF9F43",
              barThickness: 8,
              categoryPercentage: 1,
              borderRadius:'50',
              data: data.currentDate.dataSet //From API
            }
          ]
        }}
        height={220}
        options={{
          plugins: {
            legend: {
              display: false
            },
          },
          offsetGridLines: true,
          drawTicks: true,
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x:{
              grid:{display: false},
              stacked: true,
            },
            y:{
              grid:{display: false}
            },
          }
        }}
      />
    </div>
  );
};
const SBarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov"],
    previousDate: {
      dataSet: [100, 200, 150,300, 450, 200,150,220,400,600,400]
    },
    currentDate: {
      dataSet: [200,300, 400, 500,550,600,700,500,600,750,650]
    }
  };

  return (
    <div className="">
      <Bar
        data={{
          labels: data.labels,
          responsive: true,
          // offset: true,
          datasets: [
            {
              label: "Earnings",
              backgroundColor: "#2563eb",
              barThickness: 8,
              categoryPercentage: 1,
              borderRadius:'50',
              data: data.previousDate.dataSet //From API
            },
            {
              label: "Expenses",
              backgroundColor: "#bfdbfe",
              barThickness: 8,
              categoryPercentage: 1,
              borderRadius:'50',
              data: data.currentDate.dataSet //From API
            }
          ]
        }}
        height={220}
        options={{
          plugins: {
            legend: {
              display: false
            },
          },
          offsetGridLines: true,
          drawTicks: true,
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x:{
              grid:{display: false},
              stacked: true,
            },
            y:{
              grid:{display: false},
              stacked: true,
            },
          }
        }}
      />
    </div>
  );
};
const RBarChart = ({position}) => {
  const data = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    previousDate: {
      dataSet: [100, 550, 150,300, 250, 500,150]
    },
  };
  let colorSpectrum = [
    "#d5d1fb",
    "#d5d1fb",
    "#d5d1fb",
    "#d5d1fb",
    "#d5d1fb",
    "#d5d1fb",
  ]
  colorSpectrum.splice(position-1, 0, "#7367f0")
  return (
    <div className="">
      <Bar
        data={{
          labels: data.labels,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "Earnings",
              backgroundColor: colorSpectrum,
              barThickness: 20,
              categoryPercentage: 1,
              borderRadius:'5',
              data: data.previousDate.dataSet //From API
            }
          ]
        }}
        height={220}
        options={{
          plugins: {
            legend: {
              display: false
            },
          },
          offsetGridLines: true,
          drawTicks: true,
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x:{grid:{display: false}},
            y:{display: false},
          }
        }}
      />
    </div>
  );
};

const Lines = () => {
  const labels = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: [-1000, -700, 600, 300, 500, -200, -400],
        borderColor: 'rgb(106, 210, 255)',
        backgroundColor: 'rgba(106, 210, 255,0.5)',
        tension: 0.3
      },
      {
        label: 'Expenses',
        data: [-800, -100, 100, -900, 1000, -200, 400],
        borderColor: 'rgb(67, 24, 255)',
        backgroundColor: 'rgba(67, 24, 255, 0.5)',
        tension: 0.3
      },
    ],
  };
  const options = {
    responsive: true,
    scales:{
      x:{
        grid:{
          display:false,
        }
      },
      y:{display: false},
    },
    plugins: {
      legend: {
        display: false
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart',
      // },
    },
  };
  return <Line options={options} data={data} />;
}
const PieChart = ({
  labels = ['System', 'Your Files', 'Others'],
  values = [25, 60, 15],
  title = 'Your Pie Chart',
} = {}) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Share',
        data: values,
        backgroundColor: [
          'rgb(106, 210, 255)',
          'rgb(67, 24, 255)',          
          'rgb(239, 244, 251)',
        ],
        borderColor: [
          'rgba(106, 210, 255,0.1)',
          'rgba(67, 24, 255, 0.1)',
          'rgba(239, 244, 251,0.1)',          
        ],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          // pointStyle: 'circle'
          useBorderRadius:true,
          borderRadius:50,
          boxWidth: 10
        }
      },
      title: {
        display: !!title,
        text: title,
        align: 'start',
        font: {
          size: 18
      }
      },
      tooltip: {
        enabled: false
      }
    },
  };
  return <Pie data={data} options={options} />;

}
const MapChart = () => {
 const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    // ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["Nigeria", 400],
    ["Libya", 500],
    ["South Africa", 600],
    ["Kenya", 700],
  ];

  const options = {
    // region: "002", // Africa
    colorAxis: { colors: ["#FFA800", "#F64E60", "#6993FF", "#00AB9A","#8950FC" ] },
    // backgroundColor: "#81d4fa",
    datalessRegionColor: "#ECECEC",
    defaultColor: "#f5f5f5",
  };

  return (
    <GoogleChart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      // height="400px"
      data={data}
      options={options}
    />
  );
}
const GoogleTable = () => {
 const data = [
    ["Country", "Popularity", 'sales'],
    ["Home Decor Range", 500, 500],
    ["Disney Princess Pink Bag 18", 900, 900],
    ["Bathroom Essentials", 200, 200],
    ["Living Room Electronics", 400, 400],
    ["Apple Smartwatches", 300, 300],
  ];

  const cssClassNames = {
    'headerRow': '',
    'tableRow': 'text-xs text-slate-600',
    'oddTableRow': 'text-xs text-slate-600',
    'selectedTableRow': '',
    'hoverTableRow': '',
    'headerCell': '',
    'tableCell': '',
    'rowNumberCell': ''
  };

    const options = {
      allowHtml: true,
      showRowNumber: true,
      'cssClassNames': cssClassNames
      };

  const formatters = [
    {
      type: "BarFormat" ,
      column: 1,
      options: {
        max:1000,
        min:100, 
        showValue:false,     
      },
    },
  ];

  return (
    <GoogleChart
        chartType="Table"
        width="100%"
        // height="400px"
        data={data}
        options={options}
        formatters={formatters}
    />
  );
}
const GoogleLineChart = () => {
  const data = [
    ["Year", "Loyal Customers", "New Customers", "Unique Customers"],
    ["Jan", 1000, 400, 600],
    ["Feb", 1170, 460, 900],
    ["Mar", 660, 1120, 300],
    ["Apr", 1030, 540, 700],
    ["May", 170, 660, 200],
    ["Jun", 260, 920, 500],
  //   ["Jul", 1030, 540, 700],
  //   ["Aug", 1170, 460, 900],
  //   ["Sep", 660, 1120, 300],
  ];

  const options = {
    titlePosition:'none',
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#3CD856", "#A700FF", "#EF4444" ],
    // chartArea:{
    //   backgroundColor: "#A700FF"
    //   }

  };
  return (
    <GoogleChart
      chartType="LineChart"
      width="100%"
      // height="400px"
      data={data}
      options={options}
    />
  );
}

const TotalRevenueChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 11 } } },
      y: { grid: { color: '#F1F0FE' }, ticks: { font: { size: 11 }, callback: (v) => `$${v}k` } },
    },
  };
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Online Sales',
        data: [14, 17, 6, 16, 12, 17, 21],
        backgroundColor: '#0095FF',
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        label: 'Offline Sales',
        data: [12, 11, 22, 6, 11, 13, 11],
        backgroundColor: '#00E096',
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };
  return <div className='h-56'><Bar data={data} options={options} /></div>;
};

const CustomerSatisfactionChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { point: { radius: 0, hoverRadius: 4 } },
  };
  const labels = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Last Month',
        data: [2840, 3120, 2650, 3400, 3050, 3600, 3004],
        borderColor: '#0095FF',
        backgroundColor: 'rgba(0, 149, 255, 0.15)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'This Month',
        data: [3200, 3550, 3300, 4100, 3800, 4400, 4504],
        borderColor: '#07E098',
        backgroundColor: 'rgba(7, 224, 152, 0.15)',
        fill: true,
        tension: 0.4,
      },
    ],
  };
  return <div className='h-36'><Line data={data} options={options} /></div>;
};

const TargetRealityChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 10 } } },
      y: { display: false },
    },
  };
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Reality Sales',
        data: [8.2, 7.5, 8.8, 7.9, 9.3, 8.5, 9.1],
        backgroundColor: '#4AB58E',
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: 'Target Sales',
        data: [10.5, 11.2, 10.8, 11.9, 12.1, 11.6, 12.4],
        backgroundColor: '#FFCF00',
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };
  return <div className='h-36'><Bar data={data} options={options} /></div>;
};

const VolumeServiceChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: {
      x: { stacked: true, display: false },
      y: { stacked: true, display: false },
    },
  };
  const data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
    datasets: [
      {
        label: 'Services',
        data: [420, 380, 500, 460, 550, 480],
        backgroundColor: '#0095FF',
        borderRadius: 4,
        barPercentage: 0.5,
      },
      {
        label: 'Volume',
        data: [700, 640, 820, 760, 900, 810],
        backgroundColor: '#00E096',
        borderRadius: 4,
        barPercentage: 0.5,
      },
    ],
  };
  return <div className='h-36'><Bar data={data} options={options} /></div>;
};

const AnalyticsAreaChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, font: { size: 11 } } } },
    scales: {
      x: { grid: { display: false }, ticks: { font: { size: 11 } } },
      y: { grid: { color: '#F1F0FE' }, ticks: { font: { size: 11 } } },
    },
    elements: { point: { radius: 0, hoverRadius: 4 } },
  };
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Page Views',
        data: [3200, 4100, 3800, 5100, 4900, 6200, 5800, 6800, 6400, 7500, 7100, 8200],
        borderColor: '#7367f0',
        backgroundColor: 'rgba(115, 103, 240, 0.12)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Sessions',
        data: [2100, 2600, 2400, 3300, 3100, 4000, 3700, 4400, 4100, 4900, 4600, 5400],
        borderColor: '#28c76f',
        backgroundColor: 'rgba(40, 199, 111, 0.12)',
        fill: true,
        tension: 0.4,
      },
    ],
  };
  return <div className='h-72'><Line data={data} options={options} /></div>;
};

export {
  ProgressBar,
  LineChart,
  CurlyLineChart,
  Circle,
  BarChart,
  SBarChart,
  RBarChart,
  Lines,
  PieChart,
  MapChart,
  GoogleLineChart,
  GoogleTable,
  TotalRevenueChart,
  CustomerSatisfactionChart,
  TargetRealityChart,
  VolumeServiceChart,
  AnalyticsAreaChart
}


