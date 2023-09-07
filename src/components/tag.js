import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Tag = ({title}) => {
  return (
    <View>
      <Text className="font-bold" style={{fontSize: wp(5.2)}}>{title}</Text>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({})