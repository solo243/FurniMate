import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import ProductCard from '../Components/ProductCard';
import VerticalProductCard from '../Components/VerticalProductCard';

const Search = () => {

    const [SearchData, SetSearchData] = useState([]);
    const Fetching = async (query) => {
        const BaeUrl = `https://furniture1-dusky.vercel.app/v10/posts/search/${query}`
        const fetching = await fetch(BaeUrl);
        const convert = await fetching.json()
        SetSearchData(convert);
        console.log(convert)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingBottom: 110 }}>
                {/* Topbar  */}
                <View style={style.SearchBarContainer}>
                    <AntDesign name="search1" size={24} color="#bebebe" />
                    <TextInput onChangeText={(text) => Fetching(text)} placeholder='Search product here..'
                        cursorColor={'gray'} style={style.TextInput}>
                    </TextInput>
                </View>
                <VerticalProductCard />
                {/* <ProductCard data={SearchData} /> */}
            </View>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    SearchBarContainer: {
        height: 50,
        backgroundColor: '#f9f9f9',
        width: '90%',
        alignSelf: 'center',
        marginTop: 14,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
        gap: 10,
        flexDirection: 'row'
    },
    TextInput: {
        // backgroundColor: 'blue',
        width: '90%',
        height: '100%',

    }
})
export default Search