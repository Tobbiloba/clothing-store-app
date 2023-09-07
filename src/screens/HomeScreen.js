import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../action/product'
import { StatusBar } from 'expo-status-bar'

import Navbar from '../components/Navbar'
import BrandCard from '../components/brandCard'
import Tag from '../components/tag'
const HomeScreen = () => {
    const dispatch = useDispatch()
    const testing = useSelector((state) => state?.productList)
    console.log(testing)

    useEffect(() => {
        dispatch(listProducts())
    }, [])

  return (
    <View className="w-[100vw] h-[110vh] bg-white">
      <StatusBar style='dark' />
      <Navbar />
      <View className="flex flex-row px-6 mt-4 flex-wrap justify-between">
        <BrandCard name="TRENDING" bg="bg-yellow-400"/>
        <BrandCard name="SALE" bg="bg-red-400"/>
        <BrandCard name="NIKE" bg="bg-slate-400"/>
        <BrandCard name="ADIDAS" bg="bg-blue-400"/>
      </View>
      <View className="px-6 my-8">
        <Tag title="POPULAR PRODUCTS"/>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})