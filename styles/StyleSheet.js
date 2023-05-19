import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    marginHorizontal: 'auto',
    width: 400,
  },
  row: {
    flexDirection: 'row',
  },
  // Button
  buttonText: {
    color: '#050505',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  buttonCurrent: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  // List
  text: {
    textAlign: 'center',
  },
});

export default styles;
