import React from 'react';
import {
        StyleSheet,
        Platform,
        StatusBar,
        SafeAreaView,
        ScrollView,
        View,
        Text,
        TextInput,
        Button,
        Image
}from 'react-native';
import color from '../config/color'

function Home(props) {
    return (
        <SafeAreaView style={styles.layar}>
            <View style={styles.bg} />
            <Text style={styles.title}>MASUK</Text>
            <View name={'login'} style={styles.pencarian}>
                <View style={styles.kolom}>
                    <Text>Lokasi Keberangkatan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder= 'Masukkan Tanggal Keberangkatan'
                    />
                </View>
                <View style={styles.kolom}>
                    <Text>Lokasi Tujuan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder= 'Masukkan Tanggal Keberangkatan'
                    />
                </View>
                <View style={styles.kolom}>
                    <Text>Tanggal Kedatangan</Text>
                    <TextInput
                        style={styles.input}
                        placeholder= 'Masukkan Tanggal Keberangkatan'
                    />
                </View>
                <View style={styles.kolom}>
                    <Button
                        color= 'orange'
                        title= 'Cari'
                        style={styles.button}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    layar:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: color.background,

    },    
    bg:{
        height: '65%',
        width: '100%',
        backgroundColor: color.hijau,
        justifyContent: 'center',
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: color.item,
        position: 'absolute',
        alignSelf: 'center',
        textAlign: 'center',
        top: '10%'
    },
    pencarian: {
        height:'60%',
        width: '75%',
        backgroundColor: color.item,
        position: 'absolute',
        alignSelf: 'center',
        top: '20%',
        borderRadius: 15,
        alignItems: 'center',
    },
    kolom: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 30,
        width: '80%',
        margin: 0,
        borderWidth: 1,
        padding: 10,
        fontSize: 12,
      },
    //   button: {
    //     width: '80%',
    //     flex: 1,
    //     color: 'orange',
    //   },
})