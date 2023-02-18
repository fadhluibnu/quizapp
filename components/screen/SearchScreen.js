import * as React from 'react';
import { useState } from "react";
import { Image, Text, TextInput, View } from 'react-native';

function SearchScreen() {
    const [searchStatus, setSearchStatus] = useState('0')
    const [searchValue, setSearchValue] = useState('')
    // let component = <NoSearch />
    // React.useEffect(() => {
    //     if (searchStatus == '1') {
    //         component = <OnSearch pesan={searchValue} />
    //     } else {
    //         component = <NoSearch />
    //     }
    // }, [searchStatus])

    return (
        <View style={{
            padding: 10
        }}>
            <View style={{
                backgroundColor: 'white',
                elevation: 2,
                padding: 24,
                paddingTop: 18,
                paddingBottom: 18,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 50
            }}>
                <Image source={require('../../assets/image/search-icon-fill.png')} style={{
                    width: 20,
                    height: 20
                }} />
                <TextInput
                    onChangeText={(text) => {
                        let len_text = text.split('').length
                        setSearchStatus(`${len_text}`)
                        setSearchValue(text)
                    }}
                    placeholder='Cari quiz atau materi' style={{
                        backgroundColor: 'white',
                        flex: 1,
                        marginLeft: 10,
                        padding: 1
                    }}
                />
            </View>
            {searchStatus == '0' ? <NoSearch /> : <OnSearch pesan={searchValue} />}
        </View>
    )
}
function NoSearch() {
    return (
        <View>
            <Text style={{
                marginTop: 16,
                fontFamily: 'Rubik-Medium',
                fontSize: 20,
                color: '#323232'
            }}>Riwayat</Text>
            <View style={{
                display: 'flex',
                marginTop: 14,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Image source={require('../../assets/image/clock-icon.png')} style={{
                    width: 18,
                    height: 18,
                    resizeMode: 'cover'
                }} />
                <Text style={{
                    flex: 1,
                    fontFamily: 'Rubik-Medium',
                    fontSize: 16,
                    color: '#666666',
                    marginLeft: 11
                }}>Penjumlahan</Text>
                <Image source={require('../../assets/image/arrow-up-left.png')} style={{
                    width: 10,
                    height: 10,
                    resizeMode: 'cover'
                }} />
            </View>
        </View>
    )
}

function OnSearch(props) {
    return (
        <Text>{props.pesan}</Text>
    )
}

export default SearchScreen