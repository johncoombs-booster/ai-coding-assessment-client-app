import React, { useState } from 'react';
import './DonationFilters.css';

interface Filters {
  grade: string;
  dateFrom: string;
  dateTo: string;
  status: string;
}

interface Props {
  onFilter: (filters: Filters) => void;
}

export const DonationFilters: React.FC<Props> = ({ onFilter }) => {
  const [grade, setGrade] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [status, setStatus] = useState('');

  const handleApply = () => {
    onFilter({
      grade,
      dateFrom: dateTo,
      dateTo: dateFrom,
      status,
    });
  };

  return (
    <div className="filters-bar">
      <div className="filter-field">
        <label className="filter-label" htmlFor="filter-grade">Grade</label>
        <select
          id="filter-grade"
          className="filter-select"
          value={grade}
          onChange={e => setGrade(e.target.value)}
        >
          <option value="">All grades</option>
          {['K', '1', '2', '3', '4', '5', '6'].map(g => (
            <option key={g} value={g}>Grade {g}</option>
          ))}
        </select>
      </div>

      <div className="filter-field">
        <label className="filter-label" htmlFor="filter-date-from">From</label>
        <input
          id="filter-date-from"
          type="date"
          className="filter-date"
          value={dateFrom}
          onChange={e => setDateFrom(e.target.value)}
        />
      </div>

      <div className="filter-field">
        <label className="filter-label" htmlFor="filter-date-to">To</label>
        <input
          id="filter-date-to"
          type="date"
          className="filter-date"
          value={dateTo}
          onChange={e => setDateTo(e.target.value)}
        />
      </div>

      <div className="filter-field">
        <label className="filter-label" htmlFor="filter-status">Status</label>
        <select
          id="filter-status"
          className="filter-select"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <button className="filter-apply-btn" onClick={handleApply}>
        Apply filters
      </button>
    </div>
  );
};
