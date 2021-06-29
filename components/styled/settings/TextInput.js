import { styled } from "../../../stitches.config";

export const StyledInput = styled("input", {
  outline: "none",
  p: 3,
  mt: "$1",
  width: "95%",
  background: "transparent",
  color: "$white",
  border: "none",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "$gray700",
  fontFamily: "$ddin",
  fontSize: "12px",
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
