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
                    '1': '#070b18',
                    '2': '#ffffff08',
                    '3': '#879ce1',
                    '4': '#1f3a91',
                    '5': '#325ada'
                },
                light: {
                    '1': '#e7ebf8',
                    '2': '#ffffff',
                    '3': '#1e3276',
                    '4': '#6c87e0',
                    '5': '#254ccb',
                },
                lightgrey: '#d6d6d6b3'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        },

        fontFamily: {
            heading: ['var(--font-freeman)'],
            body: 'Noto Traditional Nushu',
        },
        fontWeight: {
            normal: '400',
            semibold: '600',
            bold: '700',
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
