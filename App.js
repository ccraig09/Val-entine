import React, { useRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  SafeAreaView,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
export default function App() {
  const animation = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollView = useRef(new Animated.Value(width)).current;
  const [page, setPage] = useState(0);
  const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

  const pages = [
    {
      text: "You are the reason I smile \n The only girl I want to dial \n The type of girl \n that I'd check out twice down an isle \n and for a while \n I doubted I'd ever find some one\n that can upgrade my style \n and make it so versatile",
    },
    {
      text: "And that's because You are amazing\n everything you do\n keeps me gazing\n I hope one day it's my kids\n you'll be rasing\n and it goes without saying\n that body is blazing\n",
    },
    {
      text: "That's surely because You are\n a thing of beauty\n even though you a cutie\n it's kinda hot when you're moody\n sometimes idek why you're into me\n but to love and protect you\n will forever be my duty",
    },
    {
      text: "You are this and that\n you'd be my first tat\n You are the complete package\n ",
    },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
  ];

  useEffect(() => {
    if (page > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(scrollView, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [page]);

  return (
    <LinearGradient style={styles.container} colors={["white", "pink"]}>
      <SafeAreaView style={{ alignItems: "center" }}>
        <StatusBar style="auto" />
        {page === 0 && (
          <>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: 250,
                height: 250,
              }}
              source={require("./assets/vDay.json")}
            />
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <LottieView
                autoPlay
                ref={animation}
                style={{
                  width: 400,
                  height: 400,
                }}
                source={require("./assets/heart.json")}
              >
                <Image
                  style={styles.image}
                  source={require("./assets/valIcon.png")}
                />
              </LottieView>
              <Button title="Begin" onPress={() => setPage(1)} />
            </View>
          </>
        )}
        {page > 0 && (
          <Animated.ScrollView
            style={{ opacity: fadeAnim, marginLeft: scrollView }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            pagingEnabled
            snapToInterval={width * 0.85 + 10}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            contentInset={{
              top: 0,
              left: SPACING_FOR_CARD_INSET,
              bottom: 0,
              right: SPACING_FOR_CARD_INSET,
            }}
          >
            {pages.map((page, index) => (
              <View key={index} style={styles.textContainer}>
                <View style={styles.poemTextContainer}>
                  <Text style={styles.poemText}>{page.text}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Text>
                    {index + 1} / {pages.length}
                  </Text>
                  <View style={{ marginTop: 30 }}>
                    <Button title="Home" onPress={() => setPage(0)} />
                  </View>
                </View>
              </View>
            ))}
          </Animated.ScrollView>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    marginTop: height / 5.5,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  textContainer: {
    width: width * 0.85,
    height: height * 0.6,
    borderRadius: 10,
    borderStyle: "dotted",
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5F5DC",
    margin: 5,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  poemTextContainer: {
    height: height * 0.4,
  },
  poemText: {
    textAlign: "center",
    lineHeight: 40,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Noteworthy-Bold",
  },
});
