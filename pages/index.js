import React, { useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { styled } from "../stitches.config";
import { Box, Text } from "../components";
import {
  TopLeftBlockIcon,
  TopRightBlockIcon,
  BottomLeftBlockIcon,
  BottomRightBlockIcon,
  ShapesIcon,
} from "../icons/IntroIcons";
import {
  bounceInTop,
  bounceInBottom,
  slideInLeft,
  vanishIn,
} from "../utils/keyframes";

const StyledLetter = styled("span", {
  fontFamily: "$hki",
  color: "$white",
  transform: "rotate(0.45deg)",
  fontSize: "82px",
  "@bp2": {
    fontSize: "96px",
  },
  "@bp3": {
    fontSize: "108px",
  },
  "@bp4": {
    fontSize: "144px",
  },
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
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  zIndex: 2,
  bottom: "15%",
  // left: "50%",
  // transform: "translateX(-50%)",
  width: "240px",
  height: "50px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  py: "$3",
  px: "$4",
  color: "$white",
  fontFamily: "$gt",
  fontSize: "$6",
  textTransform: "lowercase",
  textAlign: "center",
  borderRadius: "$2",
  borderWidth: "2px 4px 6px 4px",
  borderStyle: "solid",
  borderColor: "$white $gray900 $gray600 $gray900",
  backgroundColor: "$black150",

  animation: `${bounceInBottom} 0.8s linear 1.2s both`,
  filter: "brightness(85%)",
  transition: "filter 0.2s",
  "&:hover": {
    filter: "brightness(95%)",
    backgroundColor: "$black100",
  },
  "&:active": {
    borderWidth: "2px 4px 4px 4px",
    height: "46px",
    filter: "brightness(95%)",
    backgroundColor: "$black100",
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

export default function Home() {
  const [colorize, toggleColorize] = useState(false);
  const red = "hsl(347, 86%, 58%)";
  const yellow = "hsl(42, 100%, 66%)";
  const green = "hsl(180, 63%, 50%)";
  const purple = "hsl(262, 73%, 62%)";
  return (
    <>
      <Head>
        <title>Reactory</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Reactory is a site builder experiment by Brad Carter [https://bradc.art]"
        />
        <meta property="og:title" content="Reactory" />
        <meta
          property="og:description"
          content="Reactory is a site builder experiment by Brad Carter [https://bradc.art]"
        />
        <meta property="og:url" content="https://reactory.vercel.app/" />
        <meta property="og:image" content="/og-img.png" />
      </Head>
      <Box
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
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "12%",
            position: "relative",
            px: "$7",
            py: "$3",
            mb: "$7",
            "@bp2": {
              height: "14%",
            },
            "@bp3": {
              height: "16%",
            },
            "@bp4": {
              height: "19%",
            },
          }}
        >
          <TopLeftBlockIcon animation={`${bounceInTop} 0.6s linear both`} />
          <TopRightBlockIcon
            animation={`${bounceInTop} 0.8s linear 0.5s both`}
          />
          <BottomLeftBlockIcon
            animation={`${bounceInTop} 0.7s linear 1.5s both`}
          />
          <BottomRightBlockIcon
            animation={`${bounceInTop} 0.6s linear 2.2s both`}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              transform: "rotate(0.78deg)",
            }}
          >
            <StyledLetter letterNumber={1}>r</StyledLetter>
            <StyledLetter letterNumber={2}>e</StyledLetter>
            <StyledLetter letterNumber={3}>a</StyledLetter>
            <StyledLetter letterNumber={4}>c</StyledLetter>
            <StyledLetter letterNumber={5}>t</StyledLetter>
            <StyledLetter letterNumber={6}>o</StyledLetter>
            <StyledLetter letterNumber={7}>r</StyledLetter>
            <StyledLetter letterNumber={8}>y</StyledLetter>
          </div>
          <Text
            className="intro-subtitle"
            css={{
              mb: -30,
              // fontFamily: "$grifter",
              fontFamily: "'Krona One', sans-serif",
              fontWeight: "bold",
              letterSpacing: -4,
              fontSize: "26px",
              color: "$white",

              animation: `${slideInLeft} 0.8s both`,
              "@bp2": {
                fontSize: "34px",
              },
              "@bp3": {
                fontSize: "44px",
              },
            }}
          >
            drag-n-drop site builder
          </Text>
        </Box>
        <NextLink href="/edit">
          <StyledButton
            onMouseEnter={() => toggleColorize(true)}
            onMouseLeave={() => toggleColorize(false)}
          >
            START DEMO
            <ShapesIcon
              fillCube={colorize ? red : "#fff"}
              fillStar={colorize ? yellow : "#fff"}
              fillTopLeft={colorize ? green : "#fff"}
              fillTopRight={colorize ? purple : "#fff"}
            />
          </StyledButton>
        </NextLink>
      </Box>
    </>
  );
}
