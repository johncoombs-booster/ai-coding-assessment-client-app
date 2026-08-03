import React, { useState } from 'react';
import './App.css';
import { DonationFilters } from './components/DonationFilters';
import { DonationTable } from './components/DonationTable';
import { useDonations } from './hooks/useDonations';

function App() {
  const [filters, setFilters] = useState({ grade: '', dateFrom: '', dateTo: '', status: '' });
  const { donations, loading } = useDonations(filters);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🏫 Maple Ridge Elementary</h1>
        <div className="app-subtitle-row">
          <p className="app-subtitle">Donations Dashboard</p>
          <span className="app-badge">Giving Week</span>
        </div>
      </header>

      <DonationFilters onFilter={setFilters} />

      <div className="app-card">
        <div className="app-card-header">
          <span className="app-result-count">{donations.length} result{donations.length !== 1 ? 's' : ''}</span>
        </div>
        <DonationTable donations={donations} loading={loading} />
      </div>
    </div>
  );
}

export default App;
