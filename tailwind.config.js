/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,css}"],
	theme: {
		extend: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dracula", "holloween", "cupcake"],
		darkTheme: "holloween",
	},
};
