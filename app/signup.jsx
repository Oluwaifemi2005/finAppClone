import React, { useState } from 'react';
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Pressable
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle } from 'react-native-svg';

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { COLORS } from "../constants/theme";

// Custom Eye Icon for Password Visibility Toggle
const EyeIcon = ({ isClosed = true }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    {isClosed ? (
      <>
        <Path
          d="M3 12C3 12 7 6 12 6C17 6 21 12 21 12"
          stroke="#093030"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <Path
          d="M6 14L4 17M10 16L9.5 19.5M14 16L14.5 19.5M18 14L20 17"
          stroke="#093030"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <Path
          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
          stroke="#093030"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx="12" cy="12" r="3" stroke="#093030" strokeWidth="2" />
      </>
    )}
  </Svg>
);

export default function SignUpScreen() {
    const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  return (
    <View className="flex-1 bg-[#00D09E]">
      <StatusBar barStyle="light-content" backgroundColor="#00D09E" />

      {/* Top Header Section */}
      <SafeAreaView edges={['top']} className="items-center justify-center pt-6 pb-8">
        <Text className="text-3xl font-extrabold text-[#093030] tracking-tight">
          Create Account
        </Text>
      </SafeAreaView>

      {/* Main Curved Card Container */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="flex-1 bg-[#F1FFF3] rounded-t-[50px] px-8 pt-8">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 32 }}
          >
            {/* Input Fields */}
            <View className="space-y-4">
              {/* Full Name */}
              <View>
                <Text className="text-sm font-bold text-[#093030] mb-1.5 pl-2">
                  Full Name
                </Text>
                <View className="w-full bg-[#DFF7E2] rounded-3xl px-5 py-3.5">
                  <TextInput
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="example@example.com"
                    placeholderTextColor="#7D8A8A"
                    autoCapitalize="words"
                    className="text-[#093030] text-base p-0"
                  />
                </View>
              </View>

              {/* Email */}
              <View>
                <Text className="text-sm font-bold text-[#093030] mb-1.5 pl-2">
                  Email
                </Text>
                <View className="w-full bg-[#DFF7E2] rounded-3xl px-5 py-3.5">
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@example.com"
                    placeholderTextColor="#7D8A8A"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="text-[#093030] text-base p-0"
                  />
                </View>
              </View>

              {/* Mobile Number */}
              <View>
                <Text className="text-sm font-bold text-[#093030] mb-1.5 pl-2">
                  Mobile Number
                </Text>
                <View className="w-full bg-[#DFF7E2] rounded-3xl px-5 py-3.5">
                  <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="+ 123 456 789"
                    placeholderTextColor="#7D8A8A"
                    keyboardType="phone-pad"
                    className="text-[#093030] text-base p-0"
                  />
                </View>
              </View>

              {/* Date Of Birth */}
              <View>
                <Text className="text-sm font-bold text-[#093030] mb-1.5 pl-2">
                  Date Of Birth
                </Text>
                <View className="w-full bg-[#DFF7E2] rounded-3xl px-5 py-3.5">
                  <TextInput
                    value={dob}
                    onChangeText={setDob}
                    placeholder="DD / MM /YYY"
                    placeholderTextColor="#7D8A8A"
                    className="text-[#093030] text-base p-0"
                  />
                </View>
              </View>

              {/* Password */}
              <View>
                <Text className="text-sm font-bold text-[#093030] mb-1.5 pl-2">
                  Password
                </Text>
                <View className="w-full bg-[#DFF7E2] rounded-3xl px-5 py-3 flex-row items-center justify-between">
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    placeholderTextColor="#7D8A8A"
                    secureTextEntry={securePassword}
                    className="flex-1 text-[#093030] text-base p-0 tracking-widest"
                  />
                  <TouchableOpacity
                    onPress={() => setSecurePassword(!securePassword)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    activeOpacity={0.7}
                  >
                    <EyeIcon isClosed={securePassword} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Confirm Password */}
              <View>
                <Text className="text-sm font-bold text-[#093030] mb-1.5 pl-2">
                  Confirm Password
                </Text>
                <View className="w-full bg-[#DFF7E2] rounded-3xl px-5 py-3 flex-row items-center justify-between">
                  <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="••••••••"
                    placeholderTextColor="#7D8A8A"
                    secureTextEntry={secureConfirmPassword}
                    className="flex-1 text-[#093030] text-base p-0 tracking-widest"
                  />
                  <TouchableOpacity
                    onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    activeOpacity={0.7}
                  >
                    <EyeIcon isClosed={secureConfirmPassword} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Terms and Conditions Notice */}
            <View className="mt-6 items-center px-4">
              <Text className="text-xs text-[#5D6B6B] text-center font-normal leading-4">
                By continuing, you agree to{'\n'}
                <Text className="font-bold text-[#093030]">Terms of Use</Text> and{' '}
                <Text className="font-bold text-[#093030]">Privacy Policy</Text>.
              </Text>
            </View>

            {/* Sign Up Button */}
            <View className="mt-6 items-center">
              <TouchableOpacity
                activeOpacity={0.8}
                className="w-full bg-[#00D09E] py-4 rounded-full items-center shadow-sm"
              >
                <Text className="text-[#093030] text-lg font-bold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Redirect to Log In */}
            <View className="mt-6 items-center">
              <Text className="text-xs text-[#093030] font-medium">
                Already have an account?{' '}
                <Pressable onPress={() => router.push("/login")}>
                    <AppText color={COLORS.blue} weight="bold" size={12}>
                        Login
                    </AppText>
                </Pressable>
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}