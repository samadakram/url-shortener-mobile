import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/screenWrapper/ScreenWrapper';
import { logo } from '../../utils/constant';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {

    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <View style={{ marginLeft: 5 }}>
                            <Icon name="user" size={25} color="#000" />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput style={styles.input} placeholder='Username' />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{ marginLeft: 5 }}>
                            <Icon name="lock" size={25} color="#000" />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput style={styles.input} secureTextEntry={showPassword} placeholder='Password' />
                        </View>
                        <View>
                            <TouchableOpacity onPress={handleShowPassword}>
                                <Icon name={showPassword ? "eye-off" : "eye"} size={25} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.forgotContainer}>
                        <TouchableOpacity>
                            <Text style={styles.forgotText}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signUpContainer}>
                        <Text style={styles.questionText}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity style={styles.questionBtn} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoWrapper: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '35%',
        height: '35%',
        resizeMode: 'contain'
    },
    inputWrapper: {
        flex: 2
    },
    inputContainer: {
        borderRadius: 5,
        borderWidth: 1.5,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderColor: '#D9D9D9'
    },
    inputView: {
        width: '80%',
        padding: 5
    },
    input: {
        padding: 5,
        fontSize: 16,
    },
    forgotContainer: {
        alignItems: 'flex-end',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10
    },
    forgotText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1677ff'
    },
    btnContainer: {
        margin: 10,
        height: 50,
        borderRadius: 5
    },
    btn: {
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0766ad'
    },
    btnText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    signUpContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    questionText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000'
    },
    questionBtn: {
        marginLeft: 5
    },
    signUpText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    }
});

export default SignIn