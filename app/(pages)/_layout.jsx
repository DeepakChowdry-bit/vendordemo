import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PagesLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='additem' options={{ headerShown: false }} />
        </Stack>
    )
}

export default PagesLayout