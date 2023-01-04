// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animations from './src/Animations';
import CameraCustom from './src/camera/CameraCustom';
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import theme from './src/utils/Theme';
import { ShopifyTheme } from './src/shpify/ShopifyTheme';
import MaterialUI from './src/materialui/MaterialUI';
import { AppEventsLogger, Settings } from 'react-native-fbsdk-next';
import { useEffect } from 'react';
import Sensors from './src/sensors/Sensors';

function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const initializeSDK = async () => {
      await Settings.setAdvertiserTrackingEnabled(true);
      Settings.initializeSDK();
      AppEventsLogger.logPurchase(15, "USD", { param: "value" });

      // Log standard event. e.g. completed registration
      AppEventsLogger.logEvent(AppEventsLogger.AppEvents.CompletedRegistration, {
        [AppEventsLogger.AppEventParams.RegistrationMethod]: "dinesh.tomar@crownstack.com",
      });
    }

    initializeSDK();

  }, [])


  return (
    <View style={{ flex: 1, marginHorizontal: 32, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity style={{ height: 60, borderRadius: 30, alignItems: 'center', marginVertical: 12, width: '100%', backgroundColor: '#dddddd', justifyContent: 'center', }}
        onPress={() => navigation.navigate('Animations')}>
        <Text>Animations</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 60, borderRadius: 30, alignItems: 'center', marginVertical: 12, width: '100%', backgroundColor: '#dddddd', justifyContent: 'center', }}
        onPress={() => navigation.navigate('CameraCustom')}>
        <Text>Custom Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 60, borderRadius: 30, alignItems: 'center', marginVertical: 12, width: '100%', backgroundColor: '#dddddd', justifyContent: 'center', }}
        onPress={() => navigation.navigate('ShopifyTheme')}>
        <Text>Shopify Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 60, borderRadius: 30, alignItems: 'center', marginVertical: 12, width: '100%', backgroundColor: '#dddddd', justifyContent: 'center', }}
        onPress={() => navigation.navigate('MaterialUI')}>
        <Text>Material UI</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ height: 60, borderRadius: 30, alignItems: 'center', marginVertical: 12, width: '100%', backgroundColor: '#dddddd', justifyContent: 'center', }}
        onPress={() => navigation.navigate('Sensors')}>
        <Text>Sensors</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Animations" component={Animations} />
          <Stack.Screen name="ShopifyTheme" component={ShopifyTheme} />
          <Stack.Screen name="CameraCustom" component={CameraCustom} />
          <Stack.Screen name="MaterialUI" component={MaterialUI} />
          <Stack.Screen name="Sensors" component={Sensors} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  );
}

export default App;