import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";
import { create } from "apisauce";
import Constant from "expo-constants";
import Card from "./app/components/Card";

export default function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const api = create({ baseURL: "https://sumanjay.vercel.app/" });
    const response = await api.get("udemy");
    if (!response.ok) return;
    setData(response.data);
  };
  useEffect(() => {
    getData();
  });
  const openUrl = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={{ top: Constant.statusBarHeight, padding: 10 }}>
        {data.map((dt) => (
          <Card
            key={dt.title}
            title={dt.title}
            imageUrl={dt.image}
            subTitle={dt.description}
            onPress={() => openUrl(dt.link)}
          ></Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
