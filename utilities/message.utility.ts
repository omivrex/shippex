import Toast from "react-native-root-toast";
import colors from "../constants/colors.constants";

export const message = (text: string, type: "success" | "error" | "neutral" = "neutral", duration?: number) => {
    Toast.show(text, {
        duration: Toast.durations.LONG,
        position: duration || Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: type === "success" ? colors.green : type === "error" ? colors.error : undefined,
    });
};
