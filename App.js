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
  const [page, setPage] = useState(0);
  const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

  const pages = [
    { text: "You are the cause of smiles \n every day" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
    { text: "so so much" },
  ];

  const scrollView = useRef();
  useEffect(() => {
    if (page > 0) {
      Animated.timing(fadeAnim, {
        toValue: 1,
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
            style={{ opacity: fadeAnim }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ref={Animated.scrollView}
            horizontal
            // onsc={}
            pagingEnabled
            snapToInterval={width * 0.8 + 10}
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
                <View>
                  <Text style={{ textAlign: "center" }}>{page.text}</Text>
                </View>
                <View style={{}}>
                  <Text>
                    {index + 1} / {pages.length}
                  </Text>
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
    width: width * 0.8,
    height: 500,
    borderRadius: 10,
    borderStyle: "dotted",
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5F5DC",
    margin: 5,
  },
});
