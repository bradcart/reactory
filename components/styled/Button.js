import styled from "styled-components";
import { variant, space } from "styled-system";

const Button = styled("button")(
  {
    padding: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: 400,
    textTransform: "uppercase",
    borderRadius: 7,
    borderWidth: "1px",
    borderStyle: "solid",
  },
  variant({
    variants: {
      primary: {
        color: "white",
        bg: "black",
        borderColor: "white",
      },
      secondary: {
        color: "black",
        bg: "white",
        borderColor: "white",
      },
      text: {
        color: "white",
        bg: "transparent",
        borderColor: "transparent",
      },
      toolbox: {
        color: "black",
        bg: "transparent",
        borderColor: "black",
        // transitionProperty: "color, bg",
        // transitionDuration: "0.3s",
        // transitionTimingFunction: "ease",
        "&:hover": {
          color: "white",
          bg: "black",
        },
      },
    },
  }),
  space
);

export default Button;
