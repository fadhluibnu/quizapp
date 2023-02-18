import * as React from 'react';
import { Button, View, Text, Image, ScrollView, Alert } from 'react-native';

function CostumBodyText(props){
    return (
        <Text style={{
            fontFamily: "Rubik-Regular",
            fontSize: 16,
            color: "#3D4A57",
            marginBottom: 8,
        }}>
            {props.text}
        </Text>
    )
}

export default CostumBodyText