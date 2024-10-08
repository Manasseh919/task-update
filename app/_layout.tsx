import { Text, View } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

const CLERK_PUBLISHABLE_KEY = process.env
  .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const InitialLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <StatusBar style="light" />

      <ActionSheetProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <InitialLayout />
        </GestureHandlerRootView>
        
      </ActionSheetProvider>
    </ClerkProvider>
  );
};

export default RootLayoutNav;
