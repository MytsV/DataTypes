'use strict';

const countTypesInArray = (arr) => {
  const counts = {};
  for (const element of arr) {
    counts[typeof element] = (counts[typeof element] ?? 0) + 1;
  }
  return counts;
};

module.exports = { countTypesInArray };
