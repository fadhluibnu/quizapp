import React from 'react'
import { View, Image, Text, Alert, TouchableOpacity } from 'react-native'

function CostumCardMateri(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                display: 'flex',
                alignItems: 'center',
                width: 160,
            }}>
            <Image
                source={props.decorationImage}
                style={{
                    width: 160,
                    height: 114,
                    resizeMode: 'cover',
                    borderRadius: 26
                }}
            />
            <Text style={{
                marginTop: 8,
                fontFamily: "Rubik-Medium",
                fontSize: 16,
                color: '#323232',
                textAlign: 'center'
            }}>
                {props.namaMateri}
            </Text>
        </TouchableOpacity>
    )
}
export default CostumCardMateri