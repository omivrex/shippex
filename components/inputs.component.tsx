import { TextInput } from "react-native-paper";
import colors from "../constants/colors.constants";
import { ReactNode, useState } from "react";
import { KeyboardTypeOptions, Text, View } from "react-native";
import SearchIcon from "../assets/vectors/search-1.svg";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

type props = {
    label?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    secureTextEntry?: boolean;
    textColor?: string;
    
    leftText?: string;
    rightText?: string;
    placeholder?: string;
    maxLength?: number;
    editable?: boolean;
    defaultValue?: string;
    placeholderTextColor?: string;
    multiLine?: boolean;
    keyboardType?: KeyboardTypeOptions;
    onChange?: (text: string) => void;
    onFocus?: () => void;
};

export const CustomTextInput = ({
    label,
    leftIcon,
    rightIcon,
    leftText,
    rightText,
    secureTextEntry,
    textColor,
    placeholder,
    maxLength,
    editable,
    defaultValue,
    placeholderTextColor,
    multiLine,
    keyboardType,
    onChange,
    onFocus,
}: props) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <TextInput
            right={rightIcon}
            left={leftText && <TextInput.Affix text={leftText}/>}
            style={{
                borderRadius: 10,
                borderColor: colors.primary,
                backgroundColor: colors.inputBackground,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderWidth: isFocused ? 2 : 0,
            }}
            defaultValue={defaultValue}
            onFocus={() => {
                setIsFocused(true);
                onFocus && onFocus();
            }}
            onBlur={() => setIsFocused(false)}
            underlineStyle={{ display: "none" }}
            secureTextEntry={secureTextEntry}
            textColor={textColor}
            label={label}
            placeholder={placeholder}
            editable={editable}
            placeholderTextColor={placeholderTextColor}
            multiline={multiLine}
            keyboardType={keyboardType}
            onChangeText={onChange}
            maxLength={maxLength}
        />
    );
};

export const CustomSearchInput = ({
    label,
    rightIcon,
    leftIcon,
    secureTextEntry,
    textColor,
    placeholder,
    maxLength,
    editable,
    defaultValue,
    placeholderTextColor,
    multiLine,
    keyboardType,
    onChange,
    onFocus,
}: props) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <TextInput
            right={rightIcon}
            left={<TextInput.Icon color={(isTextInputFocused)=> isTextInputFocused? colors.primary:undefined} icon={SearchIcon}/>} 
            placeholder={placeholder||"Search"}
            style={{
                borderRadius: 10,
                borderColor: colors.primary,
                backgroundColor: colors.inputBackground,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderWidth: isFocused ? 2 : 0,
                height: 46
            }}
            defaultValue={defaultValue}
            onFocus={() => {
                setIsFocused(true);
                onFocus && onFocus();
            }}
            onBlur={() => setIsFocused(false)}
            underlineStyle={{ display: "none" }}
            secureTextEntry={secureTextEntry}
            textColor={textColor||colors.primary}
            label={label}
            editable={editable}
            placeholderTextColor={placeholderTextColor}
            multiline={multiLine}
            keyboardType={keyboardType}
            onChangeText={onChange}
            maxLength={maxLength}
        />
    );
};
