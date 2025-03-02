import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

export default function DonutWheel({ studentProgress }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius - 40; // just a bit smaller to create the "donut" effect

    const pieGenerator = d3.pie().value((d) => d.value);
    const pieData = pieGenerator(studentProgress);

    const arcPathGenerator = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Custom color mapping array based on your specifications:
    const customColors = ['red', 'green', 'yellow', 'blue', 'orange', 'purple', 'pink', 'brown', 'grey', 'violet'];

    // Manually map your custom colors to each slice based on the index
    svg.selectAll("path")
      .data(pieData)
      .enter().append("path")
      .attr("d", arcPathGenerator)
      .attr("fill", (d, i) => {
        // Map the color based on the index for each segment
        const colorMap = {
          'green': 'red',   // Green -> Red
          'yellow': 'green', // Yellow -> Green
          'purple': 'yellow', // Purple -> Yellow
        };
        
        const originalColor = d3.schemeCategory10[i % 10];

        // Return the mapped color
        return colorMap[originalColor] || originalColor;
      });

    // Add the labels
    svg.selectAll("text")
      .data(pieData)
      .enter().append("text")
      .attr("transform", (d) => {
        const centroid = arcPathGenerator.centroid(d);
        return `translate(${centroid})`;
      })
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text((d) => d.data.name);
  }, [studentProgress]);

  return (
    <div className="flex justify-center items-center py-4">
      <svg ref={svgRef}></svg>
    </div>
  );
}
