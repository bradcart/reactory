import { useNode } from "@craftjs/core";

import { StyledButton } from "../styled/StyledButton";

import { StyledBox } from "../styled/StyledBox";
import { StyledToggleGroup } from "../styled/inputs/ToggleGroup";

export const Button = ({ size, variant, color, text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <StyledButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      // variant={variant}
      color={color}
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
    <StyledBox
      css={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <h3>Size</h3>
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
      <form
        onChange={(e) => setProp((props) => (props.color = e.target.value))}
      >
        <h3>Color</h3>
        <div>
          <StyledButton>Blue</StyledButton>
          <StyledButton>Purple</StyledButton>
          <StyledButton>Pink</StyledButton>
        </div>
      </form>
      <input
        defaultValue={props.text}
        onChange={(e) => setProp((props) => (props.text = e.target.value))}
      />
    </StyledBox>
  );
};

Button.craft = {
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
