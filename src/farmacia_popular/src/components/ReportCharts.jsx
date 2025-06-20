import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useLocation } from 'react-router-dom';

export default function ReportCharts() {

  const location = useLocation();
  const currentPath = location.pathname;

  console.log('currentPath state:', currentPath);

  let reportName = ''
  if (currentPath === '/relatorio-financeiro') {
    reportName = 'Relatório Financeiro';
  } else if (currentPath === '/relatorio-estoque') {
    reportName = 'Relatório de Estoque';
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-start overflow-hidden pt-25">
        <div className="p-6 bg-white/60 from-white to-blue-200 shadow-md max-w-2xl w-150 mx-auto rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">{reportName}</h1>

          <div className="flex justify-end gap-4 mb-6">
            <div className="flex flex-col items-start">
              <label htmlFor="startDate" className="text-sm text-gray-700 mb-1">
                Início
              </label>
              <input
                type="date"
                id="startDate"
                className="p-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-32"
              />
            </div>

            <div className="flex flex-col items-start">
              <label htmlFor="endDate" className="text-sm text-gray-700 mb-1">
                Fim
              </label>
              <input
                type="date"
                id="endDate"
                className="p-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-32"
              />
            </div>
          </div>

          <BarChart
            xAxis={[
              {
                id: 'barCategories',
                data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
              },
            ]}
            series={[
              {
                data: [2, 5, 3, 8, 4, 6],
              },
            ]}
            height={300}
          />
        </div>
      </div>
    </>
  );
}
