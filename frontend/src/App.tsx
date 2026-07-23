import React, { useState } from 'react';
import { DonationFilters } from './components/DonationFilters';
import { DonationTable } from './components/DonationTable';
import { useDonations } from './hooks/useDonations';

function App() {
  const [filters, setFilters] = useState({ grade: '', dateFrom: '', dateTo: '', status: '' });
  const { donations, loading } = useDonations(filters);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '4px' }}>🏫 Maple Ridge Elementary</h1>
        <p style={{ color: '#666', fontSize: '14px' }}>Giving Week — Donations Dashboard</p>
      </div>

      <DonationFilters onFilter={setFilters} />

      <div style={{ background: '#fff', border: '1px solid #e5e5e0', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid #e5e5e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: '#666' }}>{donations.length} result{donations.length !== 1 ? 's' : ''}</span>
        </div>
        <DonationTable donations={donations} loading={loading} />
      </div>
    </div>
  );
}

export default App;
