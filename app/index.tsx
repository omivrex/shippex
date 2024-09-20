import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { Video, AVPlaybackStatus, ResizeMode } from "expo-av";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import * as SplashScreen from "expo-splash-screen";
import { LargeButton } from "../components/buttons.component";
import { useFonts } from "expo-font";

// const startupAnimation = require("../assets/animation/spash-anim.json");
const startupAnimation = require("../assets/animation/spash-anim.mp4");

SplashScreen.preventAutoHideAsync();
export default function App() {
    const [loaded, error] = useFonts({
        "SF Pro": require("../assets/fonts/SFPRODISPLAYREGULAR.otf"),
        "SF Pro Text": require("../assets/fonts/sf-pro-text-regular.ttf"),
        "Inter-Medium": require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
        "Inter-Regular": require("../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    });
    const [showLoginFrame, setShowLoginFrame] = useState<boolean>(false);

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaView>
            {/* <LottieView
                style={styles.animation}
                source={startupAnimation}
                autoPlay
                loop={false}
                resizeMode="cover"
                onAnimationFinish={() => setShowLoginFrame(true)}
            /> */}
            <Video
                style={styles.animation}
                onPlaybackStatusUpdate={(status) => status.isLoaded && status.didJustFinish && setShowLoginFrame(true)}
                shouldPlay
                isLooping={false}
                source={startupAnimation}
                useNativeControls={false}
                resizeMode={ResizeMode.COVER}
            />
            {showLoginFrame && (
                <View style={styles.comntainer}>
                    <View />
                    <Image source={require("../assets/images/brand_name.png")} />
                    <LargeButton onPress={() => router.push("login")} text="Login" />
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    comntainer: {
        flex: 1,
        height: hp("100%"),
        width: wp("100%"),
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: "10%",
    },

    animation: {
        height: hp("100%"),
        width: wp("100%"),
        position: "absolute",
        flex: 1,
    },
});
