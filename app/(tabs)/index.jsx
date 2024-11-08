import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { orders } from '../../constants/orders'

const Orders = () => {
  return (
    <SafeAreaView className="items-center">
      <View className="items-center h-14 justify-center">
        <Text className="font-black uppercase">Orders</Text>
      </View>
      <View className="w-11/12">
        {orders.map((order) => (
          <View key={order.orderId} className="p-4 shadow-xl shadow-zinc-400 bg-white">
            <View className="flex-row items-center justify-between my-2">
              <Text className="text-sm uppercase">id: {order.orderId}</Text>
              <Text className="text-xs tracking-wider uppercase">Order from <Text className="font-black">{order.customer}</Text></Text>
            </View>
            <View className="flex-row items-center justify-between my-2">
              <Text className="text-lg font-black">{order.dish}</Text>
              <Text>x1</Text>
            </View>
            <View className="flex-row items-center justify-between my-2">
              <Text className="text-xs uppercase">{order.address}</Text>
              <Text className="px-3 py-1.5 border text-xs">{order.status}</Text>
            </View>
          </View>
        ))}

      </View>
    </SafeAreaView>
  )
}

export default Orders