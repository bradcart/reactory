import * as LabelPrimitive from "@radix-ui/react-label";
import { styled } from "../../stitches.config";

export const Label = styled(LabelPrimitive.Root, {
  // Reset
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  // Custom
  userSelect: "none",
  fontFamily: "$ddin",
  fontSize: "$4",
  color: "$white",
  opacity: 0.9,
  textTransform: "lowercase",
  textAlign: "center",
  lineHeight: 1,
  p: "3px",
  alignSelf: "flex-start",
});
