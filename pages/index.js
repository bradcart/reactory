import React, { useState } from "react";
import Link from "next/link";
import { styled } from "../stitches.config";
import { StyledBox } from "../components/styled/StyledBox";
import { StyledText } from "../components/styled/StyledText";
import {
  TopLeftBlockIcon,
  TopRightBlockIcon,
  BottomLeftBlockIcon,
  BottomRightBlockIcon,
  ShapesIcon,
} from "../components/icons/IntroIcons";
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
  borderRadius: "$2",
  borderWidth: "2px 4px 6px 4px",
  borderStyle: "outset",
  borderColor: "$gray900 $gray800 $gray700 $gray900",
  backgroundColor: "$black100",
  color: "$white",
  fontFamily: "$gt",
  fontSize: "$6",
  textTransform: "lowercase",
  textAlign: "center",
  cursor: "pointer",

  animation: `${bounceInBottom} 0.8s linear 1.2s both`,
  filter: "brightness(93%)",
  transition: "filter 0.3s, border-color 0.3s ease",
  "&:hover": {
    filter: "brightness(100%)",
    borderColor: "$white $gray600 $gray600 $white",
  },
  "&:active": {
    borderWidth: "2px 4px 4px 4px",
    height: "46px",
  },

  // "&:hover": {
  //   backgroundColor: "$white",
  //   color: "$black100",
  //   "& a": {
  //     color: "$black100",
  //   },
  // },

  // "&::before": {
  //   content: '""',
  //   position: "absolute",
  //   top: "10%",
  //   zIndex: -2,
  //   height: "100%",
  //   width: "102%",
  //   borderRadius: "$2",
  //   background:
  //     "linear-gradient(180deg, rgba(225, 229, 227, 0) 0%, #A8ACAA 100%)",
  // },
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

// const StyledInnerLink = styled("a", {
//   textDecorationLine: "none",
//   color: "$white",
//   width: "100%",
//   height: "100%",
// });

// const InnerLink = React.forwardRef((props, forwardedRef) => {
//   return <StyledInnerLink {...props} ref={forwardedRef} />;
// });

export default function Home() {
  const [colorize, toggleColorize] = useState(false);
  const red = "hsl(347, 86%, 44%)";
  const yellow = "hsl(42, 100%, 56%)";
  const green = "hsl(180, 63%, 42%)";
  const purple = "hsl(262, 73%, 48%)";
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
          position: "relative",
          px: "$7",
          py: "$3",
        }}
      >
        <TopLeftBlockIcon animation={`${bounceInTop} 0.6s linear both`} />
        <TopRightBlockIcon animation={`${bounceInTop} 0.8s linear 0.5s both`} />
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
        <StyledButton
          size="lg"
          as="a"
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
      </Link>
    </StyledBox>
  );
}
