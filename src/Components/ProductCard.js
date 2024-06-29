import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Octicons } from '@expo/vector-icons';

const ProductCard = ({ data, navigation }) => {
    return (
        <View style={{ marginTop: 15, gap: 10 }}>
            <FlatList
                horizontal
                // showsHorizontalScrollIndicator="false"
                // showsVerticalScrollIndicator="false"
                indicatorStyle='white'
                // columnWrapperStyle={{ gap: 10 }}
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Details", { imge: item.image, dis: item.description })}
                        // activeOpacity={1}
                        style={[style.MainCardCont, index == 0 ?
                            { marginStart: 25 } :
                            { marginStart: 0 }]}>
                        <Image source={{ uri: item.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfRi5K-kejQQwsLbnxIDelGjWapInBSf9BA&s" }}
                            style={style.ProductImage} />
                        <View style={style.InfoCont}>
                            <Text numberOfLines={1} style={style.Title}>{item.title || "Molded Evie Chai"} </Text>
                            <Text numberOfLines={2} style={style.DisText}>
                                {item.description || "Lurna maecenas elit amet sodales fringila morbi mattisa leo port ti"}
                            </Text>
                            <View style={style.PriceRow}>
                                <Text style={style.PriceText}>
                                    ₹ {item.price || 200}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

const style = StyleSheet.create({
    MainCardCont: {
        // backgroundColor: '#',
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 0,
        paddingBottom: 10,
        borderColor: '#bebebe',

        width: 170,
        marginEnd: 16
    }, ProductImage: {
        height: 180,
        borderTopLeftRadius: 11,
        borderTopRightRadius: 11,
        width: '100%',
        // backgroundColor: 'gray'
    }, Title: {
        fontSize: RFValue(14.5),
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 11
    },
    InfoCont: {
        paddingHorizontal: 13,
    },
    DisText: {
        color: '#839198'
    }, PriceRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    PriceText: {
        color: 'black',
        fontWeight: '600',
        marginTop: 12,
        fontSize: RFValue(15.5)
    },
    ShowCaseCont: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 17,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Box1: {
        height: 70,
        backgroundColor: 'red',
        width: '48%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        gap: 10,
        borderRadius: 10
    }, ShowCaseText: {
        fontSize: RFValue(14)
    }
})

export default ProductCard