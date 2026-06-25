"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function VisibilityChart({ data }: { data: { date: string, score: number }[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p className="text-sm text-muted-foreground">No historical data available.</p>
      </div>
    )
  }

  // If there's only one data point, recharts line chart might look empty, so we add a dummy previous point
  // or just show it as is (it shows a dot).
  const chartData = data.length === 1 
    ? [{ date: 'Previous', score: 0 }, ...data] 
    : data

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{
          top: 5,
          right: 10,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
        <XAxis 
          dataKey="date" 
          stroke="#888" 
          fontSize={12} 
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          stroke="#888" 
          fontSize={12} 
          tickLine={false}
          axisLine={false}
          domain={[0, 100]}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px' }}
          itemStyle={{ color: '#fff' }}
        />
        <Line 
          type="monotone" 
          dataKey="score" 
          stroke="#6366f1" 
          strokeWidth={3}
          dot={{ r: 4, fill: '#6366f1', strokeWidth: 2 }}
          activeDot={{ r: 6 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
