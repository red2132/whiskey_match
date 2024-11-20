import { create } from "zustand";

// 상태 타입 정의
interface IsEditingStore {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  toggle: () => void; // 상태를 반전시키는 추가 기능
}

// Zustand 스토어 생성
const useIsEditingStore = create<IsEditingStore>((set) => ({
  isEditing: false, // 초기값
  setIsEditing: (value) => set({ isEditing: value }), // 상태를 설정
  toggle: () => set((state) => ({ isEditing: !state.isEditing })), // 상태를 반전
}));

export default useIsEditingStore;
