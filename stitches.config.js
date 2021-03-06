import { createStitches } from "@stitches/react";
// import { tomato, red, crimson, pink } from "@radix-ui/colors";

export const { css, styled, globalCss, createTheme, keyframes, getCssText } =
  createStitches({
    theme: {
      colors: {
        // hiContrast: "hsl(206,10%,5%)",
        // loContrast: "white",

        white: "#fff",
        whiteDim: "rgba(255, 255, 255, 0.16)",
        whiteDimmer: "rgba(255, 255, 255, 0.08)",
        whiteAlpha: "rgba(255, 255, 255, 0.9)",

        black100: "#111",
        black150: "#171717",
        black200: "#1d1d1d",
        black300: "#252525",
        black400: "#2b2b2b",

        blackGradient: "linear-gradient(147deg, #000000 0%, #434343 74%)",
        greenGradient: "linear-gradient(315deg, #63d471 0%, #233329 74%)",

        gray100: "#333",
        gray200: "#444",
        gray300: "#555",
        gray400: "#666",
        gray500: "#777",
        gray600: "#a0a0a0",
        gray700: "#cfcfcf",
        gray800: "#e6e6e6",
        gray900: "#f0f0f0",
        grayAlpha: "rgba(102, 102, 102, 0.6)",

        glass: "rgba(27, 27, 27, 0.89)",

        viridian: "#57886c",
        orange: "#fb4d3d",
        pine: "#0a6e69",
        yellow: "#f3b700",
        red: "#960200",
      },
      space: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "35px",
        7: "45px",
        8: "65px",
        9: "80px",
        10: "100px",
      },
      sizes: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "35px",
        7: "45px",
        8: "65px",
        9: "80px",
        10: "100px",
      },
      fontSizes: {
        1: "10px",
        2: "12px",
        3: "14px",
        4: "16px",
        5: "19px",
        6: "21px",
        7: "27px",
        8: "35px",
        9: "59px",
      },
      // fontSizes: {
      //   1: "0.56rem",
      //   2: "0.75rem",
      //   3: "1rem",
      //   4: "1.33rem",
      //   5: "1.78rem",
      //   6: "2.37rem",
      //   7: "3.16rem",
      //   8: "4.21rem",
      // },
      fonts: {
        hki: "HKI Nightlife",
        grifter: "GRIFTER",
        ddin: "D-DIN Exp",
        cousine: "Cousine",
        helvetica: "Helvetica Neue",
        dx: "DX Rigraf",
        oskari: "Oskari G2",
        brrr: "BRRR",
        spaceMono: "Space Mono Bold",
        free: "Free Sans",
        newake: "Newake",
        pragmatica: "Pragmatica",
        monument: "Monument Extended",
        basteleur: "Basteleur",
        exil: "EXIL71 Bold",
        compagnon: "Compagnon Medium",
        concretica: "SK Concretica",
        mattone: "Mattone",
        gt: "GT America Expanded",
      },
      radii: {
        1: "4px",
        2: "6px",
        3: "10px",
        4: "20px",
        round: "50%",
        pill: "9999px",
      },
      transitions: {
        default: "all 0.3s ease",
        defaultSlow: "all 0.8s ease",
        fill: "fill 0.3s ease",
        stroke:
          "stroke 0.3s ease, strokeWidth 0.3s ease, strokeMiterlimit 0.3s ease",
      },
    },
    media: {
      bp1: "(min-width: 520px)",
      bp2: "(min-width: 900px)",
      bp3: "(min-width: 1200px)",
      bp4: "(min-width: 1800px)",
    },
    utils: {
      p: (value) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
      pt: (value) => ({
        paddingTop: value,
      }),
      pr: (value) => ({
        paddingRight: value,
      }),
      pb: (value) => ({
        paddingBottom: value,
      }),
      pl: (value) => ({
        paddingLeft: value,
      }),
      px: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
      mt: (value) => ({
        marginTop: value,
      }),
      mr: (value) => ({
        marginRight: value,
      }),
      mb: (value) => ({
        marginBottom: value,
      }),
      ml: (value) => ({
        marginLeft: value,
      }),
      mx: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),
      appearance: (value) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      userSelect: (value) => ({
        WebkitUserSelect: value,
        userSelect: value,
      }),
    },
  });
