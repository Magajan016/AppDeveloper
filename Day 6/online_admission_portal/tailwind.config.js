/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors:{
               " dark-purple":"081",
               "light-white":"rgba(255,255,255,0.18)",
              },
              fontFamily: {
                //       // 'sans': ['ui-sans-serif', 'system-ui'],
                //       // 'serif': ['ui-serif', 'Georgia', ...],
                //       // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
                //       // 'display': ['Oswald', ...],
                      dmsans: ["DM Sans", "sans-serif"],
                      poppins: ["Poppins", "sans-serif"],
                      productsansr: ["productsans-regular"],
                      productsansb: ["productsans-bold"],
                    },
                backgroundImage:{
                  'image1':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695376368/shape_1_1_uloxay.png')",
                  'image2':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695395198/image6_r3olhf.png')",
                  'image3':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695395197/image7_vucvgv.png')",
                  'image4':"url('https://res.cloudinary.com/dnghkq7oo/image/upload/v1695395197/image1_bkzicz.png')"
                }     
            },
          },
          plugins: [],
        }
        
//         module.exports = {
//           darkMode: "class",
//           // darkMode: "media",
//           content: [
//             "./src/**/*.{html,js,jsx}",
//           ],
          
//           theme: {
//             colors: {
//             darkblue1:"linear-gradient(45deg, rgba(32, 124, 229, 0)0%, rgba(146, 95,206,0)55%, #f048bb 100%)",
//       // darkpink:"linear-gradient(45deg,ffa9d9 0%,rgb(255, 169, 217)50%,hsl(327, 100%, 83%)100%)",
//       lightblue: "#e7f0f7",
//       lightwhite: "#fbf8f6",
//       transparent: "transparent",
//       current: "currentColor",
//       white: "#ffffff",
//       purple: "#3f3cbb",
//       midnight: "#121063",
//       metal: "#565584",
//       blue: "#4c3ed8",
//       silver: "#ecebff",
//       bermuda: "#78dcca",
//       gray: "#f5f5f6",
//       lightgray: "#747579",
//       lightpurple: "#857be4",
//       hoverpurple: "#edecfb",
//       dot: "#f7c32e",
//       bordergray: "#9b9c9f",
//       darkteal: "#002e25",
//       lightteal2: "#f3faf8",
//       backgroundwhite: "#fcffff",
//       textgray: "#838f8c",
//       lightteal: "#396c61",
//       red: "#d6293e",
//       black: "#000000",
//       darkblue: "#0f172a",
//       loginborder: "#e5e5e5",
//       lightgreen: "#e6f8f3",
//       peach: "#fbe9eb",
//       lightred: "#fbe9eb",
//       skyblue: "#e7f6f8",
//       goldstar: "#f7c32e",
//       gold: "#ffc20e",
//       bluegray: "#222529",
//       darkgray: "#4b4b4b",
//       darkgray2: "#333333",
//       darkgray1: "#191b1d",
//       hovergray: "#404040",
//       brightgreen: "#0cbc87",
//       lightgray1: "#dfdfe3",
//       lightgray2: "#c8c8c8",
//       facebook: "#5D82D1",
//       instagram: "#C22B72",
//       twitter: "#40BFF5",
//       blueteal: "#01485c",
//       linkedin: "#238CC8",
//       darkteal2: "#004c3f",
//       tan: "#f5efe0",
//       teal: "#19423a",
//       hoverteal: "#f6f9f8",
//       lightgreen1: "#aabbad",
//       lightorange: "#fff2e7",
//       orange: "#fda36d",
//       aqua: "#d1e7dd",
//       darkgreen: "#146c43",
//       turquese: "#17a2b8",
//       brown: "#333333",
//       borderred: "#cf364a",
//       lightwhite: "#f8f8f8",
//       lavendar: "#e0d8de",
//     },
//     screens: {
//       // 'sm': [{'min':'300px', 'max':'380px'  }],

//       // 'md': '568px',

//       xl: [{ min: "1150px", max: "2648px" }],

//       lg: [{ min: "260px", max: "1149px" }],
//     },
//     fontFamily: {
//       // 'sans': ['ui-sans-serif', 'system-ui'],
//       // 'serif': ['ui-serif', 'Georgia', ...],
//       // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
//       // 'display': ['Oswald', ...],
//       dmsans: ["DM Sans", "sans-serif"],
//       poppins: ["Poppins", "sans-serif"],
//       productsansr: ["productsans-regular"],
//       productsansb: ["productsans-bold"],
//     },
//     extend: {
//       // ...
//       darkMode: "class",
//     },
   
//   },
//   plugins: [],
// };

