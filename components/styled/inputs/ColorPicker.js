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
  borderColor: "transparent",
});

const colors = {
  slate: {
    ...slate,
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
