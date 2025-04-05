import { View } from "react-native";
import Text from "@/components/text";

export default function Search() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Search</Text>
      </View>
    </View>
  );
}
