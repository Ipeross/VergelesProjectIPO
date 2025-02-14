import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PerformanceSearchScreen from './screens/PerformanceSearchScreen';
import PerformanceChartScreen from './screens/PerformanceChartScreen';
import { PerformanceStackParamList } from './types/navigation';

const Tab = createBottomTabNavigator();
const PerformanceStack = createNativeStackNavigator<PerformanceStackParamList>();

function PerformanceStackScreen() {
  return (
    <PerformanceStack.Navigator>
      <PerformanceStack.Screen
        name="PerformanceSearch"
        component={PerformanceSearchScreen}
        options={{ headerShown: false }}
      />
      <PerformanceStack.Screen
        name="PerformanceChart"
        component={PerformanceChartScreen}
        options={{ title: 'Rendimiento' }}
      />
    </PerformanceStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70,
            backgroundColor: '#E6E1F5',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarActiveTintColor: '#5D3A9B',
          tabBarInactiveTintColor: '#8F80BC',
          headerStyle: {
            backgroundColor: '#8F80BC', // Cambia el color de fondo de la AppBar
          },
          headerTintColor: '#E6E1F5', // Cambia el color del texto en la AppBar
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Performance"
          component={PerformanceStackScreen}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;