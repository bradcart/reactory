import { useNode } from "@craftjs/core";
// import { StyledBox } from "../base/Box/StyledBox";
import { StyledBox } from "../base/Box/StyledBox";
import {
  SettingsWrapper,
  Label,
  Slider,
  ToggleGroup,
  ColorPicker,
  Separator,
} from "../interface/settings";

export const Box = ({
  background,
  width,
  height,
  padding,
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
      direction={direction}
      justify={justify}
      align={align}
      style={{
        backgroundColor: background,
        width: `${width}%`,
        // height: `${height * 10}px`,
        height: `${height}vh`,
        // maxHeight: "auto",
        padding: padding,
      }}
    >
      {children}
    </StyledBox>
  );
};

export const BoxSettings = () => {
  const {
    width,
    height,
    padding,
    justify,
    align,
    background,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    width: node.data.props.width,
    height: node.data.props.height,
    padding: node.data.props.padding,
    justify: node.data.props.justify,
    align: node.data.props.align,
    background: node.data.props.background,
    selected: node.events.selected,
    nodeName: node.data.custom.nodeName,
  }));

  return (
    <SettingsWrapper
      selected={selected}
      nodeName={nodeName}
      setCustom={setCustom}
    >
      <Separator decorative css={{ opacity: 0 }} />
      <Label htmlFor="container__width">Width</Label>
      <Slider
        id="container__width"
        value={[width]}
        onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        step={1}
        min={0}
        max={99}
      />
      <Label htmlFor="container__height">Height</Label>
      <Slider
        id="container__height"
        value={[height]}
        onValueChange={(value) => setProp((props) => (props.height = value[0]))}
        step={1}
        min={0}
        max={99}
      />
      <Label htmlFor="container__padding">Padding</Label>
      <Slider
        id="container__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <Separator />
      <Label htmlFor="container__justify">Justify</Label>
      <ToggleGroup
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
      <Label htmlFor="container__align">Align</Label>
      <ToggleGroup
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
      <Separator />
      <Label>Background</Label>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </SettingsWrapper>
  );
};

// We export this because we'll be using this in the Card component as well
export const BoxDefaultProps = {
  background: "#ffffff",
  width: 30,
  height: 30,
  padding: 20,
  justify: "center",
  align: "center",
};

Box.craft = {
  displayName: "Box",
  props: BoxDefaultProps,
  custom: {
    nodeName: "Box",
  },
  related: {
    settings: BoxSettings,
  },
};
