import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  

const ButtonStart = ({ isRunning, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.button} 
            onPress={onPress}
        >
            <Icon 
                name={isRunning ? 'stop' : 'play'}  
                size={20}  
                color="#fff" 
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',  
        width: 60, 
        height: 60, 
        borderRadius: 30,  
        borderWidth: 2,  
        borderColor: '#fff', 
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
});

export default ButtonStart;
