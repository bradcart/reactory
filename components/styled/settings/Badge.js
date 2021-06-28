import { styled } from "../../../stitches.config";

export const StyledBadge = styled("span", {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.1,
  verticalAlign: "middle",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
    content: '""',
  },
  "&::after": {
    boxSizing: "border-box",
    content: '""',
  },

  // Custom
  alignSelf: "center",
  backgroundColor: "$white",
  opacity: 0.73,
  borderRadius: "$pill",
  color: "$black100",
  fontFamily: "$grifter",
  fontSize: "$3",
  textTransform: "uppercase",
  textAlign: "center",
  whiteSpace: "nowrap",
  height: "$4",
  pt: "$3",
  pb: "$2",
  px: "$3",
  // mb: "$1",
});
