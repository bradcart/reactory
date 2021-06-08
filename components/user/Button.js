import React from "react";
import { Button as RebassButton, Flex } from "rebass";
import { useNode } from "@craftjs/core";

export const Button = ({ size, variant, color, text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <RebassButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      bg={color}
    >
      {text}
    </RebassButton>
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
    <Flex flexDirection="column">
      <form onChange={(e) => setProp((props) => (props.size = e.target.value))}>
        <h3>Size</h3>
        <div>
          <RebassButton>Small</RebassButton>
          <RebassButton>Medium</RebassButton>
          <RebassButton>Large</RebassButton>
        </div>
      </form>
      <form
        onChange={(e) => setProp((props) => (props.variant = e.target.value))}
      >
        <h3>Variant</h3>
        <div>
          <RebassButton>Text</RebassButton>
          <RebassButton>Outlined</RebassButton>
          <RebassButton>Solid</RebassButton>
        </div>
      </form>
      <form
        onChange={(e) => setProp((props) => (props.color = e.target.value))}
      >
        <h3>Color</h3>
        <div>
          <RebassButton>Blue</RebassButton>
          <RebassButton>Purple</RebassButton>
          <RebassButton>Pink</RebassButton>
        </div>
      </form>
      <input
        defaultValue={props.text}
        onChange={(e) => setProp((props) => (props.text = e.target.value))}
      />
    </Flex>
  );
};

Button.craft = {
  props: {
    size: "sm",
    variant: "solid",
    color: "blue",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
