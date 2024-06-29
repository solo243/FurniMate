import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const VerticalProductCard = ({ data }) => {
    return (

        <View style={{ alignSelf: 'center' }} >
            <FlatList
                columnWrapperStyle={{ gap: 10, marginBottom: 10 }}
                numColumns={2}
                data={data} renderItem={({ item }) => (
                    <View style={style.MainCard}>
                        <Image source={{ uri: item.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfRi5K-kejQQwsLbnxIDelGjWapInBSf9BA&s" }}
                            style={style.ProductImage} />
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <Text numberOfLines={1} style={style.Title}>
                                {item.title || "Molded Evie Chai"}
                            </Text>
                            <Text numberOfLines={3} style={style.DisText}>
                                {item.description || "Lurna maecenas elit amet sodales fringila morbi mattisa leo port ti"}
                            </Text>
                            <Text style={style.priceText}>
                                ₹ {item.price || 200}
                            </Text>
                        </View>
                    </View>
                )} />
        </View>
    )
}

const style = StyleSheet.create({
    MainCard: {
        // height: 300,
        // paddingVertical: 10,
        // minHeight: 200,
        width: 185,
        // backgroundColor: 'red',
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // borderRadius: 10,
        borderWidth: 1,
        paddingBottom: 10,
        borderColor: '#bebebe'
    },
    ProductImage: {
        // height: '55%',
        height: 170,
        width: '100%',
        borderRadius: 10,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    }, Title: {
        fontSize: RFValue(16),
        marginTop: 10,
        fontWeight: '500',
    },
    DisText: {
        color: '#839198',
        marginTop: 10
    },
    priceText: {
        fontSize: RFValue(15),
        fontWeight: '500',
        marginTop: 10
    }
})

export default VerticalProductCard