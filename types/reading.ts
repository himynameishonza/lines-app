export type ReadingMethod = 'random' | 'randomWithChanging' | 'coinToss';

export interface Reading {
  id: string;
  hexagramId: number;
  question: string;
  method: ReadingMethod;
  changingLines?: boolean[];
  createdAt: string; // ISO date string
}
