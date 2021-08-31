import { styled } from "../../../../stitches.config";

export const Form = styled("form", {
  boxSizing: "border-box",
  width: "90%",
  mb: "$5",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "& > input": {
    marginLeft: "2.5%",
    "&::placeholder": {
      fontSize: "13px",
    },
  },
});
