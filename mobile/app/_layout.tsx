import { Stack } from "expo-router";
import { ThemeProvider } from "@/components/theme-provider";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="(home)"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="about"
          options={{ title: "About", headerShown: true }}
        />
        <Stack.Screen
          name="contact/index"
          options={{ title: "Contact", headerShown: true }}
        />
      </Stack>
    </ThemeProvider>
  );
}
