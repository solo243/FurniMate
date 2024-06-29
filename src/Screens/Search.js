import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import ProductCard from '../Components/ProductCard';
import VerticalProductCard from '../Components/VerticalProductCard';
import debounce from 'lodash.debounce';
import { Colors } from '../Constant/Colors';
import { RFValue } from 'react-native-responsive-fontsize';



const Search = () => {

    const [minPrice, setMinPrice] = useState('0');
    const [maxPrice, setMaxPrice] = useState('');
    const [filteredItems, setFilteredItems] = useState(SearchData);
    const [SearchData, SetSearchData] = useState([]);
    const [isOpen, SetIsOpen] = useState(false);



    const Fetching = async (query) => {
        try {
            setTimeout(async () => {

                const BaeUrl = `https://furniture1-dusky.vercel.app/v10/posts/search/${query}`
                const fetching = await fetch(BaeUrl);
                const convert = await fetching.json()
                SetSearchData(convert);
                setFilteredItems(convert);
                console.log(convert)
            }, 2400)
        } catch (e) {
            console.log("Error while calling ", e)
        }
    }

    const debouncedFetching = useCallback(debounce(Fetching, 400), []);

    const filterItemsByPrice = () => {
        const min = parseFloat(minPrice) || 0;
        const max = parseFloat(maxPrice) || Infinity;
        const filtered = SearchData.filter(item => item.price >= min && item.price <= max);
        setFilteredItems(filtered);
    };



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, paddingBottom: 50 }}>
                    {/* Topbar  */}
                    <View style={style.TopBarCont}>
                        <View style={style.SearchBarContainer}>
                            <AntDesign name="search1" size={24} color="#bebebe" />
                            <TextInput onChangeText={(text) => debouncedFetching(text)} placeholder='Search product here..'
                                cursorColor={'gray'} style={style.TextInput}>
                            </TextInput>
                        </View>
                        <TouchableOpacity style={style.MoreBtn} onPress={() => SetIsOpen(!isOpen)}>
                            {isOpen ? (<AntDesign name="down" size={24} color={Colors.SecondColor} />)
                                :
                                (<AntDesign name="up" size={24} color={Colors.SecondColor} />)}
                        </TouchableOpacity>
                    </View>
                    {isOpen ? (
                        <>
                            <View style={{ gap: 10, flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                                <TextInput
                                    value={minPrice}
                                    onChangeText={setMinPrice}
                                    keyboardType="numeric"
                                    placeholder='Min Price'
                                    style={style.PriceEnter}>
                                </TextInput>
                                <TextInput
                                    value={maxPrice}
                                    onChangeText={setMaxPrice}
                                    keyboardType="numeric"
                                    placeholder='Max Price'
                                    style={style.PriceEnter}>
                                </TextInput>

                            </View>
                            <TouchableOpacity
                                onPress={filterItemsByPrice}
                                style={style.ApplyFilterBtn}>
                                <Text style={style.FilterText}> Apply Filter</Text>
                            </TouchableOpacity>
                        </>

                    ) : (
                        <>
                        </>
                    )
                    }
                    <VerticalProductCard data={filteredItems} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    TopBarCont: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    MoreBtn: {
        backgroundColor: 'lightgray',
        padding: 9,
        borderRadius: 8,
        borderCurve: 'continuous'
    },
    SearchBarContainer: {
        height: 50,
        backgroundColor: '#f9f9f9',
        width: '86%',
        alignSelf: 'center',
        marginTop: 14,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
        gap: 10,
        borderWidth: 1,
        borderColor: '#bebebe',
        // paddingBottom: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
    TextInput: {
        // backgroundColor: 'blue',
        width: '90%',
        height: '100%',
    },
    PriceEnter: {
        width: '40%',
        alignSelf: 'center',
        height: 45,
        borderRadius: 6,
        paddingHorizontal: 20,
        backgroundColor: 'lightgray',
    }, ApplyFilterBtn: {
        width: '95%',
        height: 40,
        marginBottom: 20,
        backgroundColor: Colors.SecondColor,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    FilterText: {
        color: 'white',
        fontSize: RFValue(15),
        fontWeight: '500'
    }
})
export default Search