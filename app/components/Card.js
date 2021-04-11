import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" uri={imageUrl} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={3}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: "grey",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
