"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function LearningProgress() {
  const data = [
    { name: "Mastered", value: 1, color: "#4CAF50" }, // Green
    { name: "Familiar", value: 1, color: "#FFC107" }, // Yellow
    { name: "Unfamiliar", value: 1, color: "#F44336" }, // Red
  ];

  return (
    <div className="w-[636px] mx-auto mt-6">
      {/* Rubrik */}
      <h2 className="text-lg font-semibold text-white text-center">
        Overall learning progress
      </h2>

      {/* Progress Boxar */}
      <div className="flex w-full mt-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 h-12 flex items-center justify-center text-white font-medium"
            style={{ backgroundColor: item.color }}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Donut Chart */}
      <div className="w-full flex justify-center mt-6">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
