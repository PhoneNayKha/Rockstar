import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 24 }}>Hello Expo Contact</Text>
        <Link style={styles.link} href="/">
          Home
        </Link>
        <Link style={styles.link} href="/about">
          About
        </Link>
        <Link style={styles.link} href="/contact">
          Contact
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  link: { fontSize: 24, color: "blue" },
});
