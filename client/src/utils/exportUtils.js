import { saveAs } from 'file-saver';
import { format } from 'date-fns';

export const exportToCSV = (data, filename) => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, `${filename}_${format(new Date(), 'yyyy-MM-dd')}.csv`);
};

export const exportToPDF = async (data, template) => {
  // PDF export logic
  // ...existing code...
};

export const exportToExcel = (data, filename) => {
  // Excel export logic
  // ...existing code...
};
