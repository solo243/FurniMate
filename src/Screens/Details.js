import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';


const Details = () => {

    const [isSaved, SetIsSaved] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={style.TopBarCont}>
                    <TouchableOpacity>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {isSaved ? (<Octicons name="heart-fill" size={24} color="black" />) : <Octicons name="heart" size={24} color="black" />}
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfRi5K-kejQQwsLbnxIDelGjWapInBSf9BA&s' }} style={style.MainImage} />
                <View style={style.Container}>
                    <Text style={style.TitleText}>
                        Molded Evie Chair
                    </Text>
                    <Text style={style.PriceText}>
                        ₹ 200 / month
                    </Text>
                    <Text numberOfLines={5} style={style.OtherInfo}>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    TopBarCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        position: 'absolute', zIndex: 10,
        width: '100%'
        , marginTop: 14
    }, MainImage: {
        width: "100%",
        height: 320,
        backgroundColor: 'red'
    },
    TitleText: {
        fontSize: RFValue(20),
        fontWeight: '500',
        // paddingStart: 20,
        marginTop: 13
    }, Container: {
        width: '90%',
        alignSelf: 'center',
    }
    , PriceText: {
        fontSize: RFValue(20),
        marginTop: 10,
        fontWeight: '500'
    },
    OtherInfo: {
        fontSize: RFValue(12.5),
        color: '#839198',
        marginTop: 25,

    }
})
export default Details