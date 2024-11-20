import { create } from "zustand";

// 상태 타입 정의
interface RatingStore {
  ratingMeat: number;
  ratingSasimi: number;
  ratingCheeze: number;
  ratingChocolate: number;
  ratingDriedSnack: number;
  setRatingMeat: (value: number) => void;
  setRatingSasimi: (value: number) => void;
  setRatingCheeze: (value: number) => void;
  setRatingChocolate: (value: number) => void;
  setRatingDriedSnack: (value: number) => void;
}

// Zustand 스토어 생성
const useRatingStore = create<RatingStore>((set) => ({
  ratingMeat: 0,
  ratingSasimi: 0,
  ratingCheeze: 0,
  ratingChocolate: 0,
  ratingDriedSnack: 0,
  setRatingMeat: (value) => set({ ratingMeat: value }),
  setRatingSasimi: (value) => set({ ratingSasimi: value }),
  setRatingCheeze: (value) => set({ ratingCheeze: value }),
  setRatingChocolate: (value) => set({ ratingChocolate: value }),
  setRatingDriedSnack: (value) => set({ ratingDriedSnack: value }),
}));

export default useRatingStore;
