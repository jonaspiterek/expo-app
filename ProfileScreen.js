import { Alert, Button, Pressable, StatusBar, Text, View } from "react-native";
import styles from "./StyleSheet";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the profile screen.</Text>
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert("You pressed a button.")}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

export default ProfileScreen;
