import { useEffect, useState } from "react";
import { useNode, Element } from "@craftjs/core";
import { Text } from "./Text";
import { StyledButton } from "../styled/StyledButton";
import { StyledLink } from "../styled/StyledLink";
import {
  SettingsWrapper,
  ToggleGroup,
  Label,
  ColorPicker,
  Form,
  TextInput,
  Separator,
} from "../styled/settings";

export const Button = ({
  size,
  variant,
  background,
  color,
  href,
  skipParentNode = false,
}) => {
  const {
    connectors: { connect },
    actions: { setCustom },
  } = useNode();

  useEffect(() => {
    if (skipParentNode) {
      setCustom((custom) => (custom.skipParentNode = true));
    }
  }, []);

  return (
    <StyledButton
      ref={connect}
      size={size}
      variant={variant}
      style={{
        backgroundColor: variant === "solid" ? background : "transparent",
        borderColor: variant === "outline" ? background : "transparent",
        // color: color,
      }}
    >
      {href !== "" ? (
        <StyledLink href={href} target="_blank" rel="noreferrer">
          <Element
            is={Text}
            id="button__text-value"
            text="Click me"
            tagName="span"
            fontSize={14}
            color={color}
          />
        </StyledLink>
      ) : (
        <Element
          is={Text}
          id="button__text-value"
          text="Click me"
          tagName="span"
          fontSize={14}
          color={color}
        />
      )}
    </StyledButton>
  );
};

const ButtonSettings = () => {
  const {
    size,
    variant,
    background,
    href,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    size: node.data.props.size,
    variant: node.data.props.variant,
    background: node.data.props.background,
    href: node.data.props.href,
    selected: node.events.selected,
    nodeName: node.data.custom.nodeName,
  }));

  const [buttonHref, changeButtonHref] = useState(href);

  const updateHref = (e) => {
    e.preventDefault();
    setProp((props) => (props.href = buttonHref));
    if (nodeName === "Button") {
      setCustom((custom) => (custom.nodeName = "Button link"));
    }
  };

  return (
    <SettingsWrapper
      selected={selected}
      nodeName={nodeName}
      setCustom={setCustom}
    >
      <Separator decorative css={{ opacity: 0 }} />
      <Label htmlFor="button__size">Size</Label>
      <ToggleGroup
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
      <Label htmlFor="button__variant">Variant</Label>
      <ToggleGroup
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
      <Separator />
      <Label htmlFor="button__background-color">Background</Label>
      <ColorPicker
        id="button__background-color"
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
      <Separator />
      <Label htmlFor="button__action">Link to</Label>
      <Form name="button-href" onSubmit={(e) => updateHref(e)}>
        <TextInput
          id="button__action"
          type="text"
          placeholder={href === "" ? "paste link URL here" : href}
          onChange={(e) => changeButtonHref(e.target.value)}
        />
      </Form>
    </SettingsWrapper>
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
    href: "",
  },
  custom: {
    skipParentNode: false,
    nodeName: "Button",
  },
  related: {
    settings: ButtonSettings,
  },
};
