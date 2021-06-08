import { extendTheme } from "@chakra-ui/react";

const globals = {
  colors: {
    black: "#1b1b1b",
    white: "#f0f5f3",
  },
};

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        dialog: {
          pointerEvents: "auto",
        },
        dialogContainer: {
          pointerEvents: "none",
        },
      },
    },
  },
};

const theme = extendTheme({
  globals,
  components,
});

export default theme;
