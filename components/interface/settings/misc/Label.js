import * as LabelPrimitive from "@radix-ui/react-label";
import { styled } from "../../../../stitches.config";

export const Label = styled(LabelPrimitive.Root, {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  // Custom
  fontFamily: "$ddin",
  fontSize: "$4",
  color: "$white",
  opacity: 0.9,
  // letterSpacing: "0.03em",
  textTransform: "lowercase",
  textAlign: "center",
  lineHeight: 1,
  p: "3px",
});
