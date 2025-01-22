import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../styles/MainPageStyles';
import clockStyles from '../styles/DigitalClassicStyle';
import i18n from '../i18n/i18n';

import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

import { I18nextProvider } from 'react-i18next';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const MainPage = ({ navigation }) => {
    const { t, i18n } = useTranslation();

    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            header: () => false,
        });
    }, [navigation]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const dateToday = new Date();
            let hr = dateToday.getHours();
            let min = dateToday.getMinutes();
            let sec = dateToday.getSeconds();

            if (hr < 10) hr = '0' + hr;
            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;

            setHours(hr);
            setMinutes(min);
            setSeconds(sec);
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);

    }, []);



    return (
        <I18nextProvider i18n={i18n}>
            <AnimatedLinearGradient
                colors={["rgba(51,0,65, 1)", "rgba(211,55,55, 1)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                <View style={styles.topRightButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.buttonText}>Go to Profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={clockStyles.relogio}>
                    <View style={clockStyles.timeSection}>
                        <Text style={clockStyles.timeText}>{hours}</Text>
                        <Text style={clockStyles.pointText}>:</Text>
                        <Text style={clockStyles.timeText}>{minutes}</Text>
                        <Text style={clockStyles.pointText}>:</Text>
                        <Text style={clockStyles.timeText}>{seconds}</Text>
                    </View>
                    <View style={clockStyles.labelArea}>
                        <Text style={clockStyles.labelText}>
                            {t('hours')}
                        </Text>

                        <Text style={clockStyles.labelText}>
                            {t('minutes')}
                        </Text>

                        <Text style={clockStyles.labelText}>
                            {t('seconds')}
                        </Text>
                    </View>
                </View>
            </AnimatedLinearGradient>
        </I18nextProvider>
    );
};

export default MainPage;
