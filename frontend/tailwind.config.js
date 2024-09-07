import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      sans: ['Poppins', 'system-ui'],
      body: ['Rubik', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
});