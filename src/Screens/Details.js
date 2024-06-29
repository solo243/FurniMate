import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../Constant/Colors';
import { getData } from '../Constant/StoreData';


// useEffect(() => {
//     getData('myKey').then((data) => {
//         setStoredData(data);
//     });
// }, []);


const Details = ({ navigation, route }) => {
    const gg = route;
    const RealData = gg.params._id
    console.log(gg.params.id)

    const [isSaved, SetIsSaved] = useState(false)

    const FetchingProduct = async () => {
        const url = await fetch('https://furniture1-dusky.vercel.app/v11/postdetail/667fd11c470d19325ae92a62');
        const convert = await url.json();
        console.log(convert);
    }
    // useEffect(() => {
    //     FetchingProduct()
    // }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={style.TopBarCont}>
                    <TouchableOpacity>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>

                </View>
                <Image source={{ uri:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfRi5K-kejQQwsLbnxIDelGjWapInBSf9BA&s' }} style={style.MainImage} />
                <View style={style.Container}>
                    <Text style={style.TitleText}>
                        {RealData.title}
                    </Text>
                    <Text style={style.PriceText}>
                        ₹ 200 / month
                    </Text>
                    <Text numberOfLines={6} style={style.OtherInfo}>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', position: 'absolute',
                    bottom: 12,
                    paddingHorizontal: 10,
                    width: '90%',
                    justifyContent: 'space-between',
                    alignSelf: 'center'
                }}>

                    <TouchableOpacity style={style.BtnCont}>
                        <Text style={style.RentText}>Rent now</Text>
                    </TouchableOpacity>
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
        marginTop: 20,

    },
    BtnCont: {
        height: 60,
        backgroundColor: Colors.SecondColor,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }, RentText: {
        fontSize: RFValue(17),
        color: 'white',
        fontWeight: '600'
    }
})
export default Details