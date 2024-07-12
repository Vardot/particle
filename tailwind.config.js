const tailwindForms = require("@tailwindcss/forms");

const colors = require("./tokens/colors.tailwind.json");
const customForms = require("./tokens/forms.tailwind");
const fontFamily = require("./tokens/font-family.tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  relative: true,
  content: ["./particle_theme/templates/**/*.*"],
  theme: {
    customForms,
    fontFamily,
    extend: {
      colors,
      boxShadow: {
        utc: "3px 3px 5px 1px rgb(0 0 0 / 15%)",
        utcdark:
          "rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.25) 0px 2px 3px",
        utcbottom: "rgba(0, 0, 0, 0.20) 0 4px 2px -2px",
      },
      gridTemplateRows: {
        // Adds a custom template for the utc hero block
        utchero: "40px 1fr 1fr 70px",
        utcheroreverse: "70px 1fr 1fr 40px",
        utcherocenter: "25px 1fr 1fr 25px",
        // Adds a custom template for the highlight block
        utchighlight: "40px 1fr 1fr 40px 40px",
      },
      gridTemplateColumns: {
        // Adds a custom template for the utc hero block
        utchero: "1fr 60% 35% 1fr",
        utcheroright: "1fr 35% 60% 1fr",
        utcherocenter: "1fr 45% 45% 1fr",
        utcvideohero: "1fr 30%",
        utcvideoheroright: "30% 1fr",
        utcvideoherocenter: "1fr 70% 1fr",
        // Adds a custom template for the highlight block
        utchighlight: "1fr 45% 40% 1fr",
        // Adds custom template for the footer menu/map columns
        utcmenufooter1: "1fr 37% 1fr",
        utcmenufooter2: "1fr 0% 1fr",
        utcmapfooter: "1fr 30% 1fr",
      },
      zIndex: {
        less1: "-1",
        1: "1",
        9: "9",
        98: "98",
        99: "99",
        100: "100",
        999: "999",
        1000: "1000",
        1001: "1001",
        9999: "9999",
        100000: "100000",
      },
      width: {
        "95p": "95%",
      },
      minWidth: {
        9: "9rem",
      },
      maxWidth: {
        18: "18rem",
        "95p": "95%",
      },
      height: {
        "70p": "70%",
        "75p": "75%",
        "80p": "80%",
        "85p": "85%",
        "90p": "90%",
        "95p": "95%",
        full: "100%",
      },
      margin: {
        20: "5rem",
        28: "7rem",
        36: "9rem",
      },
      opacity: {
        85: ".85",
      },
    },
    minHeight: {
      23: "23rem",
    },
  },
  plugins: [tailwindForms],
};
