import * as React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

function CustomBackNavigation(props) {
    return (
        <View
            style={{
                left: 0,
                right: 0,
                marginStart: 6,
                marginEnd: 6,
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 16,
                padding: 22,
                paddingTop: 13,
                paddingBottom: 13,
                display: 'flex',
                flexDirection: 'row',
                position: 'absolute',
                zIndex: 99999
            }}>
            <TouchableOpacity
                onPress={props.onPress}>
                <Image source={require('../../assets/image/back-button.png')} style={{
                    width: 23,
                    height: 17,
                    resizeMode: 'cover'
                }} />
            </TouchableOpacity>
            <Text style={{
                fontFamily: "Rubik-Bold",
                fontSize: 18,
                color: '#3D4A57',
                marginStart: 16
            }}>{props.judulMateri}</Text>
        </View>
    )
}
export default CustomBackNavigation