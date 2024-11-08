import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {
    return (
        <View>
            <Link href={"/(tabs)/"}>Home</Link>
        </View>
    )
}

export default index