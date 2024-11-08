import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
    return (
        <SafeAreaView className="items-center">
            <View className="items-center h-14 justify-center">
                <Text className="font-black uppercase">Profile</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile