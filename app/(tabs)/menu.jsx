import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { orders } from '../../constants/orders'
import { useRouter } from 'expo-router'

const Menu = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="items-center flex-1 relative">
      <View className="items-center h-14 justify-center">
        <Text className="font-black uppercase">Menu</Text>
      </View>
      <View className="my-4 w-11/12">
        <TouchableOpacity className="w-full h-16 border border-zinc-600 rounded-full items-center justify-center" onPress={() => router.push("/(pages)/additem")}>
          <Text className="text-zinc-900 text-base">Add item</Text>
        </TouchableOpacity>
      </View>
      <View className="w-11/12">
          <View className="p-4 shadow-xl shadow-zinc-400 bg-white">
            <View className="flex-row items-center justify-between my-2">
              <Text className="text-sm uppercase">id: 1</Text>
              <Text className="text-xs tracking-wider uppercase">Order for <Text className="font-black">Lunch</Text></Text>
            </View>
            <View className="flex-row items-center justify-between my-2">
              <Text className="text-lg font-black">Masala dosa</Text>
              <Text className="text-sm font-bold">₹ 99</Text>
            </View>
            <View className="flex-row items-center justify-between my-2">
              <Text className="text-xs uppercase">No. 23, Govindraj nagar, Vijaynager</Text>
              <Text className="px-3 py-1.5 border text-xs">Visible</Text>
            </View>
          </View>
       

      </View>


    </SafeAreaView>
  )
}

export default Menu