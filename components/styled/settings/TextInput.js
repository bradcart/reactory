import { styled } from "../../../stitches.config";

export const StyledInput = styled("input", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "0",
  width: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  p: 3,
  mt: "$1",
  width: "100%",
  background: "transparent",
  color: "$white",
  border: "none",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "$gray700",
  fontFamily: "$ddin",
  fontSize: "12px",
  textOverflow: "ellipsis",
  transition: "border 0.3s ease",
  "&::placeholder": {
    color: "$gray400",
    fontSize: "12px",
    transition: "color 0.3s ease",
  },
  "&:focus": {
    borderBottomColor: "$red",
    "&::placeholder": {
      color: "$gray400",
    },
  },
  "&:-webkit-autofill": {
    boxShadow: "inset 0 0 0 100px #111",
    "&::first-line": {
      color: "$white",
    },
  },
});
