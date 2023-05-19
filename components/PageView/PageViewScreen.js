import { View, Text } from 'react-native';
import { PageViewService } from './PageViewService';
import { useEffect, useState } from 'react';

const PageViewScreen = ({ route, navigation }) => {
  const [info, setInfo] = useState([]);

  const url = route.params.nav['@id'];
  const service = new PageViewService();
  const getPageInfo = async (service) => {
    try {
      const pageInfo = await service.getPageInfo(url);

      console.log({ pageInfo });
      setInfo(pageInfo);
    } catch (error) {
      console.warn('error');
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', () => {
      // Call your API request function here
      getPageInfo(service);
    });

    return unsubscribe;
  }, [navigation]);

  // console.log({ page });
  console.log({ info });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{info.title}</Text>
    </View>
  );
};

export default PageViewScreen;
