import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../Constant/Colors'


// Ioncs 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import ProductCard from '../Components/ProductCard';
const Home = ({ navigation }) => {

    const cate = ["Popular", "Chair", "Table", "Cupboard", "Sofa"]
    const [selectedCate, SetSelectedCate] = useState(0);


    const baseUrl = "https://furniture1-dusky.vercel.app"


    const [Data, setData] = useState([]);
    const FetchPopular = async () => {
        const url = `${baseUrl}//v12/popular/post`;
        const fetching = await fetch(url);
        const convert = await fetching.json();
        console.log(convert.posts)
        setData(convert.posts)
    }



    const post = [
        {
            "_id": "667ff3324c51ce890caa82bf",
            "uid": "user7",
            "title": "Modern Dresser",
            "price": 600,
            "rating": 4.9,
            "category": "Bedroom Furniture",
            "duration": "N/A",
            "score": 9.3,
            "image": "https://th.bing.com/th/id/OIP.t6youSazZxVIdeypYRGuGwHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7",
            "description": "Sleek and functional dresser with multiple drawers for organized storage. Made with high-quality materials for long-lasting durability."
        },
        {
            "_id": "667ff21a4c51ce890caa82b8",
            "uid": "user2",
            "title": "Stylish Modern Sofa",
            "price": 800,
            "rating": 4.8,
            "category": "Living Room Furniture",
            "duration": "N/A",
            "score": 9,
            "image": "https://th.bing.com/th?id=OIP.Ac3b3LknwvGzb4UI3J2BSQHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            "description": "Comfortable and sleek sofa with plush cushions and a sturdy frame."
        },
        {
            "_id": "667ff2b34c51ce890caa82bb",
            "uid": "user4",
            "title": "Ergonomic Office Chair",
            "price": 350,
            "rating": 4.7,
            "category": "Office Furniture",
            "duration": "N/A",
            "score": 8.5,
            "image": "https://th.bing.com/th/id/OIP.iLaBmVMgnUJD2uZkTD64cQHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7",
            "description": "Provides lumbar support and adjustable settings for optimal comfort."
        },
        {
            "_id": "667ff33b4c51ce890caa82c0",
            "uid": "user9",
            "title": "Handwoven Area Rug",
            "price": 250,
            "rating": 4.6,
            "category": "Living Room Furniture",
            "duration": "N/A",
            "score": 8.1,
            "image": "https://th.bing.com/th/id/OIP.XX_PrA5gs1bxGO_ZjLIi8QHaHa?w=190&h=191&c=7&r=0&o=5&pid=1.7",
            "description": "Adds warmth and texture to any room. Made with natural materials."
        },
        {
            "_id": "667ff2d34c51ce890caa82bc",
            "uid": "user5",
            "title": "Glass Coffee Table",
            "price": 200,
            "rating": 4.3,
            "category": "Living Room Furniture",
            "duration": "N/A",
            "score": 7.2,
            "image": "https://th.bing.com/th/id/OIP.koSoUogcb2rc6Orp0cHWwAHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7",
            "description": "Modern and stylish coffee table with a tempered glass top and metal frame."
        },
        {
            "_id": "667ff2844c51ce890caa82b9",
            "uid": "user3",
            "title": "Expandable Dining Table",
            "price": 500,
            "rating": 4.2,
            "category": "Dining Room Furniture",
            "duration": "N/A",
            "score": 7,
            "image": "https://th.bing.com/th/id/OIP.N9hQJQn84H5XeNBBLR2AKAHaGz?w=198&h=182&c=7&r=0&o=5&pid=1.7",
            "description": "Seats 4-6 people comfortably, with an expandable top for additional guests."
        },
        {
            "_id": "667ff3494c51ce890caa82c1",
            "uid": "user10",
            "title": "Modern Nightstand",
            "price": 180,
            "rating": 4.1,
            "category": "Bedroom Furniture",
            "duration": "N/A",
            "score": 7,
            "image": "https://th.bing.com/th/id/OIP.sP8yy29jJAVJQLuBcmDpugHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7",
            "description": "Provides a convenient surface for bedside essentials with a sleek design."
        },
        {
            "_id": "667ff2e84c51ce890caa82bd",
            "uid": "user6",
            "title": "Tall Bookcase",
            "price": 450,
            "rating": 4,
            "category": "Home Office Furniture",
            "duration": "N/A",
            "score": 6.8,
            "image": "https://th.bing.com/th/id/OIP.7UuBVt8QTB19AW6KCWjRAwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7",
            "description": "Offers ample storage space for books and other decorative items."
        },
        {
            "_id": "667ff3604c51ce890caa82c2",
            "uid": "user11",
            "title": "Folding Patio Chair",
            "price": 80,
            "rating": 4.2,
            "category": "Outdoor Furniture",
            "duration": "N/A",
            "score": 6.5,
            "image": "https://th.bing.com/th/id/OIP.ihcSy7ToDg4VB1DYQL6KTQHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7",
            "description": "Lightweight and portable, perfect for relaxing outdoors."
        }
    ]

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
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    activeOpacity={1}

                                    key={index} style={[style.CateBtn, index == 0 ?
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
                            <ProductCard navigation={navigation} data={post || [1, 2, 3, 4, 5]} />
                        </View>

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
        // backgroundColor: 'red',
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