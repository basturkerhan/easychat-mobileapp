import {StyleSheet} from 'react-native';

export default LayoutStyle = StyleSheet.create({
    container: {
        flex: 1,
      },
    topF1: {
        paddingHorizontal: 15,
        flex: 1,
    },
    topF2: {
        paddingHorizontal: 15,
        flex: 2,
    },
    bottomF1: {
        flex:1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: '100%',
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    bottomF2: {
        flex: 2,
        paddingHorizontal: 20,
        paddingVertical: 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fdfffd',
    },






    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },






    bigHero: {
        fontSize: 40,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    bigHeroDescription: {
        letterSpacing: 10,
        textTransform: 'uppercase',
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500'
    },

    smallHero: {
        fontWeight: 'bold',
        fontSize: 26,
        letterSpacing: 1,
        marginBottom: 10,
    },
    smallHeroDescription: {
        fontSize: 18,
        lineHeight: 30,
    },

    xsmallHero: {
        letterSpacing: 1,
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 10,
    }
});
