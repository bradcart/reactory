import React, { useState, useEffect } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  FormLabel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useNode } from "@craftjs/core";

export const Text = ({ text, fontSize, textAlign }) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <Editable
        isDisabled={!editable}
        defaultValue={text}
        onChange={(value) =>
          setProp(
            (props) => (props.text = value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        style={{ fontSize: `${fontSize}px`, textAlign }}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <FormControl size="sm" as="fieldset">
      <FormLabel as="legend">Font size</FormLabel>
      <Slider
        aria-label="font-size-slider"
        defaultValue={fontSize}
        step={7}
        min={1}
        max={50}
        onChange={(value) => {
          setProp((props) => (props.fontSize = value));
        }}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </FormControl>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
  },
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
  related: {
    settings: TextSettings,
  },
};
