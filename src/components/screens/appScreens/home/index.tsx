import React, { useState } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { boxShadow } from '../../../../styles/Mixins';
import commonStyle from '../../../../styles/commonStyles';
import { textScale } from '../../../../styles/responsiveStyles';
import { spacing } from '../../../../styles/spacing';
import colors from '../../../../utility/colors';
import { Images } from '../../../../utility/imagePaths';
import RegularText from '../../../common/RegularText';
import HomeHeader from '../../../common/header/HomeHeader';
import CommonSearchBar from '../../../common/inputBoxes/CommonSearchBar';
import FeedListComponent from '../../../module/FeedListComponent';

interface RenderCategoryProps {
    title: String,
    icon: ImageSourcePropType
}

const RenderCategory = (props: RenderCategoryProps) => {
    return (
        <View style={styles.renderCategory_container} >
            <Image source={props.icon} />
            <RegularText style={styles.renderCategory_container_title} >{props.title}</RegularText>
        </View>
    )
}

const HomeScreen = ({ }) => {

    const [searchText, setSearchText] = useState('')
    return (
        <View style={styles.mainContainer} >
            <View style={styles.headerContainer} >
                <HomeHeader />
                <CommonSearchBar
                    value={searchText}
                    onChangeText={setSearchText}
                    placeHolder='What are you looking for?'
                />
                <View style={styles.categoryContainer} >
                    <RenderCategory icon={Images.IMG_DIAMOND} title='Beauty' />
                    <View style={styles.categorySeprator} />
                    <RenderCategory icon={Images.IMG_CARRY_BAG} title='Fashion' />
                </View>
            </View>
            {/* <ScrollView> */}
                <FeedListComponent />
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F8F9FE',
    },
    headerContainer: {
        backgroundColor: colors.white,
        ...boxShadow()
    },
    categoryContainer: {
        ...commonStyle.flexDirectionRow,
        gap: spacing.MARGIN_32,
        marginVertical: spacing.MARGIN_20,
        justifyContent : "center",
    },
    categorySeprator: {
        height: spacing.HEIGHT_30,
        backgroundColor: colors.grey900,
        width: spacing.WIDTH_2,
        borderRadius : spacing.RADIUS_30,
    },
    renderCategory_container: {
        ...commonStyle.flexDirectionRow,
        gap: spacing.MARGIN_6,
    },
    renderCategory_container_title: {
        fontSize: textScale(13)
    },
})

export default HomeScreen;