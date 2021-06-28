import { styled } from "../../../stitches.config";

export const StyledInput = styled("input", {
  outline: "none",
  p: 3,
  background: "transparent",
  color: "$white",
  border: "none",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "$gray600",
  fontFamily: "$helvetica",
  fontSize: "12px",
  transition: "border 0.3s ease",
  "&::placeholder": {
    color: "$gray600",
    fontSize: "12px",
    transition: "color 0.3s ease",
  },
  "&:focus": {
    borderBottomColor: "$red",
    "&::placeholder": {
      color: "$gray700",
    },
  },
});
