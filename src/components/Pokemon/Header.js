import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
import Pokemon from '../../screens/Pokemon';

export default function Header(props) {
    const {name, order, image, type} = props;
    const color = getColorByPokemonType(type);

    const bgStyle = [{ backgroundColor: color, ...styles.background }];

    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView >
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
                </View>
                <View style={styles.containerImage}>
                    <Image source={{ url: image }} style={styles.image} />
                </View>
                <View style={styles.bgInformation} />
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: 450,
        position: 'absolute',
    },
    bgInformation:{
        width: '100%',
        height: 400,
        backgroundColor: '#FFF',
        position: 'relative',
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        marginRight: 20,
        marginLeft: 20,
    },
    name:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
    },
    order:{
        color: '#FFF',
        fontSize: 20,
    },
    containerImage:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 55,
        zIndex: 1,
    },
    image: {
        width: 250,
        height: 250,
    }
})