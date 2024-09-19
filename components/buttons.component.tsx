import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import colors from "../constants/colors.constants";
import { ReactNode } from "react";

type props = {
    text: string;
    onPress?: (e: GestureResponderEvent) => void;
    styles?: StyleProp<ViewStyle>;
    leftIcon?: ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    color?: string;
};

export const LargeButton = ({ text, onPress, styles, leftIcon, isDisabled, isLoading }: props) => {
    return (
        <Pressable onPress={isDisabled ? undefined : onPress} style={[defaultStyles.button, styles, isDisabled && { backgroundColor: colors.disabled }]}>
            {isLoading ? (
                <ActivityIndicator size={"small"} />
            ) : (
                <>
                    {leftIcon && <View style={{ marginLeft: 12 }}>{leftIcon}</View>}
                    <Text style={[defaultStyles.buttonText, isDisabled && { color: colors.disabledText }]}>{text}</Text>
                </>
            )}
        </Pressable>
    );
};

const defaultStyles = StyleSheet.create({
    buttonText: {
        fontSize: 17,
        letterSpacing: 0,
        lineHeight: 22,
        fontWeight: "700",
        fontFamily: "SF Pro Text",
        color: colors.primary,
        textAlign: "left",
    },
    button: {
        borderRadius: 10,
        backgroundColor: colors.background,
        width: "90%",
        height: 56,
        overflow: "hidden",
        paddingHorizontal: 14,
        paddingVertical: 6,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});
