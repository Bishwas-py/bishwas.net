
const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            fontFamily: {
                'play-fair': ['play-fair', 'sans-serif'],
                combo: ['combo', 'sans-serif'],
                lato: ['lato', 'sans-serif'],
                ssp: ['source-sans-pro', 'sans-serif'],
                inter: ['inter', 'sans-serif'],
                poppins: ['poppins', 'sans-serif'],
                ds: ['dancing-script', 'sans-serif'],
                'noto-sans': ['noto-sans', 'sans-serif'],
            },

            dropShadow: {
                'white-sm': '0 1px 2px rgba(255,255,255, 0.05)',
                'white-md': '0 4px 6px rgba(255,255,255, 0.1)',
                'white-lg': '0px 15px 15px rgba(255,255,255,1)',
                'white-xl': '0px 20px 25px rgba(255,255,255,1)',
                'dark-sm': '0 1px 2px rgba(0,0,0, 0.05)',
                'dark-md': '0 4px 6px rgba(0,0,0, 0.1)',
                'dark-lg': '0px 15px 15px rgba(0,0,0,1)',
                'dark-xl': '0px 20px 25px rgba(0,0,0,1)',
                'gold-sm': '0 1px 2px rgba(255,215,0, 0.05)',
                'gold-md': '0 4px 6px rgba(255,215,0, 0.1)',
                'gold-lg': '0px 15px 15px rgba(255,215,0,1)',
                'gold-xl': '0px 20px 25px rgba(255,215,0,1)'
            },
            colors: {
                'primary': '#202124',
                'secondary': '#3c4043',
                'accent': '#191919',
            }
        }
    },

    plugins: [],
    darkMode: 'class'
};

module.exports = config;
