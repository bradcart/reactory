import { styled } from "../../../../stitches.config";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export const Separator = styled(SeparatorPrimitive.Root, {
  alignSelf: "stretch",
  backgroundColor: "$whiteDimmer",
  width: "100%",
  height: 1,
  mt: "$2",
  mb: "$5",
});
