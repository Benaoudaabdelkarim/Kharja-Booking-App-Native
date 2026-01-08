import { StyleSheet, Text, View } from "react-native";

import { NotificationIcon } from "@/components/icons/NotificationIcon";
import { Screen } from "@/components/screen";
import { FontSizes, FontWeights } from "@/constants/theme";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Screen edges={["top"]}>
      {/* header */}
      <Header />


    </Screen>
  );
}

/**
 * Home page Header
 */
function Header() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center"
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
        <View>
          <Text
            style={{
              fontFamily: FontWeights.bold,
              fontSize: FontSizes.xxl,
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              fontFamily: FontWeights.normal,
              fontSize: FontSizes.xxxl,
            }}
          >
            Abdelkarim Benaouda
          </Text>
        </View>
      </View>
      <NotificationIcon/>
    </View>
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
