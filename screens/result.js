import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Title from '../components/title';

const Result = ({navigation, route}) => {

    const {score} = route.params;
    const resultBanner = score>0 ? `require('../assets/img/Personalgoals-amico.png')` : '';

    return (
        <View style={styles.container}>
            <Title titleText="RESULT" />
            <Text style={styles.score}>{score}</Text>
            <View style={styles.bannerContainer}>
                <Image 
                source={{resultBanner}}
                // style={{width: 400, height: 400}}
                style={styles.banner}
                resizeMode="contain" />
            </View>
            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Home")}
                style={styles.button}>
                    <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Result;


const styles = StyleSheet.create({
    banner : {
        height : 300,
        width:300
    },
    bannerContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        flex: 1
    },
    container:{
        paddingTop : 40,
        paddingHorizontal : 20,
        backgroundColor: 'white',
        height: '100%'
    },
    button: {
        width: '100%',
        backgroundColor: '#256D85',
        padding: 10,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: '700',
    },
    score: {
        fontSize: 30,
        padding: 12,
        fontWeight: '800',
        alignSelf: 'center'
    }
})