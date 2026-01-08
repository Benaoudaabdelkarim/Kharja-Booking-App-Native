import React from "react";
import { StyleSheet, Text, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, FontSizes, FontWeights, Spacing } from "../constants/theme";

type ScreenProps = ViewProps & {
  title?: string;
  padded?: boolean;
  edges?: ("top" | "bottom" | "left" | "right")[];
};

export function Screen({
  title,
  padded = true,
  edges = ["top", "bottom"],
  style,
  children,
  ...rest
}: ScreenProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={[styles.safeArea, padded && styles.padded, style]}
      {...rest}
    >
      {/* Auto Title */}
      {title && (
        <Text
          style={{
            fontFamily: FontWeights.ultra,
            fontSize: FontSizes.xxl,
            marginBottom: Spacing.lg,
          }}
        >
          {title}
        </Text>
      )}

      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  padded: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
  },
});
