import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = () => {
    const data = [
      {
          "month": "Mar",
          "investment": 100000,
          "sell": 241,
          "revenue": 10401
      },
      {
          "month": "Apr",
          "investment": 200000,
          "sell": 423,
          "revenue": 24500
      },
      {
          "month": "May",
          "investment": 500000,
          "sell": 726,
          "revenue": 67010
      },
      {
          "month": "Jun",
          "investment": 500000,
          "sell": 529,
          "revenue": 40405
      },
      {
          "month": "Jul",
          "investment": 600000,
          "sell": 601,
          "revenue": 50900
      },
      {
          "month": "Aug",
          "investment": 700000,
          "sell": 670,
          "revenue": 61000
      }
  ]
    return (
        <div>
            <h3>Investment vs Revenue</h3>
             <BarChart width={500} height={400} data={data}>
            <Bar dataKey={'investment'} fill="#8884d8"></Bar>
            <Bar dataKey={'revenue'} fill="#82ca9d"></Bar>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
       </BarChart>
       </div>
    );
};

export default MyBarChart;