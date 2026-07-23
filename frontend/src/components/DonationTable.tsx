import React from 'react';
import { Donation } from '../hooks/useDonations';

const statusColors: Record<string, { bg: string; color: string }> = {
  confirmed: { bg: '#dcfce7', color: '#14532d' },
  pending:   { bg: '#fef3c7', color: '#78350f' },
  failed:    { bg: '#fee2e2', color: '#7f1d1d' },
};

interface Props {
  donations: Donation[];
  loading: boolean;
}

export const DonationTable: React.FC<Props> = ({ donations, loading }) => {
  if (loading) return <p style={{ color: '#666', padding: '16px' }}>Loading...</p>;
  if (!donations.length) return <p style={{ color: '#666', padding: '16px' }}>No donations match your filters.</p>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #e5e5e0' }}>
          {['Donor', 'Amount', 'Grade', 'Date', 'Status'].map(h => (
            <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontWeight: 600, color: '#444', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {donations.map(d => {
          const s = statusColors[d.status] || { bg: '#f0efe9', color: '#444' };
          return (
            <tr key={d.id} style={{ borderBottom: '1px solid #f0efe9' }}>
              <td style={{ padding: '12px' }}>{d.donorName}</td>
              <td style={{ padding: '12px', fontWeight: 500 }}>${d.amount}</td>
              <td style={{ padding: '12px' }}>{d.grade}</td>
              <td style={{ padding: '12px', color: '#666' }}>{d.donatedAt}</td>
              <td style={{ padding: '12px' }}>
                <span style={{ background: s.bg, color: s.color, padding: '3px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>
                  {d.status}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
