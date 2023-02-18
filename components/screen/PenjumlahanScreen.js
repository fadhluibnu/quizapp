import * as React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CostumBodyText from '../costum/CostumBodyText';
import CostumImageMateri from '../costum/CostumImageMateri';
import CostumTitleMateri from '../costum/CostumTitleMateri';
import CustomBackNavigation from '../costum/CustomBackNavigation';

export default function PenjumlahanScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#41B2E0',
            position: 'relative'
        }}>

            <CustomBackNavigation
                onPress={() => navigation.goBack()}
                judulMateri="Penjumlahan"
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
                    <CostumBodyText 
                        text="Penjumlahan merupakan operasi dasar aritmatika yang menjumlahkan dua buah bilangan menjadi sebuah bilangan"
                    />
                    <CostumTitleMateri 
                        text="1. Bilangan Bulat"
                    />
                    <CostumImageMateri image={require('../../assets/image/bilangan_bulat.png')}/>
                </View>
            </ScrollView>

        </View>
    )
}