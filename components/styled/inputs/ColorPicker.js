import { styled, theme } from "../../../stitches.config";
import {
  slate,
  slateDark,
  blue,
  red,
  yellow,
  green,
  tomato,
  indigo,
  grass,
  amber,
} from "@radix-ui/colors";
import { useEffect, useState } from "react";
import { LeftArrowIcon } from "../../icons/LeftArrowIcon";
import { RightArrowIcon } from "../../icons/RightArrowIcon";

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
  border: "1px solid $white",
  borderRadius: "$3",
});

const ColorPickerTitle = styled("span", {
  lineHeight: "1",
  pt: "$1",
  fontFamily: "$grifter",
  color: "$white",
  userSelect: "none",
});

const ColorPickerPanel = styled("div", {
  //   padding: "$3",
  my: "$2",
  //   mb: "$5",
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
  //   variants: {
  //     color: {
  //       black: "$black",
  //       white: "$white",
  //       pine: "$pine800",
  //       yellow: "$yellow600",
  //       red: "$red500",
  //     },
  //   },
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

  useEffect(() => {
    const colorValuesArray = [];
    const colorSectionTitle = Object.keys(colors)[colorSection];

    for (let i = 0; i < 12; i++) {
      // let colorName = Object.entries(colors[colorSection])[i][0];
      // if (colorSection >= 0 && colorSection <= 4) {
      let colorValue = Object.entries(colors[colorSectionTitle])[i][1];
      colorValuesArray.push(colorValue);
      // }
    }
    changeColorValues(colorValuesArray);
  }, [colorSection]);

  return (
    <ColorPickerBox>
      <div
        style={{
          margin: "5px",
          width: "100%",
          height: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <span
          style={{ width: "25%", height: "100%" }}
          onClick={() => clickLeftArrow()}
        >
          <LeftArrowIcon width={10} />
        </span>
        <ColorPickerTitle>{Object.keys(colors)[colorSection]}</ColorPickerTitle>
        <span
          style={{ width: "25%", height: "100%" }}
          onClick={() => clickRightArrow()}
        >
          <RightArrowIcon width={10} />
        </span>
      </div>
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
