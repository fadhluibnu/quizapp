import * as React from 'react';
import { Button, View, Text, Image, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomBackNavigation from '../costum/CustomBackNavigation';

function MateriScreen({route, navigation }) {
    const {judulMateri} = route.params
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#41B2E0',
            position: 'relative'
        }}>

            {/* back button */}

            <CustomBackNavigation
                onPress={() => navigation.goBack()}
                judulMateri={judulMateri}
            />

            <ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    marginTop: 70,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    padding: 10,
                    paddingTop: 20
                }}>
                    <Text style={{
                        fontFamily: "Rubik-Regular",
                        fontSize: 16,
                        color: "#3D4A57",
                        marginBottom: 8,
                    }}>
                        Penjumlahan merupakan operasi dasar aritmatika yang menjumlahkan dua buah bilangan menjadi sebuah bilangan
                    </Text>
                    <Text style={{
                        fontFamily: 'Rubik-Bold',
                        fontSize: 16,
                        color: '#3D4A57'
                    }}>1. Bilangan Bulat</Text>
                    <Image source={require('../../assets/image/bilangan_bulat.png')} style={{
                        width: "100%",
                        height: 210,
                        borderRadius: 10,
                        resizeMode: 'cover',
                        marginTop: 8
                    }} />
                    <Text style={{
                        fontFamily: "Rubik-Regular",
                        fontSize: 16,
                        color: "#3D4A57"
                    }}>
                        Pengertian Bilangan Bulat
                        {"\n"}
                        Bilangan bulat adalah bilangan yang terdiri dari nol, bilangan positif dan bilangan negatif.
                        {"\n"}
                        Contoh . . . , -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, . . ..
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}
export default MateriScreen 