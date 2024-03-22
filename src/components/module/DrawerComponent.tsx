import React, { useState } from "react";
import { FlatList, Image, ImageStyle, StyleProp, StyleSheet, TouchableOpacity, View } from "react-native";
import commonStyle, { APP_PADDING_HORIZONTAL } from "../../styles/commonStyles";
import { Images } from "../../utility/imagePaths";
import { spacing } from "../../styles/spacing";
import RegularText from "../common/RegularText";
import { textScale } from "../../styles/responsiveStyles";
import colors from "../../utility/colors";
import { fontNames } from "../../styles/typography";

interface MenuItemProps {
    data: Record<string, any>
    isSelected?: boolean,
    onPressItem: (data: Record<string, any>) => void
}
const MenuItem = ({ data, isSelected, onPressItem }: MenuItemProps) => {
    return (
        <TouchableOpacity onPress={() => onPressItem(data)} style={[styles.menuItemContainer, isSelected && styles.selectedMenuITemContainer]} >
            <Image source={data.icon} style={isSelected && { tintColor: colors.white }} />
            <RegularText style={[styles.menuItemContainer_title, isSelected && { color: colors.white }]} >{data.title}</RegularText>
        </TouchableOpacity>
    )
}

const DrawerComponent = () => {

    const MAIN_MENU_ITEMS = [
        {
            title: 'Home',
            icon: Images.IMG_FOLDED_MAP,
        },
        {
            title: 'Example',
            icon: Images.IMG_FOLDED_MAP,
        },
        {
            title: 'Components',
            icon: Images.IMG_FOLDED_MAP,
        },
        {
            title: 'Article',
            icon: Images.IMG_FOLDED_MAP,
        },
        {
            title: 'Profile',
            icon: Images.IMG_FOLDED_MAP,
        },
        {
            title: 'Account',
            icon: Images.IMG_FOLDED_MAP,
        },
    ]
    const DOCUMEMTATION_MENU_ITEMS = [
        {
            title: 'Getting Started',
            icon: Images.IMG_SPACESHIP,
        },
        {
            title: 'Logout',
            icon: Images.IMG_SPACESHIP,
        },
    ]

    const [selectedMenu, setSelectedMenu] = useState(MAIN_MENU_ITEMS[0].title)

    function onPressMenuItem(data: Record<string, any>) {
        setSelectedMenu(data?.title)
    }
    
    return (
        <View style={styles.mainContainer} >
            <View style={styles.headerContainer} >
                <Image source={Images.IMG_APP_LOGO_THEME} />
                <Image source={Images.IMG_MENU} />
            </View>
            <FlatList
                data={MAIN_MENU_ITEMS}
                renderItem={({ item, index }) => <MenuItem data={item} isSelected={selectedMenu == item?.title} onPressItem={onPressMenuItem} />}
            />
            <View style={commonStyle.seprator} />
            <RegularText style={styles.title} >Documentation</RegularText>
            <FlatList
                data={DOCUMEMTATION_MENU_ITEMS}
                renderItem={({ item, index }) => <MenuItem data={item} onPressItem={onPressMenuItem} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: APP_PADDING_HORIZONTAL
    },
    headerContainer: {
        ...commonStyle.flexDirectionRow,
        justifyContent: "space-between",
        paddingVertical: spacing.PADDING_20
    },
    title: {
        fontSize: textScale(13),
        color: colors.grey600,
        textTransform: 'uppercase',
        marginLeft: spacing.MARGIN_6,
        marginVertical: spacing.MARGIN_12
    },
    menuItemContainer: {
        ...commonStyle.flexDirectionRow,
        gap: spacing.MARGIN_12,
        paddingVertical: spacing.PADDING_12,
        borderRadius: spacing.RADIUS_6
    },
    selectedMenuITemContainer: {
        backgroundColor: colors.theme,
        paddingHorizontal: APP_PADDING_HORIZONTAL
    },
    menuItemContainer_title: {
        fontSize: textScale(13),
        color: colors.grey600
    },
})

export default DrawerComponent