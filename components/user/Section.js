import { useNode } from "@craftjs/core";
import { StyledSection } from "../base/Section/StyledSection";
import { StyledBox } from "../base/Box/StyledBox";
import {
  SettingsWrapper,
  Label,
  Slider,
  ToggleGroup,
  ColorPicker,
  Separator,
} from "../interface/settings";

export const Section = ({
  height,
  padding,
  background,
  direction,
  justify,
  align,
  children,
}) => {
  const {
    connectors: { connect },
  } = useNode();

  //VARIANTS: FLEX DIRECTION, ALIGN ITEMS, JUSTIFY CONTENT, BORDER, BORDER RADIUS
  //STYLE PROP: WIDTH, HEIGHT, PADDING, BGCOLOR
  return (
    <StyledSection
      ref={connect}
      direction={direction}
      justify={justify}
      align={align}
      style={{
        minHeight: `${height}vh`,
        maxHeight: "auto",
        // height: autoHeight ? "auto" : `${height}vh`,
        padding: padding,
        backgroundColor: background,
      }}
    >
      {children}
    </StyledSection>
  );
};

export const SectionSettings = () => {
  const {
    height,
    padding,
    size,
    direction,
    justify,
    align,
    background,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    height: node.data.props.height,
    padding: node.data.props.padding,
    size: node.data.props.size,
    direction: node.data.props.direction,
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
      <Label htmlFor="section__height">Height</Label>
      <Slider
        id="section__height"
        value={[height]}
        onValueChange={(value) => setProp((props) => (props.height = value[0]))}
        step={1}
        min={1}
        max={99}
      />
      <Label htmlFor="section__padding">Padding</Label>
      <Slider
        id="section__padding"
        value={[padding]}
        onValueChange={(value) =>
          setProp((props) => (props.padding = value[0]))
        }
        step={5}
        min={0}
        max={80}
      />
      {/* <Label htmlFor="section__size">Size</Label>
      <ToggleGroup
        id="section__size"
        currentValue={size}
        onValueChange={(value) => setProp((props) => (props.size = value))}
        valueOne="sm"
        labelOne="Small"
        valueTwo="md"
        labelTwo="Medium"
        valueThree="lg"
        labelThree="Large"
      /> */}
      <Label htmlFor="section__direction">Direction</Label>
      <ToggleGroup
        id="section__direction"
        currentValue={direction}
        onValueChange={(value) => setProp((props) => (props.direction = value))}
        valueOne="row"
        labelOne="Row"
        valueTwo="column"
        labelTwo="Column"
      />
      <Label htmlFor="section__justify">Justify</Label>
      <ToggleGroup
        id="section__justify"
        currentValue={justify}
        onValueChange={(value) => setProp((props) => (props.justify = value))}
        valueOne="start"
        labelOne="Left"
        valueTwo="center"
        labelTwo="Center"
        valueThree="end"
        labelThree="Right"
      />
      <Label htmlFor="section__align">Align</Label>
      <ToggleGroup
        id="section__align"
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
export const SectionDefaultProps = {
  background: "inherit",
  height: 20,
  padding: 10,
  direction: "row",
  justify: "center",
  align: "center",
};

Section.craft = {
  displayName: "Section",
  props: SectionDefaultProps,
  custom: {
    nodeName: "Section",
  },
  rules: {
    canDrop: (targetNode) => targetNode.data.displayName === "Page",
    canMoveIn: (incomingNode) => incomingNode.data.displayName !== "Section",
  },
  related: {
    settings: SectionSettings,
  },
};
