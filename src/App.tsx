import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ClassLayout from './screens/ClassLayout';
import { NavigationContainer } from '@react-navigation/native';
import PerformanceSearchScreen from './screens/PerformanceSearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerformanceChartScreen from './screens/PerformanceChartScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerformanceChart" component={PerformanceChartScreen} />
    </Stack.Navigator>
  );
}

function App() {
    return (

            <NavigationContainer>
                <RootStack />
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Class" component={ClassLayout} />
                    <Tab.Screen name="Performance" component={PerformanceSearchScreen} />
                </Tab.Navigator>
            </NavigationContainer>

    );
}

export default App;