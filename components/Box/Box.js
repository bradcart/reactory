import { forwardRef } from "react";
import { styled } from "../../stitches.config";

const StyledBox = styled("div", {
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

export const Box = forwardRef((props, forwardedRef) => {
  return <StyledBox {...props} ref={forwardedRef} />;
});
