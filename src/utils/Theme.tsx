import { createTheme } from '@shopify/restyle';

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#F0F2F3',
};

const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,
        cardSecondaryBackground: palette.greenPrimary,
        black: palette.black,
        white:palette.white
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        header: {
            fontWeight: 'bold',
            fontSize: 34,
            lineHeight: 42.5,
            color: 'black',
        },
        subheader: {
            fontWeight: '600',
            fontSize: 24,
            lineHeight: 36,
            color: 'white',
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
        },
    },
    cardVariants: {
        primary: {
            padding: 'm',
            borderRadius: 10,
            backgroundColor: 'cardPrimaryBackground',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 15,
            elevation: 5,
        },
        secondary: {
            padding: 'm',
            borderRadius: 10,
            backgroundColor: 'cardSecondaryBackground',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 15,
            elevation: 5,
        }
    }
});

export type Theme = typeof theme;
export default theme;