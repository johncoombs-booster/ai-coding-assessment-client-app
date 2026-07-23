import { Injectable } from '@nestjs/common';

export type DonationStatus = 'pending' | 'confirmed' | 'failed';

export interface Donation {
  id: number;
  donorName: string;
  amount: number;
  grade: string;
  donatedAt: string;
  status: DonationStatus;
}

export interface FilterDonationsDto {
  grade?: string;
  dateFrom?: string;
  dateTo?: string;
  status?: string;
}

const SEED_DATA: Donation[] = [
  { id: 1,  donorName: 'Alice Martin',   amount: 50,  grade: 'K', donatedAt: '2024-03-01', status: 'confirmed' },
  { id: 2,  donorName: 'Bob Chen',       amount: 120, grade: '1', donatedAt: '2024-03-05', status: 'pending'   },
  { id: 3,  donorName: 'Carol Davis',    amount: 75,  grade: '2', donatedAt: '2024-03-10', status: 'confirmed' },
  { id: 4,  donorName: 'Dan Lee',        amount: 200, grade: '3', donatedAt: '2024-03-12', status: 'confirmed' },
  { id: 5,  donorName: 'Eve Wilson',     amount: 30,  grade: '4', donatedAt: '2024-03-15', status: 'failed'    },
  { id: 6,  donorName: 'Frank Brown',    amount: 90,  grade: '5', donatedAt: '2024-03-18', status: 'pending'   },
  { id: 7,  donorName: 'Grace Kim',      amount: 150, grade: '6', donatedAt: '2024-03-20', status: 'confirmed' },
  { id: 8,  donorName: 'Henry Park',     amount: 60,  grade: 'K', donatedAt: '2024-03-22', status: 'pending'   },
  { id: 9,  donorName: 'Iris Patel',     amount: 80,  grade: '2', donatedAt: '2024-03-25', status: 'confirmed' },
  { id: 10, donorName: 'Jack Nguyen',    amount: 45,  grade: '3', donatedAt: '2024-03-28', status: 'failed'    },
];

@Injectable()
export class DonationsService {
  private readonly donations: Donation[] = [...SEED_DATA];

  findAll(filters: FilterDonationsDto): Donation[] {
    let results = [...this.donations];

    if (filters.grade) {
      results = results.filter(d => d['grade'] === filters.grade);
    }

    if (filters.dateFrom && filters.dateTo) {
      results = results.filter(d => {
        const date = new Date(d.donatedAt);
        return date >= new Date(filters.dateFrom!) && date <= new Date(filters.dateTo!);
      });
    }

    if (filters.status) {
      results = results.filter(d => d.status === filters.status);
    }

    return results.sort((a, b) =>
      new Date(b.donatedAt).getTime() - new Date(a.donatedAt).getTime()
    );
  }
}
