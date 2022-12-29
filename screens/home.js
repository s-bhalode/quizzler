import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title titleText="QUIZZLER" />
            <View style={styles.bannerContainer}>
                <Image 
                source={require('../assets/img/CustomerSurvey-rafiki.png')}
                // style={{width: 400, height: 400}}
                style={styles.banner}
                resizeMode="contain" />
        

            </View>

            <TouchableOpacity 
            onPress={() => navigation.navigate("Quiz")}
            style={styles.button} >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>

        </View>
    );
};



export default Home;

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
    }
})
