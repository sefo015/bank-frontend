/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bankPrimary: '#1C2E24',   // Main background and panels
                bankAccent: '#D4AF37',    // Buttons, accents, cards (Gold)
                bankLight: '#F5F5F0',     // Texts and details
                bankCard: '#253C2F',      // A slightly lighter green tone for panels and cards
            },
        },
    },
    plugins: [],
}