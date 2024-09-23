import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      sans: ['Poppins', 'system-ui'],
      body: ['Rubik', 'system-ui'],
      logo:["Sedan SC","Josefin Sans", 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'hero-pattern': "url('./src/assets/home-images/hero-texture.png')",
      }
    },
  },
  plugins: [],
});