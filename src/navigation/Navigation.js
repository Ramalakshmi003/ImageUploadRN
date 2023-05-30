import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AxiosScreen from '../screens/AxiosScreen';
import SecondPage from '../screens/SecondPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components'
import PersonalDetails from '../screens/PersonalDetails';
import AddressDetails from '../screens/AddressDetails';
import ImagesSubmit from '../screens/ImagesSubmit';
import { MyContextProvider } from '../components/component/MyContext';
import WeekTimer from '../screens/WeekTimer';

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    dark: '#22162b',
    light: '#c6d8ff',
    button: '#ffffff',
    textLight: '#fff9ec',
    textDark: '#223127',
    input: '#724e91',
  }
}

const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MyContextProvider>
          <Stack.Navigator initialRouteName='WeekTimer'
            screenOptions={{
              cardStyle: { backgroundColor: theme.colors.light }
            }}>
            {/* <Stack.Screen
            name="Home"
            component={AxiosScreen}
            options={{
              headerTintColor: theme.colors.light,
              headerStyle: { backgroundColor: 'black', textAlign: 'center' }
            }}
          />
          <Stack.Screen
            name="Login"
            component={SecondPage}
            options={{
              headerTintColor: theme.colors.light,
              headerStyle: { backgroundColor: 'black', textAlign: 'center' }
            }}
          /> */}
            {/* <Stack.Screen
              name="Personal Details"
              component={PersonalDetails} options={{
                headerTintColor: theme.colors.light,
                headerStyle: { backgroundColor: 'black', textAlign: 'center' }
              }} />
            <Stack.Screen
              name="Address Details"
              component={AddressDetails} options={{
                headerTintColor: theme.colors.light,
                headerStyle: { backgroundColor: 'black', textAlign: 'center' }
              }} />
            <Stack.Screen
              name="Image Upload"
              component={ImagesSubmit} options={{
                headerTintColor: theme.colors.light,
                headerStyle: { backgroundColor: 'black', textAlign: 'center' }
              }} /> */}
              <Stack.Screen
              name="WeekTimer"
              component={WeekTimer} options={{
                headerTintColor: theme.colors.light,
                headerStyle: { backgroundColor: 'black', textAlign: 'center' }
              }} />
          </Stack.Navigator>
        </MyContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Navigation
