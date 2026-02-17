// Hexagram image mapping
// This allows us to dynamically load hexagram images by number

const hexagram1 = require('./1.png');
const hexagram2 = require('./2.png');
const hexagram3 = require('./3.png');

export const hexagramImages: { [key: number]: any } = {
  1: hexagram1,
  2: hexagram2,
  3: hexagram3,
};

// Helper function to get hexagram image by number
// Falls back to hexagram 1 if the specific image doesn't exist
export const getHexagramImage = (number: number) => {
  return hexagramImages[number] || hexagram1;
};
