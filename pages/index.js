import React from "react";
import { styled } from "../stitches.config";
import Link from "next/link";

import { StyledBox } from "../components/styled/StyledBox";
import { StyledText } from "../components/styled/StyledText";
import { StyledButton } from "../components/styled/StyledButton";

const StyledLetter = styled("span", {
  fontFamily: "$hki",
  fontSize: 144,
  color: "$white",
  transform: "rotate(0.45deg)",
});

const StyledLink = styled("a", {
  textDecorationLine: "none",
  position: "absolute",
  top: "2.5%",
  right: "2.5%",
  fontFamily: "$oskari",
  fontSize: 18,
  color: "$white",
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
      <StyledLink
        className="portfolio-link"
        href="https://bradc.art/"
        target="_blank"
        rel="noreferrer"
      >
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
          <StyledLetter className="intro-title-1">R</StyledLetter>
          <StyledLetter className="intro-title-2">e</StyledLetter>
          <StyledLetter className="intro-title-3">a</StyledLetter>
          <StyledLetter className="intro-title-4">c</StyledLetter>
          <StyledLetter className="intro-title-5">t</StyledLetter>
          <StyledLetter className="intro-title-6">o</StyledLetter>
          <StyledLetter className="intro-title-7">r</StyledLetter>
          <StyledLetter className="intro-title-8">y</StyledLetter>
        </div>
        <StyledText
          className="intro-subtitle"
          css={{ fontFamily: "$grifter", fontSize: 46, color: "$white" }}
        >
          drag-n-drop site builder
        </StyledText>
      </StyledBox>
      <StyledButton
        size="lg"
        color="black"
        css={{
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
          paddingTop: "14px",
          px: "$4",
          paddingBottom: "8px",
          borderWidth: "2px",
          borderStyle: "solid",
          cursor: "pointer",
          userSelect: "none",
          "&:hover": {
            backgroundColor: "$white",
            "& a": {
              color: "$black100",
            },
          },
        }}
      >
        <Link href="/edit">
          <a style={{ all: "unset" }}>START DEMO</a>
        </Link>
      </StyledButton>
    </StyledBox>
  );
}
