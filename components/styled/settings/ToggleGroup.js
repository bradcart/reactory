import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Separator from "@radix-ui/react-separator";
import { styled } from "../../../stitches.config";

// const ToggleHighlighter = styled("div", {
//   position: "absolute",
//   width: "calc(100% / 3)",
//   pointerEvents: "none",
//   "&::after": {
//     content: "",
//     position: "absolute",
//     width: "100%",
//     height: 27,
//     zIndex: 10,
//     top: 1,
//     right: 1,
//     bottom: 1,
//     left: "200%",
//     backgroundColor: "$translucentGray",
//     borderRadius: "$1",
//     boxShadow: "2px 4px rgba(0, 0, 0, .1)",
//   },
// });

const ToggleButton = styled("button", {
  // Reset
  alignItems: "center",
  appearance: "none",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: 1,
  margin: "0",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  //Custom
  // flexGrow: 1,
  padding: "6px 5px 5px 5px",
  borderRadius: "inherit",
  borderColor: "inherit",
  fontSize: "11px",
  backgroundColor: "inherit",
  color: "inherit",
  fontFamily: "$helvetica",
  "&[data-state=on]": {
    backgroundColor: "$black300",
    color: "$white",
  },
  width: "100%",
  // variants: {
  //   numberTotal: {
  //     3: {
  //       width: "calc(100% / 3)",
  //     },
  //     2: {
  //       width: "50%",
  //     },
  //   },
  // },
});

const ToggleRoot = styled("div", {
  p: 0,
  mt: "$1",
  mb: "$6",
  // display: "flex",
  // position: "relative",
  borderRadius: "$1",
  borderColor: "transparent",
  backgroundColor: "$black400",
  color: "$gray600",
  display: "inline-grid",
  gridAutoFlow: "column",
  variants: {
    numberTotal: {
      3: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      2: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
  },
});

const ToggleSeparator = styled(Separator.Root, {
  backgroundColor: "$gray400",
  height: 27,
  width: 1,
});

export const StyledToggleGroup = ({
  id,
  currentValue,
  onValueChange,
  valueOne,
  labelOne,
  valueTwo,
  labelTwo,
  valueThree,
  labelThree,
}) => {
  return (
    <ToggleGroup.Root
      type="single"
      id={id}
      value={currentValue}
      onValueChange={onValueChange}
      as={ToggleRoot}
      numberTotal={valueThree ? 3 : 2}
    >
      <ToggleGroup.Item
        value={valueOne}
        disabled={currentValue === valueOne ? true : false}
        as={ToggleButton}
      >
        {labelOne}
      </ToggleGroup.Item>
      {/* <ToggleSeparator orientation="vertical" decorative /> */}
      <ToggleGroup.Item
        value={valueTwo}
        disabled={currentValue === valueTwo ? true : false}
        as={ToggleButton}
      >
        {labelTwo}
      </ToggleGroup.Item>
      {valueThree && labelThree ? (
        <ToggleGroup.Item
          value={valueThree}
          disabled={currentValue === valueThree ? true : false}
          as={ToggleButton}
        >
          {labelThree}
        </ToggleGroup.Item>
      ) : null}
      {/* <ToggleHighlighter
        style={
          currentValue === 1
            ? { left: "1px" }
            : currentValue === 2
            ? { left: 200 }
            : { left: "auto" }
        }
      /> */}
    </ToggleGroup.Root>
  );
};
