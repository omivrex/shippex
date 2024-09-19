import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
const startupAnimation = require("../assets/spash-anim.json");

export default function App() {
    const [showLoginFrame, setshowLoginFrame] = useState<boolean>(false);
    return (
        <SafeAreaView>
            <LottieView
                style={{ height: hp("100%"), width: wp("100%"), position: "absolute" }}
                source={startupAnimation}
                autoPlay
                loop={false}
                resizeMode="cover"
                onAnimationFinish={() => setshowLoginFrame(true)}
            />
            {showLoginFrame && (
                <View
                    style={{
                        height: hp("100%"),
                        width: wp("100%"),
                        position: "absolute",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingVertical: "10%",
                    }}
                >
                    <View />
                    <Image source={require("../assets/images/brand_name.png")} />
                    <Pressable onPress={() => router.push("login")} style={styles.button}>
                        <Text style={styles.fixText}>Login</Text>
                    </Pressable>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fixText: {
        fontSize: 17,
        letterSpacing: 0,
        lineHeight: 22,
        fontWeight: "700",
        fontFamily: "SF Pro Text",
        color: "#2f50c1",
        textAlign: "left",
    },
    button: {
        borderRadius: 10,
        backgroundColor: "#fff",
        // flex: 1,
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
