import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

export default function DonutWheel() {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius - 40; // just a bit smaller to create the "donut" effect

    const pieGenerator = d3.pie().value((d) => d.value);
    const pieData = pieGenerator(data);

    const arcPathGenerator = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create the donut chart slices
    svg.selectAll("path")
      .data(pieData)
      .enter().append("path")
      .attr("d", arcPathGenerator)
      .attr("fill", (d, i) => d3.schemeCategory10[i % 10]);

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
  }, []);

  return (
    <div className="flex justify-center items-center py-4">
      <svg ref={svgRef}></svg>
    </div>
  );
}
