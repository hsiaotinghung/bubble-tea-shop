import { PieChart } from "react-minimal-pie-chart";

const OrderPieChart = ({ pieChartData }) => {
  return (
    <PieChart
      data={pieChartData}
      label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
      labelStyle={(index) => ({
        fill: pieChartData[index].color,
        font: "bold 6px sans-serif",
      })}
      labelPosition={50}
      lineWidth={25}
      rounded
    />
  );
};

export default OrderPieChart;
