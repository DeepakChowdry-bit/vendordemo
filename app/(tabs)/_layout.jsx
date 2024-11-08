import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import CustomTabBar from "../../components/CustomTabBar";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Orders",
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: "Insights",
                }}
            />
            <Tabs.Screen
                name="menu"
                options={{
                    title: "Menu",
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;
