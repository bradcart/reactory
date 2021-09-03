import { useEffect, useState } from "react";
import { useNode, Element } from "@craftjs/core";
import { Button } from ".";
import {
  ReactoryText,
  Link,
  SettingsWrapper,
  ToggleGroup,
  Label,
  ColorPicker,
  Form,
  TextInput,
  Separator,
} from "..";

export const ReactoryButton = ({
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
    <Button
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
        <Link href={href} target="_blank" rel="noreferrer">
          <Element
            is={ReactoryText}
            id="button__text-value"
            text="Click me"
            tagName="span"
            fontSize={14}
            color={color}
          />
        </Link>
      ) : (
        <Element
          is={ReactoryText}
          id="button__text-value"
          text="Click me"
          tagName="span"
          fontSize={14}
          color={color}
        />
      )}
    </Button>
  );
};

const ReactoryButtonSettings = () => {
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
      <Label htmlFor="button__action">Link to</Label>
      <Form name="button-href" onSubmit={(e) => updateHref(e)}>
        <TextInput
          id="button__action"
          type="text"
          placeholder={href === "" ? "paste link URL here" : href}
          onChange={(e) => changeButtonHref(e.target.value)}
        />
      </Form>
      <Separator />
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
      <Label htmlFor="button__background">Background</Label>
      <ColorPicker
        id="button__background"
        onClick={(e) => setProp((props) => (props.background = e.target.value))}
      />
    </SettingsWrapper>
  );
};

ReactoryButton.craft = {
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
    settings: ReactoryButtonSettings,
  },
};
