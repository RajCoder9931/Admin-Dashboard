import React, { useState, createElement } from 'react';
import { FileTextIcon, DownloadIcon, FilterIcon } from 'lucide-react';
import Button from '../components/shared/Button';
import { useDashboard } from '../context/DashboardContext';
const Reports: React.FC = () => {
  const {
    sales,
    purchases,
    users
  } = useDashboard();
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const generateCSV = (data: any[], filename: string) => {
    // Simple CSV generation
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(item => Object.values(item).join(','));
    const csv = [headers, ...rows].join('\n');
    const blob = new Blob([csv], {
      type: 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };
  const filterDataByDate = (data: any[]) => {
    if (!dateRange.start || !dateRange.end) return data;
    return data.filter(item => {
      const itemDate = new Date(item.date);
      const start = new Date(dateRange.start);
      const end = new Date(dateRange.end);
      return itemDate >= start && itemDate <= end;
    });
  };
  const reportTypes = [{
    title: 'Sales Report',
    description: 'Download detailed sales transactions',
    icon: <FileTextIcon size={24} className="text-blue-600" />,
    action: () => generateCSV(filterDataByDate(sales), 'sales-report')
  }, {
    title: 'Purchase Report',
    description: 'Download detailed purchase transactions',
    icon: <FileTextIcon size={24} className="text-green-600" />,
    action: () => generateCSV(filterDataByDate(purchases), 'purchase-report')
  }, {
    title: 'User Activity Report',
    description: 'Download user activity and status',
    icon: <FileTextIcon size={24} className="text-purple-600" />,
    action: () => generateCSV(users, 'user-report')
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input type="date" value={dateRange.start} onChange={e => setDateRange({
            ...dateRange,
            start: e.target.value
          })} className="border border-gray-300 rounded-md p-2" />
            <span>to</span>
            <input type="date" value={dateRange.end} onChange={e => setDateRange({
            ...dateRange,
            end: e.target.value
          })} className="border border-gray-300 rounded-md p-2" />
          </div>
          <Button variant="outline" icon={<FilterIcon size={16} />} onClick={() => setDateRange({
          start: '',
          end: ''
        })}>
            Clear Filter
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportTypes.map((report, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gray-50 rounded-lg">{report.icon}</div>
              <Button variant="outline" size="sm" icon={<DownloadIcon size={16} />} onClick={report.action}>
                Download
              </Button>
            </div>
            <h3 className="text-lg font-medium mb-2">{report.title}</h3>
            <p className="text-gray-600 text-sm">{report.description}</p>
          </div>)}
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <FileTextIcon className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Note</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>
                Reports are generated in CSV format and can be opened in any
                spreadsheet application.
              </p>
              <p>
                Use the date filter above to generate reports for specific time
                periods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Reports;