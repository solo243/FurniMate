import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constant/Colors'


import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import ProductCard from '../Components/ProductCard';
const Home = () => {

    const cate = ["Popular", "Chair", "Table", "Cupboard", "Sofa"]
    const [selectedCate, SetSelectedCate] = useState(0);


    const data = [1, 2, 3, 4, 5,]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView>
                <View style={{ flex: 1, paddingBottom: 20 }}>

                    {/* Top bar  */}
                    <View style={style.TopBarRow}>
                        <Octicons name="three-bars" size={24} color="black" />
                        <Feather name="bell" size={24} color="black" />
                    </View>
                    <View style={style.HeroTextCont}>
                        <Text style={style.HeroText}>
                            Discover unique furniture
                        </Text>
                        <Text style={style.HeroText}>
                            for your home
                        </Text>
                    </View>
                    <TouchableOpacity style={style.SearchBarCont}>
                        <AntDesign name="search1" size={24} color="#bebebe" />
                        <Text style={{ color: '#bebebe' }}>
                            Search furniture
                        </Text>
                    </TouchableOpacity>
                    <View style={style.CateHoriCont}>
                        <FlatList
                            data={cate}
                            horizontal
                            // showsVerticalScrollIndicator="false"
                            // showsHorizontalScrollIndicator="false"
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => SetSelectedCate(index)} key={index} style={[style.CateBtn, index == 0 ?
                                        { marginStart: 20, } :
                                        { marginStart: 0 }, index == selectedCate ?
                                        { backgroundColor: Colors.SecondColor } :
                                        { backgroundColor: 'white' }]}>
                                    <Text style={[style.CateText, index == selectedCate ?
                                        { color: 'white' } : { color: '#bebebe' }]}>{item}</Text>
                                </TouchableOpacity>
                            )} />
                    </View>
                    {/* Content area  */}
                    <View style={style.ContentAreaCont}>
                        <View style={style.TextAndAllCont}>
                            <Text style={style.MostInstText}> Most Intrusted</Text>
                            <TouchableOpacity >
                                <Text style={style.ViewAllText}>
                                    View All
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ProductCard data={data} />
                        </View>
                        <Text style={{ fontSize: RFValue(20) }}>
                            Best Seller Product
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    TopBarRow: {
        flexDirection: 'row',
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    HeroTextCont: {
        width: '92%',
        marginTop: 30,
        alignSelf: 'center'
    },
    HeroText: {
        fontSize: RFValue(24),
        fontWeight: '500'
    },
    SearchBarCont: {
        width: '92%',
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        paddingHorizontal: 18,
        height: 60,
        borderRadius: 7,
        marginTop: 30
    },
    CateHoriCont: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    CateBtn: {
        paddingVertical: 6,
        marginEnd: 10,
        paddingHorizontal: 17,
        borderRadius: 100
    }, CateText: {
        fontWeight: '600',
        fontSize: RFValue(13.8)
    },
    ContentAreaCont: {
        // width: '90%',
        alignSelf: 'center',
        marginTop: 32
    }, MostInstText: {
        color: 'black',
        fontSize: RFValue(17),
        fontWeight: '600'
    },
    ViewAllText: {
        color: "#ffab5d",
        fontWeight: '500',
        fontSize: RFValue(12.5)
    },
    TextAndAllCont: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 22,
        justifyContent: 'space-between'
    }
})
export default Home