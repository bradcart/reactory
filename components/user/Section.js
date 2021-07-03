import { useNode } from "@craftjs/core";
import { StyledSection } from "../styled/StyledSection";
import { SettingsWrapper } from "../styled/settings/wrapper";
import { StyledBox } from "../styled/StyledBox";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSlider } from "../styled/settings/Slider";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { StyledSeparator } from "../styled/settings/Separator";
import { ColorPicker } from "../styled/settings/ColorPicker";

export const Section = ({
  size,
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
      size={size}
      direction={direction}
      justify={justify}
      align={align}
      style={{
        backgroundColor: background,
      }}
    >
      {children}
    </StyledSection>
  );
};

export const SectionSettings = () => {
  const {
    size,
    direction,
    justify,
    align,
    background,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
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
      <StyledSeparator decorative css={{ opacity: 0 }} />
      <StyledLabel htmlFor="section__size">Size</StyledLabel>
      <StyledToggleGroup
        id="section__size"
        currentValue={size}
        onValueChange={(value) => setProp((props) => (props.size = value))}
        valueOne="sm"
        labelOne="Small"
        valueTwo="md"
        labelTwo="Medium"
        valueThree="lg"
        labelThree="Large"
      />
      <StyledLabel htmlFor="section__direction">Direction</StyledLabel>
      <StyledToggleGroup
        id="section__direction"
        currentValue={direction}
        onValueChange={(value) => setProp((props) => (props.direction = value))}
        valueOne="row"
        labelOne="Row"
        valueTwo="column"
        labelTwo="Column"
      />
      <StyledLabel htmlFor="section__justify">Justify</StyledLabel>
      <StyledToggleGroup
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
      <StyledLabel htmlFor="section__align">Align</StyledLabel>
      <StyledToggleGroup
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
      <StyledSeparator />
      <StyledLabel>Background</StyledLabel>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </SettingsWrapper>
  );
};

// We export this because we'll be using this in the Card component as well
export const SectionDefaultProps = {
  background: "inherit",
  size: "md",
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
    canDrop: (targetNode) => targetNode.data.displayName == "Page",
    canMoveIn: (incomingNode) => incomingNode.data.displayName !== "Section",
  },
  related: {
    settings: SectionSettings,
  },
};
