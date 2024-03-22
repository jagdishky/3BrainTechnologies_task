import React from "react";
import { FlatList, SectionList, StyleSheet, View } from "react-native";
import FeedListComponentRow from "../row/FeedListComponentRow";
import { Images } from "../../utility/imagePaths";
import RegularText from "../common/RegularText";
import { spacing } from "../../styles/spacing";
import { APP_PADDING_HORIZONTAL } from "../../styles/commonStyles";
import VirtualizedView from "../common/View/VirtualizedView";
import { FEED_TYPE } from "../../utility/constants";

const RenderSectionHeader = () => {
    return (
        <View>

        </View>
    )
}

const FeedListComponent = () => {

    const FEED_DATA = [
        {
            type: FEED_TYPE[0],
            data: [
                {
                    img: Images.IMG_MACKUP_FEED,
                    title: 'Ice cream is made with carrageenan'
                },
                {
                    img: Images.IMG_FEMALE_MODAL_FEED,
                    title: 'Ice cream is made with carrageenan'
                },
            ],
            fullWidthFeedData: {
                img: Images.IMG_ICECREAM_FEED,
                title: 'Ice cream is made with carrageenan'
            }
        },
        {
            type: FEED_TYPE[0],
            data: [
                // {
                //     img: Images.IMG_DIAMOND,
                //     title: 'Ice cream is made with carrageenan'
                // },
                // {
                //     img: Images.IMG_DIAMOND,
                //     title: 'Ice cream is made with carrageenan'
                // },
            ],
            fullWidthFeedData: {
                img: Images.IMG_MALE_MODAL_FEED,
                title: 'Ice cream is made with carrageenan'
            }
        },
        {
            type: FEED_TYPE[1],
            data: [
                // {
                //     img: Images.IMG_DIAMOND,
                //     title: 'Ice cream is made with carrageenan'
                // },
                // {
                //     img: Images.IMG_DIAMOND,
                //     title: 'Ice cream is made with carrageenan'
                // },
            ],
            fullWidthFeedData: {
                img: Images.IMG_HILLS_FEED,
                title: 'Ice cream is made with carrageenan'
            }
        },
    ]

    return (
        // <VirtualizedView style={styles.mainContainer} >
            <SectionList
                sections={FEED_DATA}
                renderItem={({ section, index }) => {
                    return (
                        <>
                            {
                                index == 0 &&
                                <FlatList
                                    data={section.data}
                                    renderItem={({ item, index }) => <FeedListComponentRow index={index} item={item} />}
                                    numColumns={2}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => String(index)}
                                    columnWrapperStyle={{ justifyContent: 'space-between', width: spacing.FULL_WIDTH - (APP_PADDING_HORIZONTAL * 2) }}
                                />
                            }
                        </>
                    )
                }}
                renderSectionHeader={({ section }) => <FeedListComponentRow item={section.fullWidthFeedData} feedType={section.type} isFullWidthCard={true} />}
            />
        // {/* </VirtualizedView> */}
    )
}
// 
const styles = StyleSheet.create({
    mainContainer: {
        // alignSelf :'center'
        // paddingHorizontal: APP_PADDING_HORIZONTAL,
        // flexGrow : 1
    },
})

export default FeedListComponent;