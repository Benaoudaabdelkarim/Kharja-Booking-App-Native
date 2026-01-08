import { StyleSheet, Text, View } from "react-native";

import { BellIcon } from "@/components/icons/BellIcon";
import { Screen } from "@/components/screen";
import { FontSizes, FontWeights, Radius } from "@/constants/theme";
import { Image } from "expo-image";
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
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
        }}
      >
        <Image style={{ backgroundColor: "gray", width: 45, height: 50, borderRadius:Radius.lg }} />
        <View>
          <Text
            style={{
              fontFamily: FontWeights.bold,
              fontSize: FontSizes.xxl,
            }}
          >
            Welcome,
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
      <BellIcon size={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
