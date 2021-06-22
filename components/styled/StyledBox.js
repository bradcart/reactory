import React from "react";
import { styled } from "../../stitches.config";

const Box = styled("div", {
  boxSizing: "border-box",
});

export const StyledBox = React.forwardRef((props, forwardedRef) => {
  return <Box {...props} ref={forwardedRef} />;
});
