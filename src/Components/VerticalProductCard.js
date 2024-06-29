import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

const VerticalProductCard = (data) => {
    return (

        <View style={{}} >
            <FlatList
                columnWrapperStyle={{ gap: 10, alignSelf: 'center', marginBottom: 10 }}
                numColumns={2}
                data={[1, 2, 2, 3, 4, 5]} renderItem={({ item }) => (
                    <View style={style.MainCard}>
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfRi5K-kejQQwsLbnxIDelGjWapInBSf9BA&s" }}
                            style={style.ProductImage} />
                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <Text numberOfLines={1} style={style.Title}>
                                Molded Evie Chai
                            </Text>
                            <Text numberOfLines={3} style={style.DisText}>
                                Lurna maecenas elit amet sodales fringila morbi mattisa leo port ti
                            </Text>
                            <Text style={style.priceText}> ₹ 200</Text>
                        </View>
                    </View>
                )} />
        </View>
    )
}

const style = StyleSheet.create({
    MainCard: {
        height: 310,
        width: 185,
        // backgroundColor: 'red',

        borderRadius: 10
    },
    ProductImage: {
        height: '55%',
        width: '100%',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
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