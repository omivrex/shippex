import { createContext, Dispatch, SetStateAction, useContext } from "react";

const BottomSheetContext = createContext<{
    isBottomSheetOpen: boolean;
    setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const useBottomSheetContext = () => useContext(BottomSheetContext);

export default BottomSheetContext;
