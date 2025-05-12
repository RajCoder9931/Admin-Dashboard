import React from 'react';
interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  change?: string;
  isPositive?: boolean;
}
const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  color,
  change,
  isPositive
}) => {
  return <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className={`p-3 rounded-full mr-4 ${color}`}>{icon}</div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        {change && <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'} mt-1`}>
            {isPositive ? '↑' : '↓'} {change}{' '}
            {isPositive ? 'increase' : 'decrease'}
          </p>}
      </div>
    </div>;
};
export default SummaryCard;