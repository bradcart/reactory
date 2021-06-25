import { styled } from "../../stitches.config";

const TRANSITION_DURATION = "0.3s";
const TRANSITION_TIMING_FUNCTION = "ease";

export const StyledButton = styled("button", {
  // Reset
  alignItems: "center",
  appearance: "none",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  borderRadius: "$1",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$white",
  fontFamily: "$graphik",
  textTransform: "lowercase",
  // height: "$5",
  // p: "$1",
  // fontSize: 15,
  // fontWeight: 400,
  // textTransform: "uppercase",

  variants: {
    variant: {
      toolbox: {
        width: 128,
        height: 96,

        backgroundColor: "transparent",
        color: "$white",

        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$white",
        borderRadius: "$3",

        opacity: 0.98,
        transitionProperty: "all",
        transitionDuration: TRANSITION_DURATION,
        transitionTimingFunction: TRANSITION_TIMING_FUNCTION,

        //inner svg
        "& svg": {
          transitionProperty: "fill",
          transitionDuration: TRANSITION_DURATION,
          transitionTimingFunction: TRANSITION_TIMING_FUNCTION,
          fill: "$white",
        },

        //Button component svg
        "& .button-component-icon": {
          stroke: "$white",
          strokeWidth: 0.75,
          strokeMiterlimit: 10,
          transitionProperty: "stroke, strokeWidth, strokeMiterlimit",
          transitionDuration: TRANSITION_DURATION,
          transitionTimingFunction: TRANSITION_TIMING_FUNCTION,
        },

        //hover effects
        "&:hover": {
          backgroundColor: "$white",
          color: "$black100",
          borderColor: "transparent",
          "& svg": {
            fill: "$black100",
          },
          "& .button-component-icon": {
            stroke: "$black100",
          },
        },
      },
      topbar: {
        px: "$3",
        py: "$2",
        mx: "$2",
        backgroundColor: "$black100",
        color: "$white",
        fontFamily: "$brrr",
        fontSize: "$1",
        textTransform: "uppercase",
        borderWidth: "2px",
        borderColor: "$gray700",
        borderStyle: "outset",
        transitionProperty: "all",
        transitionDuration: TRANSITION_DURATION,
        transitionTimingFunction: TRANSITION_TIMING_FUNCTION,
        "&:hover": {
          backgroundColor: "$white",
          color: "$black100",
        },
      },
    },

    color: {
      black: {
        backgroundColor: "$black100",
        color: "$white",
      },
      white: {
        backgroundColor: "$white",
        color: "$black100",
      },
      none: {
        backgroundColor: "transparent",
        borderColor: "none",
      },
    },
    size: {
      sm: {
        padding: 8,
        fontSize: 14,
      },
      md: {
        padding: "$2",
        fontSize: 16,
      },
      lg: {
        padding: "$3",
        fontSize: 20,
        fontWeight: 500,
      },
    },
  },
  defaultVariants: {
    color: "black",
    size: "sm",
  },
});

// const ToolboxButton = styled(motion.button, {
//   width: 128,
//   height: 98,
//   backgroundColor: "transparent",
//   color: "$white",
//   border: "1px solid $white",
//   borderRadius: "$3",
//   opacity: 0.98,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   transition: "fill 0.3s ease",
//   "& svg": {
//     fill: "$white",
//   },
//   "&:hover svg": {
//     fill: "$black100",
//   },
// });

// export const StyledToolboxButton = React.forwardRef((props, forwardedRef) => {
//   return <ToolboxButton {...props} ref={forwardedRef} />;
// });
