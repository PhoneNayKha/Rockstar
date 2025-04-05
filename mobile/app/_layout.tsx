import { Stack } from "expo-router";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </ThemeProvider>
  );
}
