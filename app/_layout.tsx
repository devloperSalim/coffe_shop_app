
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

import { useColorScheme } from '@/hooks/useColorScheme';
import { HeaderTitle } from '@react-navigation/elements';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <>
    
        <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.text,
        headerShadowVisible: false,
        headerTitleAlign: 'center', // optional: centers all titles
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Menu"
        options={{ headerShown: true, title: '☕ Coffee Shop Menu' }}
      />

      <Stack.Screen
        name="contact"
        options={{ headerShown: true, title: '📞 Contact Us' }}
      />

      <Stack.Screen
        name="+not-found"
        options={{ headerShown: false }}
      />
    </Stack>

    <StatusBar style="auto" />

   </>
  );
}
