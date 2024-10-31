"use client";

import React, { PureComponent } from "react";
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Define the types for our data
interface DataPoint {
  date: string;
  value: number;
}

interface LineSynchronizedChartProps {
  data: DataPoint[];
}

export default class LineSynchronizedChart extends PureComponent<LineSynchronizedChartProps> {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/synchronized-line-charts-37rhmf";

  render() {
    const { data } = this.props;

    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line
              dataKey="value"
              stroke="#2196F3"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
