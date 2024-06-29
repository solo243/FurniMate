import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../Constant/Colors'
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import InputField from './Components/InputField';
// import { auth } from '../firebase/config';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import firebase from "firebase/app";
// import "firebase/auth";
import auth from '@react-native-firebase/auth';

const SignUpS = ({ navigation }) => {
    const [email, SetEmail] = useState("");
    const [pass, SetPass] = useState("");
    const [loading, setLoading] = useState(false);

    const Login = async () => {
        try {
            setLoading(true);
            const yy = await signInWithEmailAndPassword(auth, email, pass);
            const user = yy;
            console.log(yy)
            console.log(user);
            console.log("you are login brooooo !!!!!!!!!!");
            console.log(alert("Your are loged in welcome ✅", user));
            // setiswrong(false);
        } catch (e) {
            if (e.code === "auth/invalid-login-credentials") {
                setLoading(false);
                console.log(
                    alert("Pleas Check your Email and Password Its wrong!") && e
                );
                // setiswrong(true);
                setLoading(false);
            }
        }
    };
    const handlePress = () => {
        Login()
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={style.ContentCont}>
                    <Text style={style.HeroText}>
                        Login
                    </Text>
                    <Text style={style.DemoText}>
                        Please Sign in to Continue
                    </Text>
                    <InputField setValue={SetEmail} text={"Email"} icon={<Fontisto name="email" size={22} color={Colors.SecondColor} />} />
                    <InputField setValue={SetPass} text={"Password"} icon={<Feather name="lock" size={24} color={Colors.SecondColor} />} />
                    <TouchableOpacity onPress={() => handlePress()} style={style.MainBtn}>
                        <Text style={style.SignText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View style={style.BottomTextCont}>
                        <Text>
                            Don't have a account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                            <Text style={style.ReDirectText}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    ContentCont: {
        width: '90%',
        marginTop: 50,
        alignSelf: 'center'
    }, HeroText: {
        fontSize: 40,
        color: Colors.SecondColor,
        fontWeight: '600'
    },
    DemoText: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.SecondColor,
        marginBottom: 12
    },
    MainBtn: {
        width: '100%',
        backgroundColor: Colors.SecondColor,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: 30
    },
    SignText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },

    ReDirectText: {
        fontWeight: '600',
        color: Colors.SecondColor,
        fontSize: 17
    },
    BottomTextCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 11
    }

})
export default SignUpS