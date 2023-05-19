import {
  Alert,
  Button,
  Pressable,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from "react-native";
import styles from "./StyleSheet";

const ProfileScreen = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the profile screen.</Text>
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert(`${colorScheme}`)}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default ProfileScreen;
