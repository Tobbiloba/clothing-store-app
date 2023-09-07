import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
const Navbar = () => {

  return (
    <View className="mt-8 px-6 flex flex-row justify-between">
      <Feather name="grid" size={22} color="gray" />
      <Text className="text-[20px] font-mono font-bold">TOBBIE</Text>
      <Feather name="shopping-bag" size={22} color="gray" />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
