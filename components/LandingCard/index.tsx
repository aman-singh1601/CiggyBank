import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LandingCard() {
  return (
    <View style = {[styles.landingCard]}>
      <Text>LandingCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  landingCard: {
    width: '90%',
    height: 600,
    backgroundColor: "#6c37a3",
    borderRadius: 20,
    padding: 10,
    margin: "auto",
    opacity: 0.8

  }
})