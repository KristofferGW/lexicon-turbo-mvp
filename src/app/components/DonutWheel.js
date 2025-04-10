import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#FDE047", "#4CAF50", "#F44336"]; // Orange, Green, Red

export default function DonutWheel({ studentProgress }) {
  return (
    <PieChart width={440} height={300}>
      <Pie
        data={studentProgress}
        nameKey="category"
        cx="50%"
        cy="50%"
        innerRadius={60} // Makes it a donut
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
        label={({ index, value }) => `${studentProgress[index].category}: ${value}`}
      >
        {studentProgress.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
