import React from "react";
import { styled } from "../../stitches.config";

const DEFAULT_TAG = "div";

export const StyledCardTop = styled("div", {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: "inherit",
  borderTopRightRadius: "inherit",

  // border: "1px solid yellow",
});

export const StyledCardBottom = styled("div", {
  height: "100%",
  display: "grid",
  gridTemplateRows: "3fr 1fr",
  gridTemplateColumns: "100%",
  alignItems: "center",
  variants: {
    padding: {
      10: {
        p: "10px",
      },
      20: {
        p: "20px",
      },
      30: {
        p: "30px",
      },
      40: {
        p: "40px",
      },
      50: {
        px: "50px",
        py: "40px",
      },
      60: {
        px: "60px",
        py: "40px",
      },
      70: {
        px: "70px",
        py: "40px",
      },
      80: {
        px: "80px",
        py: "40px",
      },
    },
  },
});

export const StyledCardBottomUpper = styled("div", {
  height: "100%",
  px: "$4",
  display: "flex",
  flexDirection: "column",
  // pointerEvents: "none",
  variants: {
    alignItems: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
  },
});

export const StyledCardBottomLower = styled("div", {
  height: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderBottomLeftRadius: "inherit",
  borderBottomRightRadius: "inherit",
  // pointerEvents: "none",

  // border: "1px solid blue",
});

const CardRoot = styled(DEFAULT_TAG, {
  // Reset
  appearance: "none",
  border: "none",
  boxSizing: "border-box",
  font: "inherit",
  lineHeight: "1",
  outline: "none",
  padding: 0,
  textAlign: "inherit",
  verticalAlign: "middle",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",

  // Custom
  minHeight: "300px",
  display: "inline-grid",
  gridTemplateRows: "4fr 4fr",
  gridTemplateColumns: "1fr",
  // justifyItems: "center",
  textDecoration: "none",
  flexShrink: 0,
  overflow: "hidden",
  boxShadow:
    "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)",
  // filter: "drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.6))",
  // position: "relative",

  // "&::before": {
  //   boxSizing: "border-box",
  //   content: '""',
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  //   boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
  //   pointerEvents: "none",
  // },

  variants: {
    size: {
      sm: {
        width: "350px",
      },
      md: {
        width: "535px",
      },
      lg: {
        width: "720px",
      },
    },
    radius: {
      straight: {
        borderRadius: "0px",
      },
      round: {
        borderRadius: "$2",
      },
      rounder: {
        borderRadius: "$4",
      },
    },
    padding: {
      10: {
        gridTemplateRows: "8fr 8fr",
      },
      20: {
        gridTemplateRows: "7fr 8fr",
      },
      30: {
        gridTemplateRows: "6fr 8fr",
      },
      40: {
        gridTemplateRows: "5fr 8fr",
      },
      50: {
        gridTemplateRows: "4fr 8fr",
      },
      60: {
        gridTemplateRows: "3fr 8fr",
      },
      70: {
        gridTemplateRows: "2fr 8fr",
      },
      80: {
        gridTemplateRows: "1fr 8fr",
      },
    },
  },

  // variants: {
  //   variant: {
  //     interactive: {
  //       "&:hover": {
  //         "&::before": {
  //           boxShadow: "inset 0 0 0 1px rgba(0,0,0,.2)",
  //         },
  //       },
  //       "&:focus": {
  //         "&::before": {
  //           boxShadow:
  //             "inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700",
  //         },
  //       },
  //     },
  //     ghost: {
  //       backgroundColor: "transparent",
  //       transition:
  //         "transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear",
  //       willChange: "transform",
  //       "&::before": {
  //         boxShadow:
  //           "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  //         opacity: "0",
  //         transition: "all 200ms cubic-bezier(0.22, 1, 0.36, 1)",
  //       },
  //       "&:hover": {
  //         backgroundColor: "$panel",
  //         transform: "translateY(-2px)",
  //         "&::before": {
  //           opacity: "1",
  //         },
  //       },
  //       "&:active": {
  //         transform: "translateY(0)",
  //         transition: "none",
  //         "&::before": {
  //           boxShadow:
  //             "0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)",
  //           opacity: "1",
  //         },
  //       },
  //       "&:focus": {
  //         boxShadow:
  //           "inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700",
  //       },
  //     },
  //     active: {
  //       transform: "translateY(0)",
  //       transition: "none",
  //       "&::before": {
  //         boxShadow:
  //           "0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)",
  //         opacity: "1",
  //       },
  //       "&:focus": {
  //         boxShadow:
  //           "inset 0 0 0 1px $colors$blue700, 0 0 0 1px $colors$blue700",
  //       },
  //     },
  //   },
  // },
});

export const StyledCard = React.forwardRef((props, forwardedRef) => {
  return (
    <CardRoot {...props} ref={forwardedRef}>
      {props.children}
    </CardRoot>
  );
});
