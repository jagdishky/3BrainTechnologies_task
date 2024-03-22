
import { StyleSheet } from "react-native";
import { spacing } from "./spacing";
import colors from "../utility/colors";
import { textScale } from "./responsiveStyles";
import { fontNames } from "./typography";

export const APP_PADDING_HORIZONTAL = spacing.PADDING_16

const commonStyle = StyleSheet.create({
    flexDirectionRow: {
        flexDirection: "row",
        alignItems: 'center',
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor
    },
    seprator: {
        height: spacing.HEIGHT_2,
        backgroundColor: colors.grey300,
        width: '100%',
        borderRadius: spacing.RADIUS_12,
        marginVertical: spacing.MARGIN_12,
    },
    inputFieldError: {
        fontSize: textScale(10),
        color: colors.red500,
        marginTop: spacing.MARGIN_2,
        marginLeft: spacing.MARGIN_4,
    },
    detailCardView: {
        backgroundColor: colors.grey200,
        borderRadius: spacing.RADIUS_16,
        padding: APP_PADDING_HORIZONTAL,
        marginBottom: spacing.MARGIN_12,
        paddingBottom: 0
    },
    fieldTitle: {
        fontSize: textScale(13),
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD,
    },
})


export default commonStyle