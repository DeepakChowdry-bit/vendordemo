import { View, Text, TextInput, Switch, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from '@expo/vector-icons/AntDesign';

const AddItem = () => {
    const [formState, setFormState] = useState({
        name: '',
        price: '',
        imageUrl: '',
        description: '',
        category: '',
        tags: '',
        serves: '',
        expiryDate: new Date(),
        type: 'veg'
    });

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(prevState => !prevState);
        setFormState(prevState => ({
            ...prevState,
            type: !isEnabled ? 'non_veg' : 'veg' // toggles between 'veg' and 'non_veg'
        }));
    };


    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const handleChange = (name, value) => {
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || formState.expiryDate;
        setShow(false);
        setFormState(prevState => ({ ...prevState, expiryDate: currentDate }));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const handleSubmit = () => {
        console.log("Form Data:", formState);
        // Add form submission logic here (e.g., API call)
    };

    return (
        <SafeAreaView className="flex-1 items-center bg-gray-100 w-full">
            <View className="h-14 justify-center items-center mt-4">
                <Text className="text-lg font-black uppercase text-gray-800">Add Item</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="w-full px-5">
                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Name</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-5 bg-white h-16"
                        placeholder="Masala dosa"
                        onChangeText={(value) => handleChange('name', value)}
                        value={formState.name}
                    />
                </View>

                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Price</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-5 bg-white h-16"
                        placeholder="₹ 99"
                        keyboardType="numeric"
                        onChangeText={(value) => handleChange('price', value)}
                        value={formState.price}
                    />
                </View>

                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Image</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-5 bg-white h-16"
                        placeholder="Image URL"
                        onChangeText={(value) => handleChange('imageUrl', value)}
                        value={formState.imageUrl}
                    />
                </View>

                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Description</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-5 bg-white h-20"
                        placeholder="Description"
                        multiline
                        onChangeText={(value) => handleChange('description', value)}
                        value={formState.description}
                    />
                </View>

                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Category</Text>
                    <View className="border border-gray-300 rounded-lg bg-white overflow-hidden">
                        <Picker
                            selectedValue={formState.category}
                            onValueChange={(value) => handleChange('category', value)}
                            className="h-12"
                        >
                            <Picker.Item label="Breakfast" value="breakfast" />
                            <Picker.Item label="Lunch" value="lunch" />
                            <Picker.Item label="Dinner" value="dinner" />
                        </Picker>
                    </View>
                </View>

                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Expiry Date</Text>
                    <View className="flex-row items-center border border-gray-300 rounded-lg px-5 bg-white h-16">
                        <Text className="flex-1 uppercase">{formState.expiryDate.toLocaleString()}</Text>
                        <TouchableOpacity onPress={() => showMode('date')} className="mr-1">
                            <AntDesign name="calendar" size={19} color="#333" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showMode('time')} className="ml-2">
                            <AntDesign name="clockcircleo" size={19} color="#333" />
                        </TouchableOpacity>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={formState.expiryDate}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChangeDate}
                            />
                        )}
                    </View>
                </View>

                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Tags</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-5 bg-white h-16"
                        placeholder="#tasty"
                        onChangeText={(value) => handleChange('tags', value)}
                        value={formState.tags}
                    />
                </View>

                <View className="my-2 gap-1">
                    <Text className="text-sm font-bold">Serves</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-5 bg-white h-16"
                        placeholder="10"
                        keyboardType="numeric"
                        onChangeText={(value) => handleChange('serves', value)}
                        value={formState.serves}
                    />
                </View>
            </ScrollView>

            <View className="flex-row items-center justify-between w-full px-4 h-24 shadow-md border-t border-zinc-200 bg-white">
                <View className="flex-row items-center gap-2">
                    <Text className="uppercase font-black">Veg</Text>
                    <Switch
                        trackColor={{ false: '#15803d', true: '#dc2626' }}
                        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text className="uppercase font-black">Non Veg</Text>
                </View>
                <TouchableOpacity className="bg-gray-800 py-4 px-10 rounded-full" onPress={handleSubmit}>
                    <Text className="text-white font-bold text-sm uppercase">Save Item</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddItem;
