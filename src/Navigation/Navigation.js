import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import Cart from '../Screens/Cart'
import Profile from '../Screens/Profile'



// Icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Navigation 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../Authentication/Screens/SignIn'
import SignUpS from '../Authentication/Screens/SignUpS'
import { getAuth } from 'firebase/auth'
import { Colors } from '../Constant/Colors'
import Details from '../Screens/Details'
// import SignUp from '../Authentication/Screens/SignUp'



const Navigation = () => {
    return (
        <NavigationContainer>
            {/* <BottomTab /> */}
            <CredScreen />
            {/* <Auth /> */}
        </NavigationContainer>

    )
}


const Auth = () => {
    const [loading, setLoading] = useState(true);
    const [user, SetUser] = useState();
    const auth = getAuth();
    const handleCheck = (user) => {
        user ? SetUser(user) : SetUser(null);
        setLoading(false);
    };

    useEffect(() => {
        const CheckMode = onAuthStateChanged(auth, (user) => handleCheck(user));
        return CheckMode;
    }, []);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignSelf: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    // source={require("./assets/newld.gif")}
                    style={{ height: height * 0.1, width: width * 0.4 }}
                />
            </View>
        );
    }

    return <>{user ? <BottomTab /> : <CredScreen />}</>;
}



const Stack = createNativeStackNavigator();

const CredScreen = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabscreen" component={BottomTab} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen options={{ animation: "slide_from_left" }} name='SignIn' component={SignIn} />
        <Stack.Screen options={{ animation: "slide_from_right" }} name='SignUp' component={SignUpS} />
    </Stack.Navigator>
)


const Tab = createBottomTabNavigator();

const BottomTab = () => (
    <>
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { color: "black" },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 50,
                    position: "absolute",
                    backgroundColor: "white",
                    paddingBottom: 10,
                    paddingTop: 5,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MaterialCommunityIcons name="home-variant" size={26} color={Colors.SecondColor} />
                        ) : (
                            <MaterialCommunityIcons name="home-variant-outline" size={26} color="gray" />
                        ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="search" size={25} color={Colors.SecondColor} />
                        ) : (
                            <Ionicons name="search-outline" size={25} color="gray" />
                        ),
                }}
            />
            <Tab.Screen
                name="Save"
                component={Cart}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) =>
                        focused ? (

                            <Ionicons name="cart" size={26} color={Colors.SecondColor} />
                        ) : (
                            <Ionicons name="cart-outline" size={26} color="gray" />
                        ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FontAwesome name="user" size={26} color={Colors.SecondColor} />
                        ) : (
                            <FontAwesome name="user-o" size={23} color="gray" />
                        ),
                }}
            />
        </Tab.Navigator>
    </>

)

export default Navigation