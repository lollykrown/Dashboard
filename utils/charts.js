'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PointElement, Title,
  LineElement, CategoryScale, LinearScale, BarElement, LineController,
  BarController, } from 'chart.js';
import { Doughnut, Line, Bar, Pie } from 'react-chartjs-2';
ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend, LinearScale, 
  PointElement, LineElement, Title, BarController, LineController, BarElement);

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
    <div className='relative h-16 w-28'>
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
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  drawBorder: false
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,
                  // callback(n) {
                  //   if (n < 1e3) return n;
                  //   if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  // }
                }
              }
            ]
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
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  drawBorder: false
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,
                  // callback(n) {
                  //   if (n < 1e3) return n;
                  //   if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  // }
                }
              }
            ]
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
const PieChart = () => {
  const data = {
    labels: ['System', 'Your Files', 'Others'],
    datasets: [
      {
        label: '# of Votes',
        data: [25, 60, 15],
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
        display: true,
        text: 'Your Pie Chart',
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
export {
  ProgressBar,
  LineChart,
  CurlyLineChart,
  Circle,
  BarChart,
  SBarChart,
  RBarChart,
  Lines,
  PieChart
}
