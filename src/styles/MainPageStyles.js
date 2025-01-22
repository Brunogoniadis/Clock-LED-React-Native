
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  topRightButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  welcomeText: {
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 20,
  },
  greetingText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 10,
  },
  pageTitle: {
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default styles;
