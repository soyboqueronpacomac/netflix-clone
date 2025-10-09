import type { Config } from "tailwindcss";

const config: Config = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
    extend: {
        colors: {
            pacoflix: "#E50914",        // 🔴 rojo principal
            "pacoflix-dark": "#B00610", // tono oscuro
            "pacoflix-light": "#FF3B47", // tono claro
        },
        backgroundImage: {
            gradientVideo: "linear-gradient(180deg, hsla(0, 0%, 8%, 0), hsla(0, 0%, 8%, .15), hsla(0, 0%, 8%, .35), hsla(0, 0%, 8%, .58)44%, #171717 68%, #171717);",
        }
    },
 },
 plugins: []   
}

export default config