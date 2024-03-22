import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import commonStyle, { APP_PADDING_HORIZONTAL } from '../../../styles/commonStyles';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import { openDrawer } from '../../../utility/commonFunctions';
import { Images } from '../../../utility/imagePaths';
import RegularText from '../RegularText';

interface HomeHeaderProps {

}

const HomeHeader = ({ }: HomeHeaderProps) => {

    // useFocusEffect(
    //     React.useCallback(() => {
    //         changeStatusBarColor(colors.white, 'dark-content')
    //     }, [])
    // );

    function onPressDrawer() {

    }


    return (
        <View style={styles.mainContainer} >
            <View style={{ flex: 1, ...commonStyle.flexDirectionRow, gap: spacing.MARGIN_20 }} >
                <TouchableOpacity onPress={() => openDrawer()} >
                    <Image source={Images.IMG_MENU} />
                </TouchableOpacity>
                <RegularText style={styles.appName} >{'Home'}</RegularText>
            </View>
            <TouchableOpacity onPress={() => { }} >
                <Image source={Images.IMG_NOTIFICATION_BELL} />
                <View style={styles.notificationCount} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} >
                <Image source={Images.IMG_BASKET} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // flexDirection: 'row',
        // alignItems: "center",
        ...commonStyle.flexDirectionRow,
        paddingHorizontal: APP_PADDING_HORIZONTAL,
        paddingVertical : spacing.PADDING_20,
        backgroundColor: colors.white,
        gap: spacing.MARGIN_20,
    },
    appName: {
        fontSize: textScale(15),
        fontFamily: fontNames.FONT_FAMILY_BOLD,
        color: colors.grey600
    },
    notificationCount:{
        width : spacing.WIDTH_6,
        height: spacing.WIDTH_6,
        borderRadius : spacing.RADIUS_90,
        backgroundColor  :colors.red400,
        position : "absolute",
        right: 0,
        top: -spacing.WIDTH_2
    },
})

export default HomeHeader;