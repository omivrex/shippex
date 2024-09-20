import { Tabs } from "expo-router";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../constants/colors.constants";
import ShipmentIcon from "../../assets/vectors/shipment-icon.svg";
import WalletIcon from "../../assets/vectors/wallet-icon.svg";
import ScanIcon from "../../assets/vectors/scan-icon.svg";
import ProfileIcon from "../../assets/vectors/profile-icon.svg";
import { Text } from "react-native";
import { BottomSheetModalProvider, useBottomSheet } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import BottomSheetContext from "../../contexts/bottomsheet.context";

export default function mainNav() {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    return (
        <BottomSheetContext.Provider value={{ isBottomSheetOpen, setIsBottomSheetOpen }}>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
                    <Tabs
                        screenOptions={{
                            headerShown: false,
                            tabBarLabelStyle: {
                                fontSize: hp("1.5%"),
                            },
                            tabBarIconStyle: {
                                marginHorizontal: wp("7%"),
                            },
                            tabBarStyle: {
                                height: hp("10%"),
                                display: isBottomSheetOpen ? "none" : "flex",
                            },
                            tabBarLabelPosition: "below-icon",
                            tabBarHideOnKeyboard: true,
                        }}
                    >
                        <Tabs.Screen
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    switch (focused) {
                                        case true:
                                            return <ShipmentIcon size={hp("4%")} color={colors.primary} />;
                                        default:
                                            return <ShipmentIcon size={hp("3%")} color={colors.bluredTabIcon} />;
                                    }
                                },
                                tabBarLabel: ({ focused, children }) => {
                                    return <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>{children}</Text>;
                                },
                            }}
                            name="Shipments"
                        />
                        <Tabs.Screen
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    switch (focused) {
                                        case true:
                                            return <ScanIcon size={hp("4%")} color={colors.primary} />;
                                        default:
                                            return <ScanIcon size={hp("3%")} color={colors.bluredTabIcon} />;
                                    }
                                },
                                tabBarLabel: ({ focused, children }) => {
                                    return <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>{children}</Text>;
                                },
                            }}
                            name="Scan"
                        />
                        <Tabs.Screen
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    switch (focused) {
                                        case true:
                                            return <WalletIcon size={hp("4%")} color={colors.primary} />;
                                        default:
                                            return <WalletIcon size={hp("3%")} color={colors.bluredTabIcon} />;
                                    }
                                },
                                tabBarLabel: ({ focused, children }) => {
                                    return <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>{children}</Text>;
                                },
                            }}
                            name="Wallet"
                        />
                        <Tabs.Screen
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    switch (focused) {
                                        case true:
                                            return <ProfileIcon size={hp("4%")} color={colors.primary} />;
                                        default:
                                            return <ProfileIcon size={hp("3%")} color={colors.bluredTabIcon} />;
                                    }
                                },
                                tabBarLabel: ({ focused, children }) => {
                                    return <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>{children}</Text>;
                                },
                            }}
                            name="Profile"
                        />
                    </Tabs>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </BottomSheetContext.Provider>
    );
}
