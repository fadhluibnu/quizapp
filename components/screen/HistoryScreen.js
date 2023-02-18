import * as React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import CustomButton from '../costum/CustomButton';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

function HistoryScreen() {
    return (
        <View style={{
            backgroundColor: '#41B2E0',
            flex: 1
        }}>
            <ScrollView>
                <View style={{
                    height: 800,
                    backgroundColor: 'white',
                    marginTop: 50,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    padding: 10
                }}>

                    <Text style={{
                        fontFamily: 'Rubik-Medium',
                        fontSize: 20,
                        color: '#323232',
                        marginTop: 18
                    }}>Materi Pernah Dipelajari</Text>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: 20,
                        flexDirection: 'row',
                        marginTop: 16,
                        flexWrap: 'wrap'
                    }}>
                        <View style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 160,
                                height: 114,
                                backgroundColor: '#82AAE3',
                                borderRadius: 26,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <Image
                                    source={require('../../assets/image/decoration-penjumlahan.png')}
                                    style={{
                                        position: 'absolute',
                                        // top: 0,
                                        // bottom: 0,
                                        left: -30,
                                        // right: 0
                                        width: 161.33,
                                        height: 114,
                                        resizeMode: 'cover'
                                    }}
                                />
                                <Image
                                    source={require('../../assets/image/kepalaayam.png')}
                                    style={{
                                        position: 'absolute',
                                        width: 114,
                                        height: 149.74,
                                        right: -10,
                                        top: -10
                                    }}
                                />
                            </View>
                            <Text style={{
                                marginTop: 8,
                                fontFamily: "Rubik-Medium",
                                fontSize: 16,
                                color: '#323232'
                            }}>
                                Penjumlahan
                            </Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 160,
                                height: 114,
                                backgroundColor: '#82AAE3',
                                borderRadius: 26,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <Image
                                    source={require('../../assets/image/decoration-penjumlahan.png')}
                                    style={{
                                        position: 'absolute',
                                        // top: 0,
                                        // bottom: 0,
                                        left: -30,
                                        // right: 0
                                        width: 161.33,
                                        height: 114,
                                        resizeMode: 'cover'
                                    }}
                                />
                                <Image
                                    source={require('../../assets/image/kepalaayam.png')}
                                    style={{
                                        position: 'absolute',
                                        width: 114,
                                        height: 149.74,
                                        right: -10,
                                        top: -10
                                    }}
                                />
                            </View>
                            <Text style={{
                                marginTop: 8,
                                fontFamily: "Rubik-Medium",
                                fontSize: 16,
                                color: '#323232'
                            }}>
                                Penjumlahan
                            </Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 160,
                                height: 114,
                                backgroundColor: '#82AAE3',
                                borderRadius: 26,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <Image
                                    source={require('../../assets/image/decoration-penjumlahan.png')}
                                    style={{
                                        position: 'absolute',
                                        // top: 0,
                                        // bottom: 0,
                                        left: -30,
                                        // right: 0
                                        width: 161.33,
                                        height: 114,
                                        resizeMode: 'cover'
                                    }}
                                />
                                <Image
                                    source={require('../../assets/image/kepalaayam.png')}
                                    style={{
                                        position: 'absolute',
                                        width: 114,
                                        height: 149.74,
                                        right: -10,
                                        top: -10
                                    }}
                                />
                            </View>
                            <Text style={{
                                marginTop: 8,
                                fontFamily: "Rubik-Medium",
                                fontSize: 16,
                                color: '#323232'
                            }}>
                                Penjumlahan
                            </Text>
                        </View>
                    </View>


                    <Text style={{
                        fontFamily: 'Rubik-Medium',
                        fontSize: 20,
                        color: '#323232',
                        marginTop: 18
                    }}>Soal Pernah Dikerjakan</Text>
                    <View style={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                    }}>
                        <View style={{
                            position: 'relative',
                            left: 0,
                            right: 0,
                            height: 240,
                        }}>
                            <Image source={require('../../assets/image/rec-blue.png')} style={{
                                width: "100%",
                                height: 240,
                                resizeMode: 'contain'
                            }} />
                        </View>
                        <View style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                        }}>
                            <View style={{
                                backgroundColor: 'transparent',
                                height: 181,
                                width: 335,
                                borderRadius: 50,
                                marginTop: 27,
                                marginLeft: 1,
                                overflow: 'hidden',
                                position: 'relative'
                            }}>

                                <View style={{
                                    position: 'absolute',
                                    bottom: -30,
                                    left: -30,
                                    transform: [{ rotate: '25.41deg' }],
                                    zIndex: 1
                                }}>
                                    <Svg
                                        width={215}
                                        height={112}
                                        viewBox="0 0 215 112"
                                        fill="none"
                                    >
                                        <Ellipse
                                            cx={107.549}
                                            cy={55.8817}
                                            rx={107.23}
                                            ry={55.2163}
                                            fill="#85D655"
                                        />
                                    </Svg>
                                </View>
                                <View style={{
                                    position: 'absolute',
                                    bottom: -10,
                                    right: 0,
                                    transform: [{ rotate: '0deg' }]
                                }}>
                                    <Svg
                                        width={169}
                                        height={151}
                                        viewBox="0 0 169 151"
                                        fill="none"
                                    >
                                        <Path
                                            transform="rotate(54.826 176.865 .607)"
                                            fill="#41B2E0"
                                            d="M176.865 0.606827H276.865V215.79882700000002H176.865z"
                                        />
                                    </Svg>
                                </View>
                                <View style={{
                                    position: 'absolute',
                                    bottom: -10,
                                    right: -2,
                                    zIndex: 2,
                                    transform: [{ rotate: '-8deg' }]
                                }}>
                                    <Image source={require('../../assets/image/jerapah.png')} style={{
                                        width: 121.06,
                                        height: 173.19,
                                        resizeMode: 'cover'
                                    }} />
                                </View>
                                <View style={{
                                    width: 220,
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    zIndex: 4,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <View>
                                        <Text style={{
                                            fontSize: 20,
                                            color: "#323232",
                                            fontFamily: "Rubik-ExtraBold"
                                        }}>
                                            Berlatih Soal - Soal Penjumlahan
                                        </Text>
                                        <CustomButton
                                            backgroundColor="#FFFFFF"
                                            title="Ayo Mulai"
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        height: 80
                    }}></View>
                </View>
            </ScrollView>
        </View>
    )
}
export default HistoryScreen