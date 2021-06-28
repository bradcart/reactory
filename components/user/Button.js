import { useNode, Element } from "@craftjs/core";
import { Text } from "./Text";
import { StyledButton } from "../styled/StyledButton";
import { StyledBox } from "../styled/StyledBox";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { StyledLabel } from "../styled/settings/Label";
import { ColorPicker } from "../styled/settings/ColorPicker";
import { StyledInput } from "../styled/settings/TextInput";
import { StyledSeparator } from "../styled/settings/Separator";
import * as StyledAccordion from "../styled/settings/Accordion";

export const Button = ({ size, variant, background, color, text }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <StyledButton
      ref={connect}
      size={size}
      variant={variant}
      style={{
        backgroundColor: variant === "solid" ? background : "transparent",
        borderColor: variant === "outline" ? background : "transparent",
        color: color,
      }}
    >
      <Element
        is={Text}
        id="button__text-value"
        text="Click me"
        tagName="span"
        fontSize={14}
      />
    </StyledButton>
  );
};

const ButtonSettings = () => {
  const {
    size,
    variant,
    background,
    color,
    actions: { setProp },
  } = useNode((node) => ({
    size: node.data.props.size,
    variant: node.data.props.variant,
    background: node.data.props.background,
    color: node.data.props.color,
  }));

  return (
    <StyledBox css={{ mt: "$1" }}>
      <StyledSeparator />
      <StyledLabel htmlFor="button__size">Size</StyledLabel>
      <StyledToggleGroup
        id="button__size"
        currentValue={size}
        onValueChange={(value) => setProp((props) => (props.size = value))}
        valueOne="sm"
        labelOne="Small"
        valueTwo="md"
        labelTwo="Medium"
        valueThree="lg"
        labelThree="Large"
      />
      <StyledLabel htmlFor="button__variant">Variant</StyledLabel>
      <StyledToggleGroup
        id="button__variant"
        currentValue={variant}
        onValueChange={(value) => setProp((props) => (props.variant = value))}
        valueOne="solid"
        labelOne="Solid"
        valueTwo="outline"
        labelTwo="Outline"
        valueThree="text"
        labelThree="Text"
      />
      <StyledSeparator />
      <StyledLabel htmlFor="button__background-color">Background</StyledLabel>
      <ColorPicker
        id="button__background-color"
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
      <StyledLabel htmlFor="button__text-color">Text</StyledLabel>
      <ColorPicker
        id="button__text-color"
        onClick={(e) => setProp((props) => (props.color = e.target.value))}
      />
    </StyledBox>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    size: "md",
    variant: "solid",
    background: "#111",
    color: "#fff",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
