import { PieChart } from "@mui/x-charts";

const BasicPie = ({ cards }) => {
  return (
    <div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 12, label: "Total Donation" },
              { id: 1, value: 2, label: "My Donation" },
            ],
          },
        ]}
        width={400}
        height={300}
      ></PieChart>
    </div>
  );
};

export default BasicPie;
