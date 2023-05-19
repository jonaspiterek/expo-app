import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
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

  const Tab = createMaterialTopTabNavigator();

  console.log({ navMenu });
  return (
    <Tab.Navigator>
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
