import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Poker } from '../../assets/images';
import { ColorPrimary, ColorWhite } from '../../utils/constanta';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <View></View>
            <View style={styles.row}>
                <Image style={styles.logo} source={Poker} resizeMode="center" />
                {/* <Text style={{ fontWeight: 'normal', fontSize: 24, color: ColorPrimary }}>&diams; &clubs; &hearts; &spades;</Text> */}
            </View>
            <View>
                <View style={styles.footer}>
                    <Text style={{ fontWeight: '300', fontSize: 16, color: ColorPrimary }}>Copyright &copy; 2021 Powered by</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: ColorPrimary }}>Agelasi</Text>
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorWhite,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    logo: {
        width: 300,
        height: 300,
        marginHorizontal: 10,
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
