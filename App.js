import React, { useRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Dimensions,
	Button,
	ScrollView,
} from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");
export default function App() {
	const animation = useRef(null);
	const [page, setPage] = useState(0);

	const pages = [
		{ text: "I love you" },
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
		setTimeout(() => {
			if (page > 0) {
				scrollView.current?.scrollTo({ x: 330, animation: true });
			}
		}, 1000);
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
					<ScrollView
						style={{}}
						showsHorizontalScrollIndicator={false}
						ref={scrollView}
						horizontal
						pagingEnabled
						snapToInterval={width - 60}
						snapToAlignment={"center"}
						decelerationRate={"fast"}
						// contentInset={{
						// 	top: 0,
						// 	left: 30,
						// 	bottom: 0,
						// 	right: 30,
						// }}
					>
						{pages.map((page, index) => (
							<View key={index} style={styles.textContainer}>
								<View>
									<Text style={{}}>{page.text}</Text>
									<Text style={{}}>{index + 1}</Text>
								</View>
							</View>
						))}
					</ScrollView>
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
		width: 200,
		height: 500,
		borderRadius: 10,
		borderStyle: "dotted",
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5F5DC",
	},
});
