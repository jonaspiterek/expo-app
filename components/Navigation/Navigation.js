import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationService } from './NavigationService';
import { useEffect, useState } from 'react';
import PageViewScreen from '../PageView/PageViewScreen';

const Navigation = () => {
  const [navMenu, setNavMenu] = useState([]);

  const navService = new NavigationService();
  const getNavigation = async (service) => {
    try {
      const data = await service.getNavigation();
      setNavMenu(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNavigation(navService);
  }, []);

  const Test = () => {
    return (
      <View>
        <Text>HomeTest</Text>
      </View>
    );
  };

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeTest' component={Test} />
      {navMenu.map((nav, idx) => (
        <Tab.Screen
          key={idx}
          name={nav.title}
          component={PageViewScreen}
          options={{ tabBarLabel: nav.title }}
          initialParams={{ nav }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navigation;
