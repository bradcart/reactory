import * as Label from "@radix-ui/react-label";
import { styled } from "../../../stitches.config";

export const StyledLabel = styled(Label.Root, {
  fontFamily: "$grifter",
  fontSize: "$5",
  color: "$white",
  opacity: 0.9,
  // letterSpacing: "0.03em",
  textTransform: "lowercase",
  textAlign: "center",
  lineHeight: "auto",
  p: "3px",
});
