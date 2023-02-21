interface GenerateRandomNumber {
  min: number;
  max: number;
}
export const generateRandomNumber = ({ max, min }: GenerateRandomNumber) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
