// DigitalClassicStyle.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  relogio: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'transparent',
    borderRadius: 3,
    
  },
  timeSection: {
    marginLeft: '1%',
    marginRight: '1%',
    boxShadow: '0px 8px 10px rgba(0, 0, 0, .5)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    letterSpacing: 2,
    padding:35
    
  },
  timeText: {
    fontSize: 80,  
    fontWeight: 'bolder',
    color: 'aliceblue',
    backgroundColor: 'rgba(5, 5, 5, .9)',
    padding:'25',
    borderRadius: 15,     

  },
  pointText: {
    fontSize: 80,  
    fontWeight: 'bolder',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding:'8',
  },
  labelArea:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%'
  },
  labelText: {
    fontSize: 18,  
    color: '#000000', 
    textAlign: 'center',  
    marginTop: 5, 

  }

});

export default styles;
