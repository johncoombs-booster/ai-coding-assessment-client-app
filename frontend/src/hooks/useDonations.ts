import { useState, useEffect } from 'react';

export interface Donation {
  id: number;
  donorName: string;
  amount: number;
  grade: string;
  donatedAt: string;
  status: 'pending' | 'confirmed' | 'failed';
}

export function useDonations(filters: Record<string, string>) {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(
      Object.fromEntries(Object.entries(filters).filter(([, v]) => v))
    );
    fetch(`/api/donations?${params}`)
      .then(r => r.json())
      .then(data => { setDonations(data); setLoading(false); });
  }, [JSON.stringify(filters)]);

  return { donations, loading };
}
