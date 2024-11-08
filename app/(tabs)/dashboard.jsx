import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dashboard = () => {
  return (
    <SafeAreaView className="items-center">
      <View className="items-center h-14 justify-center">
        <Text className="font-black uppercase">Dashoboard</Text>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard