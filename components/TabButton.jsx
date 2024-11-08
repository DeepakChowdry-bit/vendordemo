import React, { useEffect } from "react";
import { Image, Pressable, Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { icons } from "../constants";

const TabButton = (props) => {
  const { isFocused, label, routeName } = props;

  const color = isFocused ? "#111" : "#777";

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 500 });
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const topValue = interpolate(scale.value, [0, 1], [1, 7]);
    return {
      transform: [{ scale: scaleValue }],
      top: topValue,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity: opacityValue,
    };
  });

  // Updated icon function to use color
  const icon = {
    index: (color) => (
      <Image
        source={icons.widget}
        style={{ width: 28, height: 28, tintColor: color }}
      />
    ),

    menu: (color) => (
      <Image
        source={icons.menu}
        style={{ width: 28, height: 28, tintColor: color }}
      />
    ),
    profile: (color) => (
      <Image
        source={icons.profile}
        style={{ width: 28, height: 28, tintColor: color }}
      />
    ),
    dashboard: (color) => (
      <Image
        source={icons.insights}
        style={{ width: 28, height: 28, tintColor: color }}
      />
    ),
  };

  const IconComponent = icon[routeName] || (() => <Text>?</Text>);

  return (
    <Pressable
      {...props}
      className={`w-1/5 justify-center items-center gap-1 h-full ${isFocused ? "border-t border-[#111]" : ""
        }`}
    >
      <Animated.View style={[animatedIconStyle]} className="">
        {IconComponent(color)}
      </Animated.View>
      <Animated.Text
        style={[
          {
            color: isFocused ? "#111" : "#777",
            fontSize: 8,
            textTransform: "uppercase",
            fontWeight: "700",
          },
          animatedTextStyle,
        ]}
        className=""
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabButton;
