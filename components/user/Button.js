import { useNode } from "@craftjs/core";
import { StyledButton } from "../styled/StyledButton";
import { StyledBox } from "../styled/StyledBox";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { StyledLabel } from "../styled/settings/Label";
import { ColorPicker } from "../styled/settings/ColorPicker";

export const Button = ({ size, variant, color, text }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <StyledButton
      ref={connect}
      size={size}
      // variant={variant}
      type={variant}
      style={{ backgroundColor: color }}
    >
      {text}
    </StyledButton>
  );
};

const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <StyledBox flex direction="column" css={{ mt: "$1" }}>
      <StyledLabel>Size</StyledLabel>
      <StyledToggleGroup
        currentValue={props.size}
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
        currentValue={props.color}
        onValueChange={(value) => setProp((props) => (props.color = value))}
        valueOne="black"
        labelOne="Primary"
        valueTwo="white"
        labelTwo="Secondary"
        valueThree="none"
        labelThree="Text"
      />
      {/* <form
        onChange={(e) => setProp((props) => (props.variant = e.target.value))}
      >
        <h3>Variant</h3>
        <div>
          <StyledButton>Text</StyledButton>
          <StyledButton>Outlined</StyledButton>
          <StyledButton>Solid</StyledButton>
        </div>
      </form> */}
      {/* <StyledText variant="settings">Color</StyledText> */}
      <ColorPicker
        onClick={(e) => setProp((props) => (props.color = e.target.value))}
      />
      {/* <div>
          <StyledButton>Blue</StyledButton>
          <StyledButton>Purple</StyledButton>
          <StyledButton>Pink</StyledButton>
        </div>
      <input
        defaultValue={props.text}
        onChange={(e) => setProp((props) => (props.text = e.target.value))}
      /> */}
    </StyledBox>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    size: "sm",
    variant: "solid",
    color: "black",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
