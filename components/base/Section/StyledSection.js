import { styled } from "../../../stitches.config";

export const StyledSection = styled("div", {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  variants: {
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
  // defaultVariants: {
  //   direction: "row",
  //   justify: "center",
  //   align: "center",
  // },
});
