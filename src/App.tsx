import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PerformanceChart from './screens/PerformanceChart';
import ClassLayout from './screens/ClassLayout';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function App() {
    return (

            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Class" component={ClassLayout} />
                    <Tab.Screen name="Performance" component={PerformanceChart} />
                </Tab.Navigator>
            </NavigationContainer>

    );
}

export default App;