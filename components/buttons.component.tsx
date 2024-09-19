import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import colors from "../constants/colors.constants";
import { ReactNode } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

type props = {
    text: string;
    onPress?: (e: GestureResponderEvent) => void;
    styles?: StyleProp<ViewStyle>;
    leftIcon?: ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    textStyles?: StyleProp<TextStyle>;
};

export const LargeButton = ({ text, onPress, styles, leftIcon, isDisabled, isLoading, textStyles }: props) => {
    return (
        <Pressable onPress={isDisabled ? undefined : onPress} style={[defaultStyles.button, styles, isDisabled && { backgroundColor: colors.disabled }]}>
            {isLoading ? (
                <ActivityIndicator size={"small"} />
            ) : (
                <>
                    {leftIcon && <View style={{ marginLeft: 12 }}>{leftIcon}</View>}
                    <Text style={[defaultStyles.buttonText, textStyles, isDisabled && { color: colors.disabledText }]}>{text}</Text>
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
        width: wp("90%"),
        height: 56,
        overflow: "hidden",
        paddingHorizontal: 14,
        paddingVertical: 6,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
});
