'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PointElement, Title,
  LineElement, CategoryScale, LinearScale, BarElement, LineController,
  BarController, } from 'chart.js';
import { Doughnut, Line, Bar } from 'react-chartjs-2';

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
    <div className='relative w-32 h-32'>
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
        pointStyle="star"
        data={{
          labels: data.labels,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "Earnings",
              pointStyle: "rectRounded",
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
              pointStyle: "triangle",
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
            x:{display: false},
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
export {
  ProgressBar,
  LineChart,
  Circle,
  BarChart
}