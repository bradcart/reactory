import { useNode } from "@craftjs/core";
import { StyledBox } from "../styled/StyledBox";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSlider } from "../styled/settings/Slider";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { ColorPicker } from "../styled/settings/ColorPicker";
import { StyledSeparator } from "../styled/settings/Separator";

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
    connectors: { connect },
  } = useNode();

  //VARIANTS: FLEX, FLEX DIRECTION, ALIGN ITEMS, JUSTIFY CONTENT, BORDER, BORDER RADIUS
  //STYLE PROP: WIDTH, HEIGHT, PADDING, BGCOLOR
  return (
    <StyledBox
      ref={connect}
      flex={flex}
      direction={direction}
      justify={justify}
      align={align}
      style={{
        backgroundColor: background,
        width: `${width}%`,
        // height: `${height * 10}px`,
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
    background,
    actions: { setProp },
  } = useNode((node) => ({
    width: node.data.props.width,
    height: node.data.props.height,
    padding: node.data.props.padding,
    justify: node.data.props.justify,
    align: node.data.props.align,
    background: node.data.props.background,
  }));

  return (
    <StyledBox css={{ mt: "$1" }}>
      <StyledSeparator decorative css={{ opacity: 0 }} />
      <StyledLabel htmlFor="container__width">Width</StyledLabel>
      <StyledSlider
        id="container__width"
        value={[width]}
        onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        step={1}
        min={0}
        max={100}
      />
      <StyledLabel htmlFor="container__height">Height</StyledLabel>
      <StyledSlider
        id="container__height"
        value={[height]}
        onValueChange={(value) => setProp((props) => (props.height = value[0]))}
        step={1}
        min={0}
        max={100}
      />
      <StyledLabel htmlFor="container__padding">Padding</StyledLabel>
      <StyledSlider
        id="container__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <StyledSeparator />
      <StyledLabel htmlFor="container__justify">Justify</StyledLabel>
      <StyledToggleGroup
        id="container__justify"
        currentValue={justify}
        onValueChange={(value) => setProp((props) => (props.justify = value))}
        valueOne="start"
        labelOne="Left"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="Right"
      />
      <StyledLabel htmlFor="container__align">Align</StyledLabel>
      <StyledToggleGroup
        id="container__align"
        currentValue={align}
        onValueChange={(value) => setProp((props) => (props.align = value))}
        valueOne="start"
        labelOne="Top"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="Bottom"
      />
      <StyledSeparator />
      <StyledLabel>Background</StyledLabel>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </StyledBox>
  );
};

// We export this because we'll be using this in the Card component as well
export const ContainerDefaultProps = {
  background: "#ffffff",
  width: 30,
  height: 16,
  padding: 20,
  flex: false,
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
