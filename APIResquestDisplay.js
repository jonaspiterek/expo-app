import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8080/Plone", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const json = await response.json();
      console.log(data);
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text>
          {item.title}, {item.releaseYear}
        </Text>
      )}
    </View>
  );
};

export default App;
