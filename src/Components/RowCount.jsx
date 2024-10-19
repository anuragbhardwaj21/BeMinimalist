import React from 'react';

export const RowCount = ({ rowCount, setRowCount }) => {
  const handleRowCountChange = (e) => {
    setRowCount(Number(e.target.value));
  };

  return (
    <div className="row-count">
      <label htmlFor="row-count-select">Rows Count:&nbsp; </label>
      <select
        id="row-count-select"
        value={rowCount}
        onChange={handleRowCountChange}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};
