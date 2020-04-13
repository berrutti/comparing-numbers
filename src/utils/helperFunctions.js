export const byNumbers = (firstElement, secondElement) => {
  if (firstElement.number < secondElement.number) {
    return -1;
  }
  if (firstElement.number > secondElement.number) {
    return 1;
  }
  return 0;
};