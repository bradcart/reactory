import { styled } from "../../stitches.config";
import { StyledBox } from "./StyledBox";

export const StyledSection = styled(StyledBox, {
  width: "100%",
  variants: {
    size: {
      sm: {
        py: "$4",
      },
      md: {
        py: "$8",
      },
      lg: {
        py: "$10",
      },
    },
  },
});
