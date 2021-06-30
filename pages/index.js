import React from "react";
import Link from "next/link";
import { styled } from "../stitches.config";
import { StyledBox } from "../components/styled/StyledBox";
import { StyledText } from "../components/styled/StyledText";
import {
  bounceInTop,
  bounceInBottom,
  slideInLeft,
  vanishIn,
} from "../custom/keyframes";

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
  bottom: "15%",
  // left: "50%",
  // transform: "translateX(-50%)",
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
  animation: `${bounceInBottom} 0.8s linear 1.2s both`,
  "&:hover": {
    backgroundColor: "$white",
    color: "$black100",
    "& a": {
      color: "$black100",
    },
  },
});

const StyledPortfolioLink = styled("a", {
  textDecorationLine: "none",
  position: "absolute",
  top: "2.5%",
  right: "2.5%",
  color: "$white",
  fontFamily: "$grifter",
  opacity: 0,
  animation: `${vanishIn} 1.3s ease 2s forwards`,
});

const StyledInnerLink = styled("a", {
  textDecorationLine: "none",
  color: "$white",
  width: "100%",
  height: "100%",
});

const InnerLink = React.forwardRef((props, forwardedRef) => {
  return <StyledInnerLink {...props} ref={forwardedRef} />;
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
      <StyledPortfolioLink
        href="https://bradc.art/"
        target="_blank"
        rel="noreferrer"
      >
        BRADC.ART
      </StyledPortfolioLink>
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
          css={{
            fontFamily: "$grifter",
            fontSize: "46px",
            color: "$white",
            animation: `${slideInLeft} 0.8s both`,
          }}
        >
          drag-n-drop site builder
        </StyledText>
      </StyledBox>
      <Link href="/edit">
        <StyledButton size="lg">
          <StyledInnerLink>START DEMO</StyledInnerLink>
        </StyledButton>
      </Link>
    </StyledBox>
  );
}
