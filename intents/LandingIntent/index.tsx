import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import LandingCard from '../../components/LandingCard'

export default function Landing() {
  return (
    <View>
      <Header/>
      <Text>Landing</Text>
      <LandingCard/>
    </View>
  )
}

const styles = StyleSheet.create({
    
})