import { useNode } from "@craftjs/core";
import { StyledButton } from "../styled/StyledButton";
import { StyledBox } from "../styled/StyledBox";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { StyledLabel } from "../styled/settings/Label";
import { ColorPicker } from "../styled/settings/ColorPicker";

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
      {text}
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
    <StyledBox flex direction="column" css={{ mt: "$1" }}>
      <StyledLabel>Size</StyledLabel>
      <StyledToggleGroup
        currentValue={size}
        onValueChange={(value) => setProp((props) => (props.size = value))}
        valueOne="sm"
        labelOne="Small"
        valueTwo="md"
        labelTwo="Medium"
        valueThree="lg"
        labelThree="Large"
      />
      <StyledLabel>Variant</StyledLabel>
      <StyledToggleGroup
        currentValue={variant}
        onValueChange={(value) => setProp((props) => (props.variant = value))}
        valueOne="solid"
        labelOne="Solid"
        valueTwo="outline"
        labelTwo="Outline"
        valueThree="text"
        labelThree="Text"
      />
      <StyledLabel>Background</StyledLabel>
      <ColorPicker
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
      <StyledLabel>Text</StyledLabel>
      <ColorPicker
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
