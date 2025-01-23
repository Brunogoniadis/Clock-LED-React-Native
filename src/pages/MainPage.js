import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../styles/MainPageStyles';
import clockStyles from '../styles/DigitalClassicStyle';
import i18n from '../i18n/i18n';
import ButtonStart from '../components/buttonStart';
import ProgressBar from '../components/ProgressBar';

import { LinearGradient } from 'expo-linear-gradient';
import { I18nextProvider } from 'react-i18next';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const MainPage = ({ navigation }) => {
    const { t, i18n } = useTranslation();

    // Tempo
    const POMODORO_TIME = 30; // 25 minutos = 1500 // Para testes = 20
    const BREAK_TIME = 3; // 5 minutos = 300 // Para testes = 10
    const LONG_BREAK_TIME = 30; // 15 minutos = 900 // Para testes = 30

    const [secondsElapsed, setSecondsElapsed] = useState(POMODORO_TIME);
    const [isRunning, setIsRunning] = useState(false);
    const [isFocusTime, setIsFocusTime] = useState(true); 
    const [cyclesCompleted, setCyclesCompleted] = useState(0); 
    const progress = new Animated.Value(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            header: () => false,
        });
    }, [navigation]);

    useEffect(() => {
        let intervalId;
    
        if (isRunning && secondsElapsed > 0) {
            intervalId = setInterval(() => {
                setSecondsElapsed(prev => prev - 1);
            }, 1000);
    
            const progressValue = (POMODORO_TIME - secondsElapsed) / POMODORO_TIME;
            progress.setValue(progressValue);
        } else if (secondsElapsed === 0) {
            clearInterval(intervalId);
    
            Alert.alert(t('Time is up!'), t('The timer has finished.'), [
                {
                    text: t('OK'),
                    onPress: () => {
    
                        if (isFocusTime) {
                            setIsFocusTime(false);
                            setCyclesCompleted(prev => prev + 1);
    
                            progress.setValue(0);
    
                            setSecondsElapsed(cyclesCompleted >= 3 ? LONG_BREAK_TIME : BREAK_TIME);
                        } else {
                            setIsFocusTime(true);
                            setSecondsElapsed(POMODORO_TIME);
    
                            progress.setValue(0);
                        }
    
                        setIsRunning(true);
                    },
                },
            ]);
        }
    
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isRunning, secondsElapsed, isFocusTime, cyclesCompleted]);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const pad = (num) => (num < 10 ? `0${num}` : num);

        return {
            minutes: pad(minutes),
            seconds: pad(seconds),
        };
    };

    const { minutes, seconds } = formatTime(secondsElapsed);

    return (
        <I18nextProvider i18n={i18n}>
            <AnimatedLinearGradient
                colors={["rgba(51,0,65, 1)", "rgba(211,55,55, 0)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 3 }}
                style={isFocusTime ? styles.container : styles.containerBlue}
            >

                <View style={styles.topRightButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.buttonText}>Go to Profile</Text>
                    </TouchableOpacity>
                </View>

                <ProgressBar progress={progress} />

                <View style={clockStyles.relogio}>
                    <View style={clockStyles.timeSection}>
                        <View style={clockStyles.timeLabel}>
                            <Text style={clockStyles.timeText}>{minutes}</Text>
                            <Text style={clockStyles.labelText}>
                                {t('minutes')}
                            </Text>
                        </View>

                        <Text style={clockStyles.pointText}>:</Text>

                        <View style={clockStyles.timeLabel}>
                            <Text style={clockStyles.timeText}>{seconds}</Text>
                            <Text style={clockStyles.labelText}>
                                {t('seconds')}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.areaGreeting}>
                    {isRunning && (
                        <Text style={styles.textGreeting}>
                            {isFocusTime ? t('Focus time, stay sharp!') : t('Take a break, relax!')}
                        </Text>
                    )}
                </View>

                <ButtonStart
                    isRunning={isRunning}
                    onPress={() => setIsRunning(!isRunning)}
                />
            </AnimatedLinearGradient>
        </I18nextProvider>
    );
};

export default MainPage;
