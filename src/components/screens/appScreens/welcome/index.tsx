import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { textScale, verticalScale } from '../../../../styles/responsiveStyles';
import { spacing } from '../../../../styles/spacing';
import { fontNames } from '../../../../styles/typography';
import colors from '../../../../utility/colors';
import { changeStatusBarColor, navigate } from '../../../../utility/commonFunctions';
import { SCREEN_DRAWER } from '../../../../utility/constants';
import { Images } from '../../../../utility/imagePaths';
import RegularText from '../../../common/RegularText';
import CommonButton from '../../../common/buttons/CommonButton';

const WelcomeScreen = ({ }) => {

    useFocusEffect(
        React.useCallback(() => {
            changeStatusBarColor(colors.white, 'dark-content')
        }, [])
    );

    function navigateToHome() {
        navigate(SCREEN_DRAWER)
    }

    return (
        <View style={styles.mainContainer} >
            <Image source={Images.IMG_WELCOME_SCREEN_BACKGROUND} style={styles.backgroundImg} />
            <View style={styles.contentContainer} >
                <Image source={Images.IMG_APP_LOGO_WHITE} style={styles.appLogo} />
                <View style={styles.titleAndDescContainer} >
                    <RegularText style={styles.title}  >Design System</RegularText >
                    <RegularText style={styles.description}  >Fully coded React Native components.</RegularText>
                </View>
                <CommonButton
                    title='Get Started'
                    backgroundColor={colors.white}
                    textStyle={{ color: colors.black }}
                    onPressButton={navigateToHome}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImg: {
        width: spacing.FULL_WIDTH,
        height: spacing.FULL_HEIGHT,
        position: 'absolute'
    },
    contentContainer: {
        paddingHorizontal: spacing.PADDING_30,
        paddingVertical: spacing.PADDING_44,
        flex: 1
    },
    appLogo: {
        marginVertical: '35%'
    },
    titleAndDescContainer: {
        flex: 1
    },
    title: {
        color: colors.white,
        fontSize: textScale(50),
        fontFamily: fontNames.FONT_FAMILY_BOLD,
        lineHeight: verticalScale(70)
    },
    description: {
        color: colors.white,
        fontSize: textScale(14),
        marginTop: '6%'
    },
})

export default WelcomeScreen;