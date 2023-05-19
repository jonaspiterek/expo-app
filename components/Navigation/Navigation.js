import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import Poke from '../Poke/Poke';
import { NavigationService } from './NavigationService';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [navMenu, setNavMenu] = useState([]);

  const navService = new NavigationService();
  const getNavigation = async (service) => {
    try {
      const data = await service.getNavigation();

      console.log({ data });
      setNavMenu(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNavigation(navService);
  }, []);

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='Poke' component={Poke} />
    </Tab.Navigator>
  );
};

export default Navigation;
