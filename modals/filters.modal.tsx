import { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Button, Text } from "react-native-paper";
import colors from "../constants/colors.constants";
import { useBottomSheetContext } from "../contexts/bottomsheet.context";

const FilterModal = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const bottomsheetContext = useBottomSheetContext();

    return (
        <View style={styles.container}>
            <BottomSheet snapPoints={["35%"]} onChange={(index) => index === 1 && bottomsheetContext?.setIsBottomSheetOpen(false)} ref={bottomSheetRef}>
                <View style={styles.contentContainer}>
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: "5%",
                            borderColor: "#eae7f2",
                            borderBottomWidth: 2,
                            height: hp("4%"),
                        }}
                    >
                        <Pressable onPress={() => bottomsheetContext?.setIsBottomSheetOpen(false)}>
                            <Text style={{ fontFamily: "Inter-Medium", fontWeight: "500", fontSize: hp("1.6%"), color: colors.primary }}>Close</Text>
                        </Pressable>
                        <Text style={{ fontFamily: "SF Pro", fontWeight: "600", fontSize: hp("1.8%") }}>Filters</Text>
                        <Pressable onPress={() => bottomsheetContext?.setIsBottomSheetOpen(false)}>
                            <Text style={{ fontFamily: "Inter-Medium", fontWeight: "500", fontSize: hp("1.6%"), color: colors.primary }}>Done</Text>
                        </Pressable>
                    </View>
                    <View>
                        <View style={{ width: wp("100%"), marginVertical: "3%", paddingHorizontal: "5%" }}>
                            <Text
                                style={{
                                    fontWeight: "500",
                                    fontFamily: "Inter-Medium",
                                    color: "#58536e",
                                    fontSize: hp("1.6%"),
                                    textAlign: "left",
                                }}
                            >
                                SHIPMENT STATUS
                            </Text>
                        </View>
                        <View style={{ height: hp("30%"), flexDirection: "row", flexWrap: "wrap", gap: 10, paddingHorizontal: "5%", marginVertical: "3%" }}>
                            <Button
                                style={{ borderRadius: 10 }}
                                labelStyle={{ fontSize: hp("1.6%"), fontFamily: "Inter-Regular" }}
                                buttonColor={colors.grey2}
                                textColor={colors.grey}
                                mode="contained"
                                onPress={() => console.log("clicked")}
                            >
                                Received
                            </Button>
                            <Button
                                style={{ borderRadius: 10 }}
                                labelStyle={{ fontSize: hp("1.6%"), fontFamily: "Inter-Regular" }}
                                buttonColor={colors.grey2}
                                textColor={colors.grey}
                                mode="contained"
                                onPress={() => console.log("clicked")}
                            >
                                Putaway
                            </Button>
                            <Button
                                style={{ borderRadius: 10 }}
                                labelStyle={{ fontSize: hp("1.6%"), fontFamily: "Inter-Regular" }}
                                buttonColor={colors.grey2}
                                textColor={colors.grey}
                                mode="contained"
                                onPress={() => console.log("clicked")}
                            >
                                Delivered
                            </Button>
                            <Button
                                style={{ borderRadius: 10 }}
                                labelStyle={{ fontSize: hp("1.6%"), fontFamily: "Inter-Regular" }}
                                buttonColor={colors.grey2}
                                textColor={colors.grey}
                                mode="contained"
                                onPress={() => console.log("clicked")}
                            >
                                Canceled
                            </Button>
                            <Button
                                style={{ borderRadius: 10 }}
                                labelStyle={{ fontSize: hp("1.6%"), fontFamily: "Inter-Regular" }}
                                buttonColor={colors.grey2}
                                textColor={colors.grey}
                                mode="contained"
                                onPress={() => console.log("clicked")}
                            >
                                Rejected
                            </Button>
                            <Button
                                style={{ borderRadius: 10 }}
                                labelStyle={{ fontSize: hp("1.6%"), fontFamily: "Inter-Regular" }}
                                buttonColor={colors.grey2}
                                textColor={colors.grey}
                                mode="contained"
                                onPress={() => console.log("clicked")}
                            >
                                Lost
                            </Button>
                            <Button
                                style={{ borderRadius: 10 }}
                                labelStyle={{ fontSize: hp("1.6%"), fontFamily: "Inter-Regular" }}
                                buttonColor={colors.grey2}
                                textColor={colors.grey}
                                mode="contained"
                                onPress={() => console.log("clicked")}
                            >
                                On Hold
                            </Button>
                        </View>
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp("100%"),
        height: hp("100%"),
        padding: 24,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
    },
});

export default FilterModal;
