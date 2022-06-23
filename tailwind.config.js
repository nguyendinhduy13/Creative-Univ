const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Montserrat Alternates"],
      head: ["Montserrat"],
      hand: ["Sharpen"],
    },
    extend: {
      colors: {
        White: "#FFFFFF",
        "gray-100": "#FCFCFC",
        "gray-300": "#E4E5E6",
        "gray-600": "#B0B1B4",
        "gray-700": "#96989B",
        "gray-800": "#595A55",
        "gray-900": "#0F0F0F",
        "orange-main": "#FF9800",
        "yellow-main": "#FFC72C",
      },
      fontSize: {
        8: "8px",
        9: "9px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        17: "17px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        32: "32px",
        46: "46px",
        72: "72px",
      },
      borderWidth: {
        1: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },

      animation: {
        SlideIn: "SlideIn 2s ease-in-out",
        SlideIn2: "SlideIn2 0.8s ease-in-out",
      },

      keyframes: {
        SlideIn: {
          "0%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0)" },
        },

        SlideIn2: {
          "0%": { transform: "-translateY(20px)" },
          "100%": {transform: "translateY(0)"},
        },
        

        
      },
    },
    plugins: [],
  },
};
