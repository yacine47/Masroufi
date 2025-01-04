"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { CharData } from "@/app/types/CharData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  transactionData: CharData[]; 
}

const LineChart: React.FC<LineChartProps> = ({ transactionData }) => {
  const chartData = {
    labels: transactionData.map((data) => data.date), // X-axis labels
    datasets: [
      {
        label: "Transaction Amounts",
        data: transactionData.map((data) => data.amount), // Y-axis values
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full h-96">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
