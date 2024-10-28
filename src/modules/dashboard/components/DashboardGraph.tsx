import { Bar } from 'react-chartjs-2';
import { ScriptableContext, Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { useEffect, useState } from 'react';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels);

const DashboardGraph = () => {
  const feeCollectData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Fee Collection',
        data: [1500, 2500, 1800, 2200, 3000, 2800],
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // bar color
        borderColor: 'rgba(75, 192, 192, 1)', // bar border color
        borderWidth: 1, // bar border width
      },
    ],
  };

  return (
    <Bar
      style={{
        padding: '0 0px',
        display: 'flex',
        gap: '12px',
      }}
      data={feeCollectData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category', // specify the scale type as 'category'
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
            },
            ticks: {
              stepSize: 1000,
            },
          },
        },
      }}
    />
  );
};

export default DashboardGraph;
