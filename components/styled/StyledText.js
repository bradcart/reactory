import React from "react";
import { styled } from "../../stitches.config";

const DEFAULT_TAG = "span";

export const StyledText = styled(DEFAULT_TAG, {
  // Reset
  lineHeight: "1",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  // Props
  variants: {
    variant: {
      // Interface variants
      toolbox: {
        fontFamily: "FreeSans",
        fontSize: "14px",
      },
      settings: {
        fontFamily: "$oskari",
        fontSize: "$5",
        color: "$white",
        opacity: 0.9,
        // letterSpacing: "0.03em",
        textTransform: "lowercase",
        textAlign: "center",
        lineHeight: "auto",
        p: "3px",
      },

      // User variants
    },
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
        letterSpacing: "-.015em",
      },
      6: {
        fontSize: "$6",
        letterSpacing: "-.016em",
      },
      7: {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      8: {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      9: {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
  },
});

export const Text = React.forwardRef((props, forwardedRef) => {
  return <StyledText {...props} ref={forwardedRef} />;
});
