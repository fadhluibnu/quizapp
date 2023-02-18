import * as React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StatusBar, ScrollView, Image, ToastAndroid, TouchableOpacity } from 'react-native';
// import { Svg, G, Rect, Defs, } from 'react-native-svg';
import { SvgUri } from 'react-native-svg';
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
import CustomButton from '../costum/CustomButton.js';
import CostumCardMateri from '../costum/CostumCardMateri.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  const heightTopBar = StatusBar.currentHeight;
  return (
    <SafeAreaView style={{ position: 'relative', flex: 1, backgroundColor: '#41B2E0' }}>
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 10,
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 35,
        zIndex: 9999,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        borderBottomWidth: 2,
        borderEndWidth: 1,
      }}>
        <View style={{ backgroundColor: "green", position: "absolute", left: 10, right: 10 }}></View>
        <View style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{ width: "80%" }}>
            <View style={{
              backgroundColor: "#85D655",
              padding: 10,
              borderRadius: 40,
              borderColor: 'rgba(110, 178, 71, 1)',
              borderBottomWidth: 2,
              borderEndWidth: 1,
            }}>
              <Image
                source={require('../../assets/image/harimau-kecil.png')}
                style={{
                  width: 30,
                  height: 26.55,
                }} />
            </View>
          </View>
          <Text>Level 9</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{
          backgroundColor: 'white',
          marginTop: 84,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 10
        }}>
          {/* Section 1 */}
          <View style={{
            position: 'relative',
            left: 0,
            right: 0,
          }}>
            <View style={{
              position: 'absolute',
              left: 0,
              right: 0
            }}>
              <Image source={require('../../assets/image/orange.png')} style={{
                width: "100%",
                height: 240,
                resizeMode: 'contain'
              }} />
            </View>
            <View style={{
              position: 'absolute',
              left: 0,
              right: 0
            }}>
              <Image source={require('../../assets/image/rec-pink.png')} style={{
                width: "100%",
                height: 240,
                resizeMode: 'contain'
              }} />
            </View>
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
                  bottom: -20,
                  left: -5,
                  zIndex: 2
                }}>
                  <Image source={require('../../assets/image/panda.png')} style={{
                    width: 93,
                    height: 132.46,
                    resizeMode: 'cover'
                  }} />
                </View>
                <View style={{
                  position: 'absolute',
                  bottom: -10,
                  right: -2,
                  zIndex: 2,
                  transform: [{ rotate: '-8deg' }]
                }}>
                  <Image source={require('../../assets/image/jerapah.png')} style={{
                    width: 88.83,
                    height: 127.07,
                    resizeMode: 'cover'
                  }} />
                </View>

                {/* text */}
                <View style={{
                  position: 'relative',
                  zIndex: 3,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <View style={{
                    backgroundColor: 'transparent',
                    width: 236,
                    height: 80,
                    marginTop: 15,
                    marginLeft: 10
                  }}>
                    <Text style={{
                      fontSize: 20,
                      textAlign: 'center',
                      fontFamily: 'Rubik-Bold',
                      color: "#323232"
                    }}>Ayo!!</Text>
                    <Text style={{
                      fontSize: 20,
                      textAlign: 'center',
                      fontFamily: 'Rubik-Bold',
                      color: "#323232"
                    }}>Belajar Matematika Bersama Kita</Text>
                  </View>
                </View>
                {/* text */}
              </View>
            </View>
          </View>

          {/* section 2 */}
          <Text style={{
            fontSize: 22,
            fontFamily: 'Rubik-Bold',
            color: "#323232",
            marginTop: 16
          }}>
            Pilih Materi
          </Text>
          <View style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            gap: 20,
            flexDirection: 'row',
            marginTop: 16,
            flexWrap: 'wrap'
          }}>
            <CostumCardMateri
              decorationImage={require('../../assets/image/bilangan_bulat.png')}
              namaMateri="Bilangan Bulat"
              onPress={() => navigation.navigate("Penjumlahan")}
            />
            <CostumCardMateri
              decorationImage={require('../../assets/image/bilangan_asli.png')}
              namaMateri="Bilangan Asli"
              onPress={() => {navigation.navigate("MateriScreen")}}
            />
            <CostumCardMateri
              decorationImage={require('../../assets/image/bilangan_positif_negatif.png')}
              namaMateri="Bilangan Positif Negatif"
              onPress={() => {navigation.navigate("MateriScreen")}}
            />
          </View>

          {/* Latihan Soal */}
          <Text style={{
            fontSize: 22,
            fontFamily: 'Rubik-Bold',
            color: "#323232",
            marginTop: 16
          }}>
            Latihan Soal Soal
          </Text>
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
    </SafeAreaView>
  );
}

export default HomeScreen;