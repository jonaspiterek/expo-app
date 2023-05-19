import { View, Text } from 'react-native';
import { PageViewService } from './PageViewService';
import { useEffect, useState } from 'react';
import styles from '../../styles/StyleSheet';

const PageViewScreen = ({ route, navigation }) => {
  const [info, setInfo] = useState([]);

  const url = route.params.nav['@id'];

  const service = new PageViewService();
  const getPageInfo = async (service) => {
    try {
      const pageInfo = await service.getPageInfo(url);

      setInfo(pageInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const tabSwitch = () => {
    navigation.addListener('focus', () => getPageInfo(service));
    navigation.addListener('tabPress', () => getPageInfo(service));
  };

  useEffect(() => {
    tabSwitch();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{info.title}</Text>
      <Text>{info.description}</Text>
    </View>
  );
};

export default PageViewScreen;
