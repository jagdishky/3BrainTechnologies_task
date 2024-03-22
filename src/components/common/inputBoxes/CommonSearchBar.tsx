import React, { LegacyRef } from 'react';
import { Image, KeyboardTypeOptions, ReturnKeyTypeOptions, StyleProp, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import { Images } from '../../../utility/imagePaths';
import { APP_PADDING_HORIZONTAL } from '../../../styles/commonStyles';


interface CommonSearchBarProps {
    placeHolder: string | undefined,
    onChangeText: (value: string) => void,
    onSubmitEditing?: (value: any) => void,
    refValue?: LegacyRef<TextInput>,
    keyboardType?: KeyboardTypeOptions,
    returnKeyType?: ReturnKeyTypeOptions,
    secureTextEntry?: boolean,
    editable?: boolean,
    value: string,
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined,
    maxLength?: number,
    style?: StyleProp<TextStyle>,
    onFocus?: () => void
}
const CommonSearchBar = ({
    placeHolder,
    onChangeText,
    onSubmitEditing,
    refValue,
    keyboardType,
    returnKeyType,
    secureTextEntry,
    editable,
    value,
    autoCapitalize,
    maxLength,
    style,
    onFocus
}: CommonSearchBarProps) => {

    return (
        <View style={[styles.SearchBarView, style,]}>
            <View style={styles.inputView} >
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={colors.grey400}
                    style={[styles.textInputStyle, {}]}
                    ref={refValue}
                    onSubmitEditing={onSubmitEditing ? (value) => onSubmitEditing(value) : () => { }}
                    onChangeText={value => onChangeText(value)}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    secureTextEntry={secureTextEntry}
                    editable={editable}
                    value={value}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onFocus={onFocus ? () => onFocus() : () => { }}
                />
            </View>
            <View style={styles.iconView} >
                <Image
                    source={Images.IMG_SEARCH_ICON}
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    SearchBarView: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        height: spacing.HEIGHT_56,
        backgroundColor: colors.white,
        marginHorizontal: APP_PADDING_HORIZONTAL,
        borderRadius: spacing.RADIUS_12,
        paddingHorizontal: spacing.PADDING_12,
        borderWidth: spacing.WIDTH_1,
        borderColor: colors.grey300
    },
    inputView: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: spacing.MARGIN_8
    },
    textInputStyle: {
        color: colors.black,
        flex: 1,
        fontFamily: fontNames.FONT_FAMILY_REGULAR,
        fontSize: textScale(13),
        justifyContent: "center",
        alignItems: "center",
    },
    iconView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CommonSearchBar;