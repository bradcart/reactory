import { styled } from "../../stitches.config";
import { StyledBox } from "./StyledBox";

export const StyledSection = styled(StyledBox, {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  variants: {
    // size: {
    //   sm: {
    //     py: "$4",
    //   },
    //   md: {
    //     py: "$8",
    //   },
    //   lg: {
    //     py: "$10",
    //   },
    // },
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
