import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
} from 'react-native';

const CustomButton = (props) => {
  return (
    <TouchableHighlight
     style={{
      borderRadius: 15,
      backgroundColor: props.backgroundColor,
      padding: 16,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 15,
      alignSelf: 'flex-start',
    }}>
      <Text
        style={{
          textAlign: 'center',
          color: '#323232',
          fontFamily: "Rubik-SemiBold",
          fontSize: 16,
        }}>
        {props.title}
      </Text>
    </TouchableHighlight>
    // <TouchableHighlight
    // //   onPress={props.onPress}
    //   style={{
    //     borderRadius: 15,
    //     backgroundColor: props.backgroundColor,
    //     padding: 10,
    //     marginTop: 15,
    //   }}>
    //   <Text
    //     style={{
    //       textAlign: 'center',
    //       color: '#323232',
    //       fontFamily: "Rubik-SemiBold",
    //       fontSize: 16
    //     }}>
    //     {props.title}
    //   </Text>
    // </TouchableHighlight>
  );
};

export default CustomButton;
