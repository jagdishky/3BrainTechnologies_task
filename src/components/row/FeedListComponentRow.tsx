import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import RegularText from "../common/RegularText";
import { spacing } from "../../styles/spacing";
import colors from "../../utility/colors";
import commonStyle, { APP_PADDING_HORIZONTAL } from "../../styles/commonStyles";
import { textScale } from "../../styles/responsiveStyles";
import { fontNames } from "../../styles/typography";
import { boxShadow, boxShadowLess } from "../../styles/Mixins";
import { FEED_TYPE } from "../../utility/constants";

interface FeedListComponentRowProps {
    index?: number
    item: Record<string, any>
    isFullWidthCard?: boolean
    feedType?: String
}


const CARD_WIDTH = (spacing.FULL_SCREEN_WIDTH - (APP_PADDING_HORIZONTAL * 2) - spacing.MARGIN_12) / 2
const FeedListComponentRow = ({ item, index, isFullWidthCard, feedType }: FeedListComponentRowProps) => {
    return (
        <View style={[
            styles.mainContainer,
            isFullWidthCard && { width: spacing.FULL_WIDTH - (APP_PADDING_HORIZONTAL * 2), marginTop: spacing.MARGIN_12 },
            feedType == FEED_TYPE[0] && styles.horizontalCardMaincontainer
        ]} >
            <Image
                source={item?.img}
                style={[
                    styles.img,
                    isFullWidthCard && { width: spacing.FULL_WIDTH - (APP_PADDING_HORIZONTAL * 2) },
                    feedType == FEED_TYPE[0] && { width: CARD_WIDTH , height : '100%',},
                    feedType == FEED_TYPE[1] && { height : spacing.HEIGHT_140},
                ]}
                resizeMode="cover"
            />
            <View style={styles.containerContainer} >
                <RegularText numberOfLines={2} style={styles.title} >{item.title}</RegularText>
                <TouchableOpacity>
                    <RegularText style={styles.ViewArticleText} >View artical</RegularText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.white,
        width: CARD_WIDTH,
        borderRadius: spacing.RADIUS_12,
        overflow: 'hidden',
        ...boxShadowLess(),
        marginLeft: spacing.MARGIN_14,
        marginBottom: spacing.MARGIN_12,
    },
    horizontalCardMaincontainer: {
        ...commonStyle.flexDirectionRow,
        flex: 1,
        minHeight : spacing.HEIGHT_128
    },
    img: {
        width: CARD_WIDTH,
        height: spacing.HEIGHT_128,
        backgroundColor: colors.grey400
    },
    containerContainer: {
        flex: 1,
        paddingHorizontal: APP_PADDING_HORIZONTAL,
        paddingVertical: APP_PADDING_HORIZONTAL,
    },
    title: {
        flex: 1,
        marginBottom: spacing.MARGIN_12,
        fontSize: textScale(13)
    },
    ViewArticleText: {
        color: colors.theme,
        fontSize: textScale(12),
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD
    },
})

export default FeedListComponentRow;