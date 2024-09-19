import { Tabs } from "expo-router";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../constants/colors.constants";
import ShipmentIcon from "../../assets/vectors/shipment-icon.svg";
import WalletIcon from "../../assets/vectors/wallet-icon.svg";
import ScanIcon from "../../assets/vectors/scan-icon.svg";
import ProfileIcon from "../../assets/vectors/profile-icon.svg";
import { Text } from "react-native";

export default function mainNav() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
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
                        return (
                            <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>
                                {children}
                            </Text>
                        );
                    },
                }}
                name="Shipments"
            />
            <Tabs.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        switch (focused) {
                            case true:
                                return <ScanIcon size={hp("4%")} color={colors.primary} />;
                            default:
                                return <ScanIcon size={hp("3%")} color={colors.bluredTabIcon} />;
                        }
                    },
                    tabBarLabel: ({ focused, children }) => {
                        return (
                            <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>
                                {children}
                            </Text>
                        );
                    },
                }}
                 name="Scan" />
            <Tabs.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        switch (focused) {
                            case true:
                                return <WalletIcon size={hp("4%")} color={colors.primary} />;
                            default:
                                return <WalletIcon size={hp("3%")} color={colors.bluredTabIcon} />;
                        }
                    },
                    tabBarLabel: ({ focused, children }) => {
                        return (
                            <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>
                                {children}
                            </Text>
                        );
                    },
                }}
            
             name="Wallet" />
            <Tabs.Screen options={{
                    tabBarIcon: ({ focused }) => {
                        switch (focused) {
                            case true:
                                return <ProfileIcon size={hp("4%")} color={colors.primary} />;
                            default:
                                return <ProfileIcon size={hp("3%")} color={colors.bluredTabIcon} />;
                        }
                    },
                    tabBarLabel: ({ focused, children }) => {
                        return (
                            <Text style={{ fontSize: hp("1.5%"), color: focused ? colors.primary : colors.bluredTabIcon }}>
                                {children}
                            </Text>
                        );
                    },
                }} name="Profile" />
        </Tabs>
    );
}
