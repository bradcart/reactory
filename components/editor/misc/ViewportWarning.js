import { styled } from "../../../stitches.config";

const ViewportOverlay = styled("div", {
  display: "none",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  px: "$2",
  backgroundColor: "rgba(0, 0, 0, 0.87)",
  color: "$white",
  textAlign: "center",
  fontFamily: "$grifter",
  fontSize: "42px",
  "> span": {
    mt: "$2",
    fontFamily: "$ddin",
    fontSize: "24px",
  },
  "@media(max-width: 1365px)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const ViewportWarning = () => (
  <ViewportOverlay>
    Your browser is too small
    <span>Resize your browser to be at least 1366px to use this demo.</span>
  </ViewportOverlay>
);
