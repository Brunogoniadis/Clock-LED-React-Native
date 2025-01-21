import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const MainPage = ({ navigation }) => {
    const { t, i18n } = useTranslation();

    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            header: () => false,
        });
    }, [navigation]);
    

    return (
        <View>
            <Text>{t('welcome')}</Text>
            <Text>{t('greeting')}</Text>

            <Text>Main Page</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};

export default MainPage;
