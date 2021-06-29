import React from "react";
import Link from "next/link";
import { styled, keyframes } from "../stitches.config";
import { StyledBox } from "../components/styled/StyledBox";
import { StyledText } from "../components/styled/StyledText";

const bounceInTop = keyframes({
  "0%": {
    transform: "translateY(-500px)",
    animationTimingFunction: "ease-in",
    opacity: 0,
  },
  "38%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
    opacity: 1,
  },
  "55%": {
    transform: "translateY(-65px)",
    animationTimingFunction: "ease-in",
  },
  "72%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
  "81%": {
    transform: "translateY(-28px)",
    animationTimingFunction: "ease-in",
  },
  "90%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
  "95%": {
    transform: "translateY(-8px)",
    animationTimingFunction: "ease-in",
  },
  "100%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
});

const StyledLetter = styled("span", {
  fontFamily: "$hki",
  fontSize: 144,
  color: "$white",
  transform: "rotate(0.45deg)",
  variants: {
    letterNumber: {
      1: {
        animation: `${bounceInTop} 0.8s linear both`,
      },
      2: {
        animation: `${bounceInTop} 0.8s linear 0.2s both`,
      },
      3: {
        animation: `${bounceInTop} 0.8s linear 0.4s both`,
      },
      4: {
        animation: `${bounceInTop} 0.8s linear 0.6s both`,
      },
      5: {
        animation: `${bounceInTop} 0.8s linear 0.8s both`,
      },
      6: {
        animation: `${bounceInTop} 0.8s linear 1s both`,
      },
      7: {
        animation: `${bounceInTop} 0.8s linear 1.2s both`,
      },
      8: {
        animation: `${bounceInTop} 0.8s linear 1.4s both`,
      },
    },
  },
});

const StyledButton = styled("button", {
  position: "absolute",
  left: "50%",
  bottom: "15%",
  transform: "translateX(-50%)",
  borderRadius: "$2",
  fontFamily: "$grifter",
  fontSize: "$6",
  textTransform: "lowercase",
  textAlign: "center",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  py: "$3",
  px: "$4",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "$white",
  backgroundColor: "$black100",
  color: "$white",
  cursor: "pointer",
  userSelect: "none",
  "&:hover": {
    backgroundColor: "$white",
    color: "$black100",
    "& a": {
      color: "$black100",
    },
  },
});

const vanishIn = keyframes({
  "0%": {
    opacity: 0,
    transformOrigin: "50% 50%",
    transform: "scale(2, 2)",
    filter: "blur(90px)",
  },
  "100%": {
    opacity: 1,
    transformOrigin: "50% 50%",
    transform: "scale(1, 1)",
    filter: "blur(0px)",
  },
});

const StyledLink = styled("a", {
  textDecorationLine: "none",
  position: "absolute",
  top: "2.5%",
  right: "2.5%",
  color: "$white",
  fontFamily: "$grifter",
  opacity: 0,
  animation: `${vanishIn} 1.3s ease 2s forwards`,
});

const ForwardedLink = React.forwardRef((props, forwardedRef) => {
  return <StyledLink {...props} ref={forwardedRef} />;
});

export default function Home() {
  return (
    <StyledBox
      css={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "$black100",
      }}
    >
      <StyledLink href="https://bradc.art/" target="_blank" rel="noreferrer">
        BRADC.ART
      </StyledLink>
      <StyledBox
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "26%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <StyledLetter letterNumber={1}>R</StyledLetter>
          <StyledLetter letterNumber={2}>e</StyledLetter>
          <StyledLetter letterNumber={3}>a</StyledLetter>
          <StyledLetter letterNumber={4}>c</StyledLetter>
          <StyledLetter letterNumber={5}>t</StyledLetter>
          <StyledLetter letterNumber={6}>o</StyledLetter>
          <StyledLetter letterNumber={7}>r</StyledLetter>
          <StyledLetter letterNumber={8}>y</StyledLetter>
        </div>
        <StyledText
          className="intro-subtitle"
          css={{ fontFamily: "$grifter", fontSize: 46, color: "$white" }}
        >
          drag-n-drop site builder
        </StyledText>
      </StyledBox>
      <Link href="/edit">
        <StyledButton size="lg">
          <a style={{ all: "unset", width: "100%", height: "100%" }}>
            START DEMO
          </a>
        </StyledButton>
      </Link>
    </StyledBox>
  );
}
