import { Button, Pressable, StatusBar, Text, View } from "react-native";
import styles from "./StyleSheet";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>This is the home screen.</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
