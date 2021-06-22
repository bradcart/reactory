import { styled, theme } from "../../../stitches.config";

const ColorPickerPanel = styled("div", {
  padding: "$3",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  rowGap: "$2",
  justifyItems: "center",
  backgroundColor: "#909392",
  borderRadius: "$3",
});

const ColorPickerSwatch = styled("button", {
  width: "32px",
  height: "32px",
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

const ColorPicker = ({ onClick }) => {
  return (
    <ColorPickerPanel>
      {Object.entries(theme.colors).map(([key, value]) => {
        return key !== "test" ? (
          <ColorPickerSwatch key={key} css={{ backgroundColor: value }} />
        ) : null;
      })}
    </ColorPickerPanel>
  );
};

export default ColorPicker;
