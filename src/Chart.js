import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: '1:00',
    subject: 4,
    time: 2400,
    amt: 2400,
  },
  {
    name: '2:00',
    subject: 3,
    time: 1398,
    amt: 2210,
  },
  {
    name: '3:00',
    subject: 2,
    time: 9800,
    amt: 2290,
  },
  {
    name: '4:00',
    subject: 2,
    time: 3908,
    amt: 2000,
  }  
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Chart() {
  return (
    <ResponsiveContainer width={330} height={220}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Bar dataKey="subject" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

