import { useState } from "react";
import { Button, Checkbox, List, Text } from "react-native-paper";
import BoxIcon from "../assets/vectors/box-1.svg";
import PhoneIcon from "../assets/vectors/phone.svg";
import WhatsappIcon from "../assets/vectors/Whatsapp.svg";
import RightArrow from "../assets/vectors/arrow-right.svg";
import ExpandArrow from "../assets/vectors/arrow-expand-04.svg";
import { View } from "react-native";
import colors from "../constants/colors.constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const ShipmentComponent = () => {
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Accordion
            style={{ width: wp("90%"), alignSelf: "center", backgroundColor: colors.grey2, marginVertical: "2.5%", borderRadius: 10 }}
            title={
                <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", gap: 5, alignItems: "center" }}>
                    <BoxIcon />
                    <View>
                        <Text>AWB</Text>
                        <Text style={{ fontSize: hp("2%"), fontWeight: "600" }}>41785691423</Text>
                        <Text style={{ color: colors.grey }}>
                            Cairo <RightArrow height={hp("1.3%")} /> Alexandria
                        </Text>
                    </View>
                    <View style={{ backgroundColor: colors.lightBlue, borderRadius: 10, justifyContent: "center", padding: "3%", height: hp("4%") }}>
                        <Text style={{ color: colors.primary, fontSize: hp("1.5%") }}>Delivered</Text>
                    </View>
                </View>
            }
            left={(props) => <Checkbox.Android color={colors.primary} uncheckedColor="#d0d5dd" status="unchecked" />}
            right={() => (
                <View
                    style={{
                        backgroundColor: expanded ? "#6E91EC" : colors.background,
                        borderWidth: 2,
                        borderColor: expanded ? "#D9E6FD" : colors.background,
                        height: hp("3%"),
                        width: hp("3%"),
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                        left: "50%",
                    }}
                >
                    <ExpandArrow />
                </View>
            )}
            expanded={expanded}
            onPress={handlePress}
        >
            <List.Item
                style={{ width: "90%", backgroundColor: "#F4F2F8", alignSelf: "center" }}
                title=""
                left={() => <></>}
                description={
                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                            justifyContent: "space-between",
                            gap: 5,
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <View>
                            <Text style={{ fontSize: hp("1.1%"), color: colors.primary }}>Origin</Text>
                            <Text>Cairo</Text>
                            <Text style={{ fontSize: hp("1.6%"), color: colors.grey }}>Dokki, 22 Nile St.</Text>
                        </View>
                        <RightArrow />
                        <View>
                            <Text style={{ fontSize: hp("1.1%"), color: colors.primary }}>Destination</Text>
                            <Text>Alexandria</Text>
                            <Text style={{ fontSize: hp("1.6%"), color: colors.grey }}>Smoha, 22 max St.</Text>
                        </View>
                    </View>
                }
            />
            <List.Item
                style={{ width: "90%", backgroundColor: "#F4F2F8", alignSelf: "center" }}
                title=""
                left={() => <></>}
                description={
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: 10, width: "100%" }}>
                        <Button buttonColor="#6E91EC" icon={PhoneIcon} mode="contained">
                            Call
                        </Button>
                        <Button buttonColor="#25D366" icon={WhatsappIcon} mode="contained">
                            WhatsApp
                        </Button>
                    </View>
                }
            />
        </List.Accordion>
    );
};

export default ShipmentComponent;
