import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { StarIcon } from "@/components/icons/StarIcon";
import { TicketIcon } from "@/components/icons/TicketIcon";
import { UserIcon } from "@/components/icons/UserIcon";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].primary,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <StarIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tickets/index"
        options={{
          title: "Tickets",
          tabBarIcon: ({ color }) => <TicketIcon size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            // <IconSymbol size={28} name="paperplane.fill" color={color} />
            <UserIcon size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
