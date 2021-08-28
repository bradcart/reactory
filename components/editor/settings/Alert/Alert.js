import { styled } from "../../../../stitches.config";
import {
  slideInBlurredBottom,
  slideOutBlurredBottom,
} from "../../../../utils/keyframes";
import { useEffect } from "react";

const StyledAlert = styled("div", {
  boxSizing: "border-box",
  m: 0,

  width: "250px",
  height: "auto",
  position: "fixed",
  zIndex: 9999,
  bottom: "3%",
  left: "calc(50% - 115px)",
  //   transform: "translateX(-50%)",
  p: "$2",
  textAlign: "center",
  border: "1px solid transparent",
  borderRadius: "$2",
  backgroundColor: "$black100",
  color: "$white",
  fontFamily: "$grifter",
  fontSize: "$4",
  animation: `${slideInBlurredBottom} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both, ${slideOutBlurredBottom} 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) 1.8s forwards`,
});

export const Alert = ({ mount, toggleMount, content }) => {
  useEffect(() => {
    const timer = setTimeout(() => toggleMount(false), 2250);
    return () => clearTimeout(timer);
  }, [mount]);
  return <>{mount ? <StyledAlert>{content}</StyledAlert> : null}</>;
};
