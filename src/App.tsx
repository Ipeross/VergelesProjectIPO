import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ClassLayout from './screens/ClassLayout';
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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Class" component={ClassLayout} />
        <Tab.Screen 
          name="Performance" 
          component={PerformanceStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;