import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(home)/index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="about"
        options={{ title: "About", headerShown: true }}
      />
      <Stack.Screen
        name="contact"
        options={{ title: "Contact", headerShown: true }}
      />
    </Stack>
  );
}
