import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import InputField from './Components/InputField';
import { Colors } from '../../Constant/Colors';
import {
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";


const SignIn = ({ navigation }) => {

    const [username, SetUsername] = useState("");
    const [email, SetEmail] = useState([]);
    const [pass, SetPass] = useState([]);
    const [loading, setloading] = useState(true);


    const CreatingUser = async () => {
        try {
            setdisable(true);
            setloading(true);
            const UserCreden = await createUserWithEmailAndPassword(
                auth,
                email,
                pass,
                name
            );

            const Firebase = getFirestore();
            const firebasedata = doc(Firebase, "Users", UserCreden.user.uid);
            await setDoc(firebasedata, {
                name: name,
                email: email,
                password: pass,
                uid: UserCreden.user.uid,
            });
            console.log(alert("SignUp Complate welcome"));
            setwrong(false);
            SendDataToServer(UserCreden.user.uid);
            // setloading(false);
        } catch (e) {
            if (e.code === "auth/email-already-in-use") {
                console.log(alert("email is ALready in use sir"));
                setloading(false);
                setwrong(true);
                setdisable(false);
            } else if (e.code === "auth/invalid-email") {
                console.log(alert("Please Enter a valid email  "));
                setloading(false);
                setdisable(false);
                setwrong(true);
            } else if (e.code === "auth/weak-password") {
                console.log(alert("Password is too short "));
                setloading(false);
                setwrong(true);
                setdisable(False);
            } else if (e.code === "auth/missing-password") {
                console.log(alert(" Password is missing "));
                setloading(false);
                setdisable(false);
            } else {
                console.log(alert(e));
                console.log(e);
                setdisable(false);
                setloading(false);
            }
            console.log(e);
        }

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {/* HeroIcon  */}
                <KeyboardAvoidingView>
                    {/* <Image source={require('../../../assets/SignUpLogo.png')} style={style.HeroImage} /> */}
                    <View style={style.ContentCont}>
                        <Text style={style.RegisterText}>Register</Text>
                        <Text style={style.DemoText}>Please register to login</Text>
                        <InputField setValue={SetUsername} text={"Username"} icon={<Ionicons name="person-outline" size={24} color={Colors.SecondColor} />} />
                        <InputField setValue={SetEmail} text={"Email"} icon={<Fontisto name="email" size={22} color={Colors.SecondColor} />} />
                        <InputField setValue={SetPass} text={"Password"} icon={<Feather name="lock" size={24} color={Colors.SecondColor} />} />
                        <TouchableOpacity style={style.MainBtn}>
                            <Text style={style.SignText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <View style={style.BottomTextCont}>
                            <Text>
                                Already have a account?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("SignUp")} >
                                <Text style={style.ReDirectText}> Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    HeroImage: {
        height: 300,
        width: 300,
        alignSelf: 'center'
    },
    ContentCont: {
        width: '90%',
        marginTop: 50,
        alignSelf: 'center'
    },
    RegisterText: {
        fontSize: 40,
        color: Colors.SecondColor,
        fontWeight: '600'
    }, DemoText: {
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
        marginTop: 40
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
export default SignIn