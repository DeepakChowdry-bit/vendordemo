import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "../global.css"
const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='(pages)' options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout