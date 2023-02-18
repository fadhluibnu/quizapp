import * as React from 'react';
import { Image } from 'react-native';

export default function CostumImageMateri(props) {
    return (
        <Image source={props.Image} style={{
            width: "100%",
            height: 210,
            borderRadius: 10,
            resizeMode: 'cover',
            marginTop: 8
        }} />
    )
}