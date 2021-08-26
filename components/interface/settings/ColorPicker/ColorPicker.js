import { useEffect, useState } from "react";
import { styled } from "../../../../stitches.config";
import {
  gray,
  slate,
  tomato,
  red,
  crimson,
  plum,
  violet,
  indigo,
  blue,
  mint,
  teal,
  green,
  yellow,
  amber,
  orange,
} from "@radix-ui/colors";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

const ColorPickerBox = styled("div", {
  py: "8px",
  px: "$3",
  mt: "$1",
  mb: "$4",
  mx: "auto",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "$black300",
  // border: "1px solid $grayAlpha",
  borderRadius: "$3",
});

const ColorPickerHeader = styled("div", {
  mx: "$1",
  my: 3,
  width: "100%",
  height: "$3",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ColorPickerArrow = styled("button", {
  // Reset
  all: "unset",
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
  alignItems: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  width: "25%",
  height: "100%",
  borderRadius: "$round",
  cursor: "pointer",
  position: "relative",
  color: "$gray700",
  "&:hover": {
    "&::after": {
      backgroundColor: "$whiteDim",
    },
  },
  "&:active": {
    color: "$gray600",
    "&::after": {
      backgroundColor: "$whiteDimmer",
    },
  },
  "&::after": {
    content: "''",
    position: "absolute",
    background: "transparent",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "22px",
    height: "22px",
    borderRadius: "$round",
  },
});

const ColorPickerTitle = styled("span", {
  width: "50%",
  height: "100%",
  lineHeight: 1.33,
  // pt: "$1",
  fontFamily: "$ddin",
  fontSize: "$2",
  fontWeight: "bold",
  textAlign: "center",
  textTransform: "uppercase",
  color: "$gray700",
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
  width: "28px",
  height: "28px",
  mx: "$1",
  borderRadius: "$round",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "$grayAlpha",
  cursor: "pointer",
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
  tomato: {
    ...tomato,
  },
  red: {
    ...red,
  },
  crimson: {
    ...crimson,
  },
  plum: {
    ...plum,
  },
  violet: {
    ...violet,
  },
  indigo: {
    ...indigo,
  },
  blue: {
    ...blue,
  },
  mint: {
    ...mint,
  },
  teal: {
    ...teal,
  },
  green: {
    ...green,
  },
  yellow: {
    ...yellow,
  },
  amber: {
    ...amber,
  },
  orange: {
    ...orange,
  },
};

export const ColorPicker = ({ id, onClick }) => {
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
    if (colorSection < 13) {
      changeColorSection(colorSection + 1);
    } else {
      changeColorSection(0);
    }
  };

  return (
    <ColorPickerBox id={id}>
      <ColorPickerHeader>
        <ColorPickerArrow
          onClick={() => clickLeftArrow()}
          css={{ pr: "1.6px" }}
        >
          <DoubleArrowLeftIcon />
        </ColorPickerArrow>
        <ColorPickerTitle>{Object.keys(colors)[colorSection]}</ColorPickerTitle>
        <ColorPickerArrow onClick={() => clickRightArrow()}>
          <DoubleArrowRightIcon />
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
