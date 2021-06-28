import { styled } from "../../stitches.config";

export const StyledButton = styled("button", {
  // Reset
  // all: "unset",
  appearance: "none",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  borderRadius: "$1",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$white",
  fontFamily: "$helvetica",
  height: "$5",
  p: "$1",
  // fontSize: "$2",

  variants: {
    size: {
      sm: {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        // fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      md: {
        borderRadius: "$2",
        height: "$6",
        px: "$3",
        // fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      lg: {
        borderRadius: "$2",
        height: "$7",
        px: "$5",
        // fontSize: "$5",
        lineHeight: "$sizes$7",
      },
    },
  },
  defaultVariants: {
    size: "md",
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
