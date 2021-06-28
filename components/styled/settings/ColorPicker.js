import { styled } from "../../../stitches.config";
import { slate, tomato, indigo, grass, amber } from "@radix-ui/colors";
import { useEffect, useState } from "react";
import { ArrowIcon } from "../../icons/ArrowIcon";

const ColorPickerBox = styled("div", {
  py: "$2",
  px: "$3",
  mt: "$1",
  mb: "$6",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  border: "1px solid $grayAlpha",
  borderRadius: "$3",
});

const ColorPickerHeader = styled("div", {
  m: "$1",
  width: "100%",
  height: "$4",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const ColorPickerArrow = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  width: "25%",
  height: "100%",
  cursor: "pointer",
});

const ColorPickerTitle = styled("span", {
  lineHeight: "1",
  pt: "$1",
  fontFamily: "$grifter",
  color: "$white",
  userSelect: "none",
});

const ColorPickerPanel = styled("div", {
  my: "$2",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  rowGap: "$2",
  justifyItems: "center",
});

const ColorPickerSwatch = styled("button", {
  width: "32px",
  height: "32px",
  mx: "$1",
  borderRadius: "$round",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$grayAlpha",
});

const colors = {
  slate: {
    slate000: "hsl(206 30.0% 98.8%)",
    slate100: "hsl(210 16.7% 97.6%)",
    slate200: "hsl(209 13.3% 95.3%)",
    slate300: "hsl(209 12.2% 93.2%)",
    slate400: "hsl(208 11.7% 91.1%)",
    slate500: "hsl(208 11.3% 88.9%)",
    slate600: "hsl(207 11.1% 85.9%)",
    slate700: "hsl(205 10.7% 78.0%)",
    slate800: "hsl(206 6.0% 56.1%)",
    slate900: "hsl(206 5.8% 52.3%)",
    slate1000: "hsl(206 6.0% 43.5%)",
    slate1100: "hsl(0, 0%, 7%)",
  },
  red: {
    ...tomato,
  },

  blue: {
    ...indigo,
  },
  green: {
    ...grass,
  },
  yellow: {
    ...amber,
  },
};

export const ColorPicker = ({ onClick }) => {
  const [colorSection, changeColorSection] = useState(0);
  const [colorValues, changeColorValues] = useState([]);

  useEffect(() => {
    const colorValuesArray = [];
    const colorSectionTitle = Object.keys(colors)[colorSection];

    for (let i = 0; i < 12; i++) {
      // let colorName = Object.entries(colors[colorSection])[i][0];
      let colorValue = Object.entries(colors[colorSectionTitle])[i][1];
      // console.log(colorValue);
      colorValuesArray.push(colorValue);
    }

    changeColorValues(colorValuesArray);
  }, [colorSection]);

  const clickLeftArrow = () => {
    if (colorSection > 0) {
      changeColorSection(colorSection - 1);
    } else {
      changeColorSection(4);
    }
  };

  const clickRightArrow = () => {
    if (colorSection < 4) {
      changeColorSection(colorSection + 1);
    } else {
      changeColorSection(0);
    }
  };

  return (
    <ColorPickerBox>
      <ColorPickerHeader>
        <ColorPickerArrow onClick={() => clickLeftArrow()}>
          <ArrowIcon width={10} />
        </ColorPickerArrow>
        <ColorPickerTitle>{Object.keys(colors)[colorSection]}</ColorPickerTitle>
        <ColorPickerArrow onClick={() => clickRightArrow()}>
          <ArrowIcon flipDirection width={10} />
        </ColorPickerArrow>
      </ColorPickerHeader>
      <ColorPickerPanel>
        {Object.keys(colors).map((colorGroup) => {
          if (colorGroup.toString() === Object.keys(colors)[colorSection]) {
            return colorValues.map((color) => (
              <ColorPickerSwatch
                key={color}
                css={{ backgroundColor: color }}
                value={color}
                onClick={onClick}
              />
            ));
          }
        })}
      </ColorPickerPanel>
    </ColorPickerBox>
  );
};
