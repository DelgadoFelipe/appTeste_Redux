import { StyleSheet, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContadorRedux from './src/contadorRedux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import TesteView1 from './src/testeView1';
import TesteView2 from './src/testeView2';
import LoginView from './src/loginView';

const Stack = createNativeStackNavigator();

function App() {
  
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="testeView1" component={TesteView1}/> */}
          {/* <Stack.Screen name="testeView2" component={TesteView2}/> */}
          <Stack.Screen name="loginView" component={LoginView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
