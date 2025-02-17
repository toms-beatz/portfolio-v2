import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#78735d',
                border: '#383838',
                dark: {
                    '1': '#121212',
                    '2': '#1e1e1f',
                    '3': '#373737',
                    '4': '#2b2b2c',
                    '5': '#2b2b2cbf'
                },
                light: {
                    '1': '#F8F9FA',
                    '2': '#FFFFFF',
                    '3': '#DEE2E6',
                    '4': '#212529',
                    '5': '#495057',
                },
                lightgrey: '#d6d6d6b3'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
