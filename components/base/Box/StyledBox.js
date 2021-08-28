import React from "react";
import { styled } from "../../../stitches.config";

const Box = styled("div", {
  variants: {
    flex: {
      true: {
        display: "flex",
      },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      spaceAround: {
        justifyContent: "space-around",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
    },
  },
});

export const StyledBox = React.forwardRef((props, forwardedRef) => {
  return <Box {...props} ref={forwardedRef} />;
});
