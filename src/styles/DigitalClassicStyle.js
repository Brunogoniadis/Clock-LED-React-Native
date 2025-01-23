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

        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 2,
        shadowRadius: 1,
        elevation: 5,
        width:330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        letterSpacing: 2,
        padding: 30,

    },
    timeLabel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeText: {
        fontSize: 80,
        fontWeight: 'bolder',
        color: 'aliceblue',
        backgroundColor: 'rgba(5, 5, 5, .9)',
        padding: '12',
        borderRadius: 15,
    },
    pointText: {
        fontSize: 80,
        fontWeight: 'bolder',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: '8',
        marginBottom: '10%'
    },
    labelArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '30%',
        gap: 15
    },
    labelText: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        marginTop: 5,

    }

});

export default styles;
