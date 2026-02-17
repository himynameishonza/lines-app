export interface Reading {
  id: string;
  hexagramNumber: number;
  question: string;
  date: string;
  affirmation: string;
}

export const placeholderReadings: Reading[] = [
  {
    id: "1",
    hexagramNumber: 1,
    question: "Sample question 1",
    date: "2024-01-15",
    affirmation: "Sample affirmation text for reading 1"
  },
  {
    id: "2",
    hexagramNumber: 5,
    question: "Sample question 2",
    date: "2024-01-14",
    affirmation: "Sample affirmation text for reading 2"
  },
  {
    id: "3",
    hexagramNumber: 3,
    question: "Sample question 3",
    date: "2024-01-13",
    affirmation: "Sample affirmation text for reading 3"
  },
  {
    id: "4",
    hexagramNumber: 7,
    question: "Sample question 4",
    date: "2024-01-12",
    affirmation: "Sample affirmation text for reading 4"
  },
  {
    id: "5",
    hexagramNumber: 2,
    question: "Sample question 5",
    date: "2024-01-11",
    affirmation: "Sample affirmation text for reading 5"
  }
];
