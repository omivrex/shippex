import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, Image, RefreshControl, TextComponent, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors.constants";
import profilePhoto from "../../assets/images/man.jpg";
import Logo from "../../assets/vectors/logo-1.svg";
import FilterIcon from "../../assets/vectors/filter.svg";
import ScanIcon from "../../assets/vectors/scan-icon2.svg";

import NotificationIcon from "../../assets/vectors/bell-02.svg";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Checkbox, Text } from "react-native-paper";
import { ShortButton } from "../../components/buttons.component";
import { CustomSearchInput, CustomTextInput } from "../../components/inputs.component";
import FilterModal from "../../modals/filters.modal";
import { useBottomSheetContext } from "../../contexts/bottomsheet.context";
import { useQuery } from "@tanstack/react-query";
import { fetchShipmentListStatus } from "../../apis/shipment.apis";
import { AuthData } from "../../types/auth.types";
import { getCachedAuthData } from "../../utilities/cache.utility";
import { useFocusEffect } from "expo-router";
import ShipmentComponent from "../../components/shipment.component";

function Shipments() {
    const bottomsheetContext = useBottomSheetContext();
    const userData = useRef<AuthData>();

    useFocusEffect(
        useCallback(() => {
            getCachedAuthData().then((data) => (userData.current = data));
        }, [])
    );

    const { data, refetch, isLoading } = useQuery({
        queryKey: ["get-shipments"],
        queryFn: () => fetchShipmentListStatus(),
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, height: hp("100%"), width: wp("100%") }}>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingHorizontal: "5%" }}>
                    <Image source={profilePhoto} style={{ width: hp("5%"), height: hp("5%"), borderRadius: 100, overflow: "hidden" }} />
                    <Logo />
                    <NotificationIcon />
                </View>
                <View style={{ paddingHorizontal: "5%", marginVertical: "2.5%" }}>
                    <Text style={{ color: "rgba(0, 0, 0, 0.6)", fontFamily: "SF Pro" }} variant="titleSmall">
                        Hello,
                    </Text>
                    <Text style={{ fontFamily: "SF Pro", fontWeight: "600" }} variant="headlineMedium">
                        {userData.current?.full_name}
                    </Text>
                </View>
                <View style={{ width: "100%", paddingHorizontal: "5%", marginVertical: "2.5%" }}>
                    <CustomSearchInput />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingHorizontal: "5%" }}>
                    <ShortButton
                        styles={{ backgroundColor: colors.grey2, width: wp("43%") }}
                        textStyles={{ color: colors.grey, fontSize: hp("1.6%"), lineHeight: 22, fontFamily: "Inter-Regular" }}
                        leftIcon={<FilterIcon color={colors.grey} />}
                        text="Filters"
                        onPress={() => bottomsheetContext?.setIsBottomSheetOpen(true)}
                    />
                    <ShortButton
                        styles={{ backgroundColor: colors.primary, width: wp("43%") }}
                        textStyles={{ color: colors.background, fontSize: hp("1.6%"), lineHeight: 22, fontFamily: "Inter-Regular" }}
                        leftIcon={<ScanIcon color={colors.background} />}
                        text="Add Scan"
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        paddingHorizontal: "5%",
                        marginVertical: "2.5%",
                    }}
                >
                    <Text variant="headlineSmall" style={{ fontFamily: "SF Pro", fontWeight: "600", fontSize: hp("2.2%") }}>
                        Shipments
                    </Text>
                    <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                        <Checkbox.Android color={colors.primary} uncheckedColor="#d0d5dd" status="unchecked" />
                        <Text variant="headlineSmall" style={{ fontFamily: "SF Pro", fontSize: hp("1.8%"), color: colors.primary }}>
                            Mark All
                        </Text>
                    </View>
                </View>
            </View>
            <FlatList
                refreshControl={<RefreshControl refreshing={false} progressViewOffset={hp("2%")} onRefresh={refetch} />}
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => <ShipmentComponent />}
            />
            {bottomsheetContext?.isBottomSheetOpen && <FilterModal />}
        </SafeAreaView>
    );
}

export default Shipments;
