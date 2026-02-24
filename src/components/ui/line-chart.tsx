'use client';

import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type LineChartProps = React.HTMLAttributes<HTMLDivElement>;

const data = [
  { month: 'Jan', authentication: 120, transfer: 90, contract: 50, payment: 40 },
  { month: 'Feb', authentication: 150, transfer: 100, contract: 60, payment: 45 },
  { month: 'Mar', authentication: 170, transfer: 110, contract: 80, payment: 50 },
  { month: 'Apr', authentication: 190, transfer: 130, contract: 100, payment: 55 },
  { month: 'May', authentication: 220, transfer: 150, contract: 110, payment: 58 },
  { month: 'Jun', authentication: 260, transfer: 170, contract: 120, payment: 60 },
];

export function LineChart({ className, ...props }: LineChartProps) {
  return (
    <div className={className} {...props}>
      <ResponsiveContainer width="100%" height={260}>
        <RechartsLineChart data={data}>
          <CartesianGrid stroke="#e5e7eb" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" />
          <Line type="monotone" dataKey="authentication" name="Product Authentication" stroke="#3b82f6" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="transfer" name="Inventory Transfer" stroke="#22c55e" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="contract" name="Smart Contract" stroke="#a855f7" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="payment" name="Payment" stroke="#ef4444" strokeWidth={2} dot={false} />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
