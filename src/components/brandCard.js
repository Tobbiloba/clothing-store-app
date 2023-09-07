import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Fontisto } from '@expo/vector-icons';
const BrandCard = ({name, bg}) => {
  return (
    <View style={{width: wp(40), height: wp(40)}} className={`overflow-hidden justify-center rounded-2xl pl-6 mt-7 ${bg}`}>
      <Text className="text-[21px] text-white font-bold">{name}</Text>
      <Text className="text-[21px] text-white font-bold">PRODUCTS</Text>
      <View className='relative left-' style={{height: wp(12)}}>
        <Text className="opacity-[0.2] text-white font-bold" style={{fontSize: wp(12)}}>Tobbie Store</Text>
      </View>
      <View className="flex items-end pr-6">
        <Fontisto name="arrow-right-l" size={30} color="white" />
      </View>

      
      
    </View>
  )
}

export default BrandCard

const styles = StyleSheet.create({})