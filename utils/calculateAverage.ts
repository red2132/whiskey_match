import { Ratings } from "@/types";

const calculateAverage = (arr: Ratings[]): Ratings => {
  const keys = Object.keys(arr[0]) as (keyof Ratings)[];

  const average = keys.reduce((acc, key) => {
    const sum = arr.reduce((sum, obj) => sum + obj[key], 0);
    acc[key] = sum / arr.length;
    return acc;
  }, {} as Ratings);
  return average;
};

export default calculateAverage;
