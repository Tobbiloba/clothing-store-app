import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
// import Lottie from 'lottie-react-native';
import AnimatedLottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setLottieItem } from "../utils/lottie";
import { StatusBar } from "expo-status-bar";

const {width, height} = Dimensions.get('window')
const OnboardingScreen = () => {
    const navigation = useNavigation()
    const handleDone = () => {
navigation.navigate('Home')
setLottieItem('onboarded', '1')
    }
  return (
    <View style={styles.container}>
        <StatusBar style="light"/>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      containerStyles={{paddingHorizontal: 10}}
        pages={[
          {
            backgroundColor: "#f97316",
            image: (
              <View style={styles.lottieProp}>
                 <AnimatedLottieView source={require('../../assets/animations/animation11.json')} autoPlay loop />
              </View>
            ),
            title: "Explore & Save",
            subtitle: "Explore a world of quality products. Shop now for the best deals.",
          },
          {
            backgroundColor: "#1f2937",
            image: (
                <View style={styles.lottieProp}>
                    {/* <AnimatedLottieView s/> */}
                <AnimatedLottieView source={require('../../assets/animations/animation4.json')} autoPlay loop />
             </View>
            ),
            title: "Shop Smart",
            subtitle: "Simplify your shopping experience. Find what you need with ease.",
          },
          {
            backgroundColor: "#2563eb",
            image: (
                <View style={styles.lottieProp}>
                <AnimatedLottieView source={require('../../assets/animations/animation8.json')} autoPlay loop />
             </View>
            ),
            title: "Welcome Aboard",
            subtitle: "Join us in the world of endless choices. Start shopping today.",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottieProp: {
    width: width * 0.9,
    height: width,
  }
});


