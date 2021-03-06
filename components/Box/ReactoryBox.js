import { useNode } from "@craftjs/core";
import { Box } from "./Box";
import {
  SettingsWrapper,
  Label,
  Slider,
  ToggleGroup,
  ColorPicker,
  Separator,
} from "..";

export const ReactoryBox = ({
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
    <Box
      ref={connect}
      direction={direction}
      justify={justify}
      align={align}
      style={{
        backgroundColor: background,
        width: `${width}%`,
        height: `${height}vh`,
        padding: padding,
      }}
    >
      {children}
    </Box>
  );
};

export const ReactoryBoxSettings = () => {
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
      <Label htmlFor="box__width">Width</Label>
      <Slider
        id="box__width"
        value={[width]}
        onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        step={1}
        min={0}
        max={99}
      />
      <Label htmlFor="box__height">Height</Label>
      <Slider
        id="box__height"
        value={[height]}
        onValueChange={(value) => setProp((props) => (props.height = value[0]))}
        step={1}
        min={0}
        max={99}
      />
      <Label htmlFor="box__padding">Padding</Label>
      <Slider
        id="box__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      <Separator />
      <Label htmlFor="box__justify">Justify</Label>
      <ToggleGroup
        id="box__justify"
        currentValue={justify}
        onValueChange={(value) => setProp((props) => (props.justify = value))}
        valueOne="start"
        labelOne="Left"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="Right"
      />
      <Label htmlFor="box__align">Align</Label>
      <ToggleGroup
        id="box__align"
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
      <Label htmlFor="box__background">Background</Label>
      <ColorPicker
        id="box__background"
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </SettingsWrapper>
  );
};

// We export this because we'll be using this in the Card component as well
export const ReactoryBoxDefaultProps = {
  background: "#ffffff",
  width: 30,
  height: 30,
  padding: 20,
  justify: "center",
  align: "center",
};

ReactoryBox.craft = {
  displayName: "Box",
  props: ReactoryBoxDefaultProps,
  custom: {
    nodeName: "Box",
  },
  related: {
    settings: ReactoryBoxSettings,
  },
};
