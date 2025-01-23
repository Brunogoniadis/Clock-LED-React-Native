
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

    backgroundColor: 'rgba(211,55,55, 1)'

  },
  containerBlue: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

    backgroundColor: 'rgba(44,130,201, 1)'

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
  areaGreeting: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15',
    marginTop: 15,
    height:55
  },
  textGreeting: {
    color: 'white',
    fontWeight: 'bold',
    padding:0,
    margin:0,
    gap:0,
  },
});

export default styles;
