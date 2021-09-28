const colors = require('tailwindcss/colors')

function makeVariable(dict, name) {
    Object.keys(dict).map(function(key, index) {
        dict[key] = `var(${name(key)}, ${dict[key]})`;  
    });
    return dict;
}

function prepColorDict(dict) {
    dict["000"] = "white";
    return dict;
}

function defaultColorMap() {
    return {
        neutral: colors.coolGray,
        critical: colors.red,
        warning: colors.amber,
        positive: colors.green,
        info: colors.blue,
        urge: colors.violet,
    }
}

function wrapColors() {
    let obj = defaultColorMap();
    for (let key of Object.keys(obj)) {
        obj[key] = makeVariable(prepColorDict(obj[key]), name => `--color-${key}-${name}`);
    }
    return obj;
}

module.exports = {
    purge: [],
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            black: '#000',
            white: '#fff',

            ...wrapColors()
        },
        spacing: {
            'px': 'var(--spacing-px, 1px)',
            '0': 'var(--spacing-0, 0)',
            '1': 'var(--spacing-1, 0.25rem)',
            '2': 'var(--spacing-2, 0.5rem)',
            '3': 'var(--spacing-3, 0.75rem)',
            '4': 'var(--spacing-4, 1rem)',
            '5': 'var(--spacing-5, 1.25rem)',
            '6': 'var(--spacing-6, 1.5rem)',
            '8': 'var(--spacing-8, 2rem)',
            '10': 'var(--spacing-10, 2.5rem)',
            '12': 'var(--spacing-12, 3rem)',
            '16': 'var(--spacing-16, 4rem)',
            '20': 'var(--spacing-20, 5rem)',
            '24': 'var(--spacing-24, 6rem)',
            '32': 'var(--spacing-32, 8rem)',
            '40': 'var(--spacing-40, 10rem)',
            '48': 'var(--spacing-48, 12rem)',
            '56': 'var(--spacing-56, 14rem)',
            '64': 'var(--spacing-64, 16rem)',
        },
        backgroundColor: theme => theme('colors'),
        backgroundOpacity: theme => theme('opacity'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        borderColor: theme => ({
            ...theme('colors'),
            DEFAULT: theme('colors.neutral.300', 'currentColor'),
        }),
        borderOpacity: theme => theme('opacity'),
        borderRadius: {
            none: 'var(--border-radius-none, 0)',
            sm: 'var(--border-radius-sm, 0.125rem)',
            DEFAULT: 'var(--border-radius-default, 0.25rem)',
            md: 'var(--border-radius-md, 0.375rem)',
            lg: 'var(--border-radius-lg, 0.5rem)',
            xl: 'var(--border-radius-xl, 1rem)',
            full: 'var(--border-radius-full, 9999px)',
        },
        borderWidth: {
            DEFAULT: 'var(--border-width-default, 1px)',
            '0': 'var(--border-width-0, 0)',
            '2': 'var(--border-width-2, 2px)',
            '4': 'var(--border-width-4, 4px)',
            '8': 'var(--border-width-8, 8px)',
        },
        boxShadow: {
            'xs': 'var(--box-shadow-xs, 0 0 0 1px rgba(0, 0, 0, 0.05))',
            'sm': 'var(--box-shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05))',
            DEFAULT: 'var(--box-shadow-default, 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06))',
            'md': 'var(--box-shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06))',
            'lg': 'var(--box-shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))',
            'xl': 'var(--box-shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04))',
            '2xl': 'var(--box-shadow-2xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25))',
            'inner': 'var(--box-shadow-inner, inset 0 2px 4px 0 rgba(0, 0, 0, 0.06))',
            'outline': 'var(--box-shadow-outline, 0 0 0 3px rgba(66, 153, 225, 0.5))',
            'none': 'var(--box-shadow-none, none)',
        },
        container: {},
        cursor: {
            auto: 'auto',
            DEFAULT: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
        divideColor: theme => theme('borderColor'),
        divideOpacity: theme => theme('borderOpacity'),
        divideWidth: theme => theme('borderWidth'),
        fill: {
            current: 'currentColor',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            '0': '0',
            DEFAULT: '1',
        },
        flexShrink: {
            '0': '0',
            DEFAULT: '1',
        },
        fontFamily: {
            primary: 'var(--family-primary, "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")',
            secondary: 'var(--family-secondary, "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")',
            sans: [
                'Inter',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
            mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        },
        fontSize: {
            'xs': 'var(--font-size-xs, 0.75rem)',
            'sm': 'var(--font-size-sm, 0.875rem)',
            'base': 'var(--font-size-base, 1rem)',
            'lg': 'var(--font-size-lg, 1.125rem)',
            'xl': 'var(--font-size-xl, 1.25rem)',
            '2xl': 'var(--font-size-2xl, 1.5rem)',
            '3xl': 'var(--font-size-3xl, 1.875rem)',
            '4xl': 'var(--font-size-4xl, 2.25rem)',
            '5xl': 'var(--font-size-5xl, 3rem)',
            '6xl': 'var(--font-size-6xl, 4rem)',
        },
        fontWeight: {
            hairline: 'var(--font-weight-hairline, 100)',
            thin: 'var(--font-weight-thin, 200)',
            light: 'var(--font-weight-light, 300)',
            normal: 'var(--font-weight-normal, 400)',
            medium: 'var(--font-weight-medium, 500)',
            semibold: 'var(--font-weight-semibold, 600)',
            bold: 'var(--font-weight-bold, 700)',
            extrabold: 'var(--font-weight-extrabold, 800)',
            black: 'var(--font-weight-black, 900)',
        },
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        inset: {
            '0': '0',
            auto: 'auto',
        },
        letterSpacing: {
            tighter: 'var(--letter-spacing-tighter, -0.05em)',
            tight: 'var(--letter-spacing-tight, -0.025em)',
            normal: 'var(--letter-spacing-normal, 0)',
            wide: 'var(--letter-spacing-wide, 0.025em)',
            wider: 'var(--letter-spacing-wider, 0.05em)',
            widest: 'var(--letter-spacing-widest, 0.1em)',
        },
        lineHeight: {
            'none': 'var(--line-height-none, 1)',
            'tight': 'var(--line-height-tight, 1.25)',
            'snug': 'var(--line-height-snug, 1.375)',
            'normal': 'var(--line-height-normal, 1.5)',
            'relaxed': 'var(--line-height-relaxed, 1.625)',
            'loose': 'var(--line-height-loose, 2)',
            '3': 'var(--line-height-3, .75rem)',
            '4': 'var(--line-height-4, 1rem)',
            '5': 'var(--line-height-5, 1.25rem)',
            '6': 'var(--line-height-6, 1.5rem)',
            '7': 'var(--line-height-7, 1.75rem)',
            '8': 'var(--line-height-8, 2rem)',
            '9': 'var(--line-height-9, 2.25rem)',
            '10': 'var(--line-height-10, 2.5rem)',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh',
        },
        maxWidth: (theme, { breakpoints }) => ({
            'none': 'none',
            'xs': 'var(--max-width-xs, 20rem)',
            'sm': 'var(--max-width-sm, 24rem)',
            'md': 'var(--max-width-md, 28rem)',
            'lg': 'var(--max-width-lg, 32rem)',
            'xl': 'var(--max-width-xl, 36rem)',
            '2xl': 'var(--max-width-2xl, 42rem)',
            '3xl': 'var(--max-width-3xl, 48rem)',
            '4xl': 'var(--max-width-4xl, 56rem)',
            '5xl': 'var(--max-width-5xl, 64rem)',
            '6xl': 'var(--max-width-6xl, 72rem)',
            full: '100%',
            ...breakpoints(theme('screens')),
        }),
        minHeight: {
            '0': '0',
            full: '100%',
            screen: '100vh',
        },
        minWidth: {
            '0': '0',
            full: '100%',
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        opacity: {
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '100': '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12',
        },
        padding: theme => theme('spacing'),
        placeholderColor: theme => theme('colors'),
        placeholderOpacity: theme => theme('opacity'),
        space: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        stroke: {
            current: 'currentColor',
        },
        strokeWidth: {
            '0': '0',
            '1': '1',
            '2': '2',
        },
        textColor: theme => theme('colors'),
        textOpacity: theme => theme('opacity'),
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw',
        }),
        zIndex: {
            auto: 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
        },
        gap: theme => theme('spacing'),
        gridTemplateColumns: {
            none: 'none',
            '1': 'repeat(1, minmax(0, 1fr))',
            '2': 'repeat(2, minmax(0, 1fr))',
            '3': 'repeat(3, minmax(0, 1fr))',
            '4': 'repeat(4, minmax(0, 1fr))',
            '5': 'repeat(5, minmax(0, 1fr))',
            '6': 'repeat(6, minmax(0, 1fr))',
            '7': 'repeat(7, minmax(0, 1fr))',
            '8': 'repeat(8, minmax(0, 1fr))',
            '9': 'repeat(9, minmax(0, 1fr))',
            '10': 'repeat(10, minmax(0, 1fr))',
            '11': 'repeat(11, minmax(0, 1fr))',
            '12': 'repeat(12, minmax(0, 1fr))',
        },
        gridColumn: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
        },
        gridColumnStart: {
            auto: 'auto',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12',
            '13': '13',
        },
        gridColumnEnd: {
            auto: 'auto',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12',
            '13': '13',
        },
        gridTemplateRows: {
            none: 'none',
            '1': 'repeat(1, minmax(0, 1fr))',
            '2': 'repeat(2, minmax(0, 1fr))',
            '3': 'repeat(3, minmax(0, 1fr))',
            '4': 'repeat(4, minmax(0, 1fr))',
            '5': 'repeat(5, minmax(0, 1fr))',
            '6': 'repeat(6, minmax(0, 1fr))',
        },
        gridRow: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
        },
        gridRowStart: {
            auto: 'auto',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
        },
        gridRowEnd: {
            auto: 'auto',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
        },
        transformOrigin: {
            center: 'center',
            top: 'top',
            'top-right': 'top right',
            right: 'right',
            'bottom-right': 'bottom right',
            bottom: 'bottom',
            'bottom-left': 'bottom left',
            left: 'left',
            'top-left': 'top left',
        },
        scale: {
            '0': 'var(--scale-0, 0)',
            '50': 'var(--scale-50, .5)',
            '75': 'var(--scale-75, .75)',
            '90': 'var(--scale-90, .9)',
            '95': 'var(--scale-95, .95)',
            '100': 'var(--scale-100, 1)',
            '105': 'var(--scale-105, 1.05)',
            '110': 'var(--scale-110, 1.1)',
            '125': 'var(--scale-125, 1.25)',
            '150': 'var(--scale-150, 1.5)',
        },
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '0': '0',
            '45': '45deg',
            '90': '90deg',
            '180': '180deg',
        },
        translate: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '-full': '-100%',
            '-1/2': '-50%',
            '1/2': '50%',
            full: '100%',
        }),
        skew: {
            '-12': '-12deg',
            '-6': '-6deg',
            '-3': '-3deg',
            '0': '0',
            '3': '3deg',
            '6': '6deg',
            '12': '12deg',
        },
        transitionProperty: {
            none: 'none',
            all: 'all',
            DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
            colors: 'background-color, border-color, color, fill, stroke',
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform',
        },
        transitionTimingFunction: {
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        transitionDuration: {
            '75': '75ms',
            '100': '100ms',
            '150': '150ms',
            '200': '200ms',
            '300': '300ms',
            '500': '500ms',
            '700': '700ms',
            '1000': '1000ms',
        },
        transitionDelay: {
            '75': '75ms',
            '100': '100ms',
            '150': '150ms',
            '200': '200ms',
            '300': '300ms',
            '500': '500ms',
            '700': '700ms',
            '1000': '1000ms',
        },
    },
    variants: {
        accessibility: ['responsive', 'hover', 'focus', 'group-hover'],
        alignContent: ['responsive', 'hover', 'focus', 'group-hover'],
        alignItems: ['responsive', 'hover', 'focus', 'group-hover'],
        alignSelf: ['responsive', 'hover', 'focus', 'group-hover'],
        appearance: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundAttachment: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundPosition: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundRepeat: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundSize: ['responsive', 'hover', 'focus', 'group-hover'],
        borderCollapse: ['responsive', 'hover', 'focus', 'group-hover'],
        borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
        borderOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
        borderRadius: ['responsive', 'hover', 'focus', 'group-hover'],
        borderStyle: ['responsive', 'hover', 'focus', 'group-hover'],
        borderWidth: ['responsive', 'hover', 'focus', 'group-hover'],
        boxShadow: ['responsive', 'hover', 'focus', 'group-hover'],
        boxSizing: ['responsive', 'hover', 'focus', 'group-hover'],
        cursor: ['responsive', 'hover', 'focus', 'group-hover'],
        display: ['responsive', 'hover', 'focus', 'group-hover'],
        divideColor: ['responsive', 'hover', 'focus', 'group-hover'],
        divideOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
        divideWidth: ['responsive', 'hover', 'focus', 'group-hover'],
        fill: ['responsive', 'hover', 'focus', 'group-hover'],
        flex: ['responsive', 'hover', 'focus', 'group-hover'],
        flexDirection: ['responsive', 'hover', 'focus', 'group-hover'],
        flexGrow: ['responsive', 'hover', 'focus', 'group-hover'],
        flexShrink: ['responsive', 'hover', 'focus', 'group-hover'],
        flexWrap: ['responsive', 'hover', 'focus', 'group-hover'],
        float: ['responsive', 'hover', 'focus', 'group-hover'],
        clear: ['responsive', 'hover', 'focus', 'group-hover'],
        fontFamily: ['responsive', 'hover', 'focus', 'group-hover'],
        fontSize: ['responsive', 'hover', 'focus', 'group-hover'],
        fontSmoothing: ['responsive', 'hover', 'focus', 'group-hover'],
        fontStyle: ['responsive', 'hover', 'focus', 'group-hover'],
        fontWeight: ['responsive', 'hover', 'focus', 'group-hover'],
        height: ['responsive', 'hover', 'focus', 'group-hover'],
        inset: ['responsive', 'hover', 'focus', 'group-hover'],
        justifyContent: ['responsive', 'hover', 'focus', 'group-hover'],
        letterSpacing: ['responsive', 'hover', 'focus', 'group-hover'],
        lineHeight: ['responsive', 'hover', 'focus', 'group-hover'],
        listStylePosition: ['responsive', 'hover', 'focus', 'group-hover'],
        listStyleType: ['responsive', 'hover', 'focus', 'group-hover'],
        margin: ['responsive', 'hover', 'focus', 'group-hover'],
        maxHeight: ['responsive', 'hover', 'focus', 'group-hover'],
        maxWidth: ['responsive', 'hover', 'focus', 'group-hover'],
        minHeight: ['responsive', 'hover', 'focus', 'group-hover'],
        minWidth: ['responsive', 'hover', 'focus', 'group-hover'],
        objectFit: ['responsive', 'hover', 'focus', 'group-hover'],
        objectPosition: ['responsive', 'hover', 'focus', 'group-hover'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        order: ['responsive', 'hover', 'focus', 'group-hover'],
        outline: ['responsive', 'hover', 'focus', 'group-hover'],
        overflow: ['responsive', 'hover', 'focus', 'group-hover'],
        padding: ['responsive', 'hover', 'focus', 'group-hover'],
        placeholderColor: ['responsive', 'focus'],
        placeholderOpacity: ['responsive', 'focus'],
        pointerEvents: ['responsive', 'hover', 'focus', 'group-hover'],
        position: ['responsive', 'hover', 'focus', 'group-hover'],
        resize: ['responsive', 'hover', 'focus', 'group-hover'],
        space: ['responsive', 'hover', 'focus', 'group-hover'],
        stroke: ['responsive', 'hover', 'focus', 'group-hover'],
        strokeWidth: ['responsive', 'hover', 'focus', 'group-hover'],
        tableLayout: ['responsive', 'hover', 'focus', 'group-hover'],
        textAlign: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
        textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
        textTransform: ['responsive', 'hover', 'focus', 'group-hover'],
        userSelect: ['responsive', 'hover', 'focus', 'group-hover'],
        verticalAlign: ['responsive', 'hover', 'focus', 'group-hover'],
        visibility: ['responsive', 'hover', 'focus', 'group-hover'],
        whitespace: ['responsive', 'hover', 'focus', 'group-hover'],
        width: ['responsive', 'hover', 'focus', 'group-hover'],
        wordBreak: ['responsive', 'hover', 'focus', 'group-hover'],
        zIndex: ['responsive', 'hover', 'focus', 'group-hover'],
        gap: ['responsive', 'hover', 'focus', 'group-hover'],
        gridAutoFlow: ['responsive', 'hover', 'focus', 'group-hover'],
        gridTemplateColumns: ['responsive', 'hover', 'focus', 'group-hover'],
        gridColumn: ['responsive', 'hover', 'focus', 'group-hover'],
        gridColumnStart: ['responsive', 'hover', 'focus', 'group-hover'],
        gridColumnEnd: ['responsive', 'hover', 'focus', 'group-hover'],
        gridTemplateRows: ['responsive', 'hover', 'focus', 'group-hover'],
        gridRow: ['responsive', 'hover', 'focus', 'group-hover'],
        gridRowStart: ['responsive', 'hover', 'focus', 'group-hover'],
        gridRowEnd: ['responsive', 'hover', 'focus', 'group-hover'],
        transform: ['responsive', 'hover', 'focus', 'group-hover'],
        transformOrigin: ['responsive', 'hover', 'focus', 'group-hover'],
        scale: ['responsive', 'hover', 'focus', 'group-hover'],
        rotate: ['responsive', 'hover', 'focus', 'group-hover'],
        translate: ['responsive', 'hover', 'focus', 'group-hover'],
        skew: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
        transitionDelay: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    corePlugins: {},
    plugins: [],
}