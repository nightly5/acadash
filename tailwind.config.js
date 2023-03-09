import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    daisyui: {
        themes: ["cmyk", "business"]
    },
    content: ["./src/**/*.{html,js,svelte}"],
    plugins: [daisyui]
};
