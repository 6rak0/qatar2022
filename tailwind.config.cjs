/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                qatar: {
                    primary: '#8A1538',
                    secondary: '#1A1919',
                    accent: '#262626',
                    neutral: '#3D4451',
                    'base-100': '#EEEEE4',
                    'base-content': '#8A1538',
                    info: '#00CFB7',
                    success: '#21CA51',
                    warning: '#FF6052',
                    error: '#DE1B8D'
                }
            }
        ]
    }
};
