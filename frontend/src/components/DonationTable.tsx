import React from 'react';
import './DonationTable.css';
import { Donation } from '../hooks/useDonations';

const statusClass: Record<string, string> = {
  confirmed: 'status-pill--confirmed',
  pending: 'status-pill--pending',
  failed: 'status-pill--failed',
};

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

interface Props {
  donations: Donation[];
  loading: boolean;
}

export const DonationTable: React.FC<Props> = ({ donations, loading }) => {
  if (loading) return <p className="table-loading">Loading...</p>;
  if (!donations.length) return <p className="table-empty">No donations match your filters.</p>;

  return (
    <div className="table-scroll">
      <table className="donations-table">
        <thead>
          <tr>
            {['Donor', 'Amount', 'Grade', 'Date', 'Status'].map(h => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {donations.map(d => (
            <tr key={d.id}>
              <td>
                {d.donorName}
                {d.isTopDonor && <span className="top-donor-badge">★ Top Donor</span>}
              </td>
              <td className="donation-amount">${d.amount}</td>
              <td>{d.grade}</td>
              <td className="donation-date">{formatDate(d.donatedAt)}</td>
              <td>
                <span className={`status-pill ${statusClass[d.status] || 'status-pill--default'}`}>
                  {d.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
