import React, { useState } from 'react';

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
      // BUG 3: values are swapped — sends dateTo as dateFrom and vice versa
      dateFrom: dateTo,
      dateTo: dateFrom,
      status,
    });
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '16px', background: '#f8f8f6', borderRadius: '8px', marginBottom: '16px' }}>
      <select value={grade} onChange={e => setGrade(e.target.value)} style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc' }}>
        <option value="">All grades</option>
        {['K','1','2','3','4','5','6'].map(g => (
          <option key={g} value={g}>Grade {g}</option>
        ))}
      </select>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label style={{ fontSize: '13px', color: '#666' }}>From:</label>
        <input
          type="date"
          value={dateFrom}
          onChange={e => setDateFrom(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label style={{ fontSize: '13px', color: '#666' }}>To:</label>
        <input
          type="date"
          value={dateTo}
          onChange={e => setDateTo(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
      </div>

      <select value={status} onChange={e => setStatus(e.target.value)} style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ccc' }}>
        <option value="">All statuses</option>
        <option value="pending">Pending</option>
        <option value="confirmed">Confirmed</option>
        <option value="failed">Failed</option>
      </select>

      <button onClick={handleApply} style={{ padding: '8px 20px', background: '#1e40af', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>
        Apply filters
      </button>
    </div>
  );
};
