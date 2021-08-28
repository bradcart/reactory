import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { styled } from "../../../../stitches.config";
// import * as Separator from "@radix-ui/react-separator";

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

  // Custom
  cursor: "pointer",
  flexGrow: 1,
  padding: "6px 10px 5px 10px",
  borderColor: "inherit",
  fontSize: "$3",
  backgroundColor: "$black200",
  color: "inherit",
  fontFamily: "$ddin",
  textTransform: "lowercase",
  "&[data-state=on]": {
    backgroundColor: "$gray300",
    color: "$white",
    boxShadow: "0px 2px 4px 0px rgba(0,0,0,.1),0px 1px 0px 0px rgba(0,0,0,.05)",
  },
  "&[data-state=off]": {
    "&:hover": {
      color: "$white",
    },
  },
});

const ToggleRoot = styled(ToggleGroupPrimitive.Root, {
  display: "flex",
  justifyContent: "space-between",
  // gridAutoFlow: "column",
  width: "95%",
  p: 0,
  mt: "$2",
  mb: "$5",

  color: "$gray600",
  borderRadius: "$1",
  borderColor: "transparent",
  overflow: "hidden",
  variants: {
    numberOfButtons: {
      3: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      2: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
  },
});

// const ToggleSeparator = styled(Separator.Root, {
//   backgroundColor: "$gray400",
//   height: 27,
//   width: 1,
// });

export const ToggleGroup = ({
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
    <ToggleRoot
      type="single"
      id={id}
      value={currentValue}
      onValueChange={onValueChange}
      as={ToggleRoot}
      numberOfButtons={valueThree ? 3 : 2}
    >
      <ToggleGroupPrimitive.Item
        value={valueOne}
        disabled={currentValue === valueOne ? true : false}
        as={ToggleButton}
      >
        {labelOne}
      </ToggleGroupPrimitive.Item>
      {/* <ToggleSeparator orientation="vertical" decorative /> */}
      <ToggleGroupPrimitive.Item
        value={valueTwo}
        disabled={currentValue === valueTwo ? true : false}
        as={ToggleButton}
      >
        {labelTwo}
      </ToggleGroupPrimitive.Item>
      {valueThree && labelThree ? (
        <ToggleGroupPrimitive.Item
          value={valueThree}
          disabled={currentValue === valueThree ? true : false}
          as={ToggleButton}
        >
          {labelThree}
        </ToggleGroupPrimitive.Item>
      ) : null}
    </ToggleRoot>
  );
};
