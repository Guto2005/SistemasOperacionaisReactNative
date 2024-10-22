import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import HomeScreen from './HomeScreen';
import Page1 from './Ios';
import Page2 from './Android';
 
const Stack = createNativeStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/*Define a página inicial (HomeScreen)*/}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define a rota para Page1 */}
         <Stack.Screen name="Page1" component={Page1} />
         {/* Define a rota para Page2 */}
         <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;
 