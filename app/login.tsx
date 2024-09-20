import { Image, Pressable, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors.constants";
import { router } from "expo-router";
import { LargeButton } from "../components/buttons.component";
import { CustomTextInput } from "../components/inputs.component";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../apis/auth.apis";
import { Text } from "react-native-paper";

function Login() {
    const [url, setUrl] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const { isPending, mutate } = useMutation({
        mutationFn: () => login("https://" + url.trim().toLowerCase(), email.toLowerCase().trim(), password),
        onSuccess: (data) => {
            data && router.push("Shipments");
        },
        onError: (error) => setError(error.message),
    });

    return (
        <View style={styles.container}>
            <Pressable onPress={router.back} style={{ flexDirection: "row", gap: 2.5, alignItems: "center" }}>
                <AntDesign name="left" size={24} color={colors.blue1} />
                <Text style={styles.navButnText}>Cancel</Text>
            </Pressable>
            <View style={styles.body}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.description}>Please enter your First, Last name and your phone number in order to register</Text>
                <View style={styles.inputContainer}>
                    <CustomTextInput onChange={(value) => setUrl(value)} textColor={colors.primary} leftText={"https://"} label="URL" keyboardType="url" />
                    <CustomTextInput keyboardType="email-address" onChange={(value) => setEmail(value)} textColor={colors.primary} label="Username / Email" />
                    <CustomTextInput onChange={(value) => setPassword(value)} textColor={colors.primary} label="Password" secureTextEntry />
                    {error && (
                        <View style={styles.errorContainer}>
                            <AntDesign name="exclamationcircleo" size={hp("1.7%")} color={colors.error} />
                            <Text style={{ color: colors.error }}>{error}</Text>
                        </View>
                    )}
                </View>

                <LargeButton
                    isDisabled={!(url && email && password)}
                    textStyles={{ color: colors.background }}
                    styles={{ width: "100%", backgroundColor: colors.primary }}
                    onPress={() => mutate()}
                    text="Login"
                    isLoading={isPending}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: hp("100%"),
        width: wp("100%"),
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: "0.5%",
        paddingVertical: "5%",
        backgroundColor: colors.background,
    },

    navButnText: {
        color: colors.blue1,
        fontSize: 17,
        letterSpacing: 0,
        lineHeight: 22,
        fontFamily: "SF Pro",
    },

    body: {
        height: "97%",
        width: "100%",
        paddingHorizontal: "7%",
        paddingVertical: "5%",
        justifyContent: "space-between",
    },

    title: {
        fontSize: 34,
        lineHeight: 41,
        fontWeight: "600",
        fontFamily: "SF Pro",
        color: "#000",
        marginVertical: "3%",
    },

    description: {
        fontSize: 17,
        letterSpacing: 0,
        lineHeight: 24,
        fontFamily: "SF Pro Text",
        color: colors.textColor1,
        alignItems: "center",
    },

    inputContainer: {
        marginTop: "10%",
        width: "100%",
        justifyContent: "flex-start",
        gap: 30,
        flex: 1,
    },

    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
});

export default Login;
