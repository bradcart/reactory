import { useNode } from "@craftjs/core";
import { StyledBox } from "../styled/StyledBox";
import { StyledText } from "../styled/StyledText";
import { StyledSlider } from "../styled/inputs/Slider";
import { StyledToggleGroup } from "../styled/inputs/ToggleGroup";
import { CheckboxIcon } from "../icons/CheckboxIcon";

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
    align,
    actions: { setProp },
  } = useNode((node) => ({
    width: node.data.props.width,
    height: node.data.props.height,
    padding: node.data.props.padding,
    justify: node.data.props.justify,
    align: node.data.props.align,
  }));

  return (
    <>
      {/* <CheckboxIcon /> */}
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
        labelOne="Left"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="Right"
      />
      <StyledText variant="settings">Align</StyledText>
      <StyledToggleGroup
        currentValue={align}
        onValueChange={(value) => setProp((props) => (props.align = value))}
        valueOne="start"
        labelOne="Top"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="Bottom"
      />
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
  align: "center",
};

Container.craft = {
  displayName: "Container",
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
