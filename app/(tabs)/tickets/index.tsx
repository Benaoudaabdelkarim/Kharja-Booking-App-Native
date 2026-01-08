import { StyleSheet, Text, View } from "react-native";

import { Screen } from "@/components/screen";
import { useRouter } from "expo-router";

export default function TicketsScreen() {
  const router = useRouter();

  return (
    <Screen edges={["top"]} title="Hello Traveler">
      {/* header */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 6,
          }}
        >
          <View>
            <Text>Welcome</Text>
            <Text>Lord Karim</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
