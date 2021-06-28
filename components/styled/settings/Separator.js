import { styled } from "../../../stitches.config";
import * as Separator from "@radix-ui/react-separator";

export const StyledSeparator = styled(Separator.Root, {
  alignSelf: "stretch",
  backgroundColor: "$whiteDimmer",
  width: "100%",
  height: 1,
  my: "$4",
});
