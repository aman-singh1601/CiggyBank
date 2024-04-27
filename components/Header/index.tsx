import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { EllipsisVertical, Bell } from 'lucide-react-native';

export default function Header() {
    return (
        <View style = {[styles.headerContainer]}>
        <Text style = {styles.textStyle}>CiggyBank</Text>
        <View style = {[styles.iconContainer]}>
            <TouchableOpacity>
                <Bell color="white" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
                <EllipsisVertical color="white" size={20} />
            </TouchableOpacity>
            
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 40,
        paddingHorizontal: 6
    },
    iconContainer : {
        width: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    textStyle : {
        color: 'white',
        fontSize: 16,
    }
})