import { useNode } from "@craftjs/core";

import { StyledBox } from "../styled/StyledBox";

import { StyledText } from "../styled/StyledText";
import { StyledSlider } from "../styled/inputs/Slider";
import { StyledToggleGroup } from "../styled/inputs/ToggleGroup";

export const Container = ({
  background,
  width,
  height,
  padding,
  flex,
  direction,
  justify,
  align,
  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  //VARIANTS: FLEX, FLEX DIRECTION, ALIGN ITEMS, JUSTIFY CONTENT, BORDER, BORDER RADIUS
  //STYLE PROP: WIDTH, HEIGHT, PADDING, BGCOLOR
  return (
    <StyledBox
      ref={(ref) => connect(drag(ref))}
      flex={flex}
      direction={direction}
      justify={justify}
      align={align}
      style={{
        backgroundColor: background,
        width: `${width}%`,
        height: `${height}%`,
        padding: padding,
      }}
    >
      {children}
    </StyledBox>
  );
};

export const ContainerSettings = () => {
  const {
    width,
    height,
    padding,
    justify,
    actions: { setProp },
  } = useNode((node) => ({
    width: node.data.props.width,
    height: node.data.props.height,
    padding: node.data.props.padding,
    justify: node.data.props.justify,
  }));

  return (
    <>
      <StyledText variant="settings">Width</StyledText>
      <StyledSlider
        value={[width]}
        onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        step={1}
        min={0}
        max={100}
      />
      <StyledText variant="settings">Height</StyledText>
      <StyledSlider
        value={[height]}
        onValueChange={(value) => setProp((props) => (props.height = value[0]))}
        step={1}
        min={0}
        max={100}
      />
      <StyledText variant="settings">Padding</StyledText>
      <StyledSlider
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <StyledText variant="settings">Justify</StyledText>
      <StyledToggleGroup
        currentValue={justify}
        onValueChange={(value) => setProp((props) => (props.justify = value))}
        valueOne="start"
        labelOne="Start"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="End"
      />
      {/* <div className="slidecontainer">
        <input
          type="range"
          min={1}
          max={50}
          step={7}
          className="slider"
          value={padding}
          onChange={(e) => {
            setProp((props) => (props.padding = e.target.value));
          }}
        />
      </div> */}
    </>
  );
};

// We export this because we'll be using this in the Card component as well
export const ContainerDefaultProps = {
  background: "#ffffff",
  width: 30,
  height: 30,
  padding: 20,
  flex: true,
  justify: "center",
};

Container.craft = {
  displayName: "Container",
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
