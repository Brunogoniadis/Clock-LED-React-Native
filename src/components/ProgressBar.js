import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
    return (
        <View style={styles.progressContainer}>
            <Animated.View
                style={[
                    styles.progressBar,
                    {
                        width: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0%', '100%'], 
                        }),
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    progressContainer: {
        width: '320',
        height: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 2,
        marginBottom: 20,
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 2,
    },
});

export default ProgressBar;
