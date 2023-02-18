import * as React from 'react';
import { Button, View, Text, Image, ScrollView, Alert } from 'react-native';

export default function CostumTitleMateri(props){
    return (
        <Text style={{
            fontFamily: 'Rubik-Bold',
            fontSize: 16,
            color: '#3D4A57',
            marginBottom: 8
        }}>
            {props.text}
        </Text>
    )
}
