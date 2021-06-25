import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
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
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        css={{
          fontSize: `${fontSize}px`,
        }}
      />
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
    <form>
      <label>Font size</label>
      <div className="slidecontainer">
        <input
          type="range"
          min={1}
          max={50}
          step={7}
          className="slider"
          value={fontSize}
          onChange={(e) => {
            setProp((props) => (props.fontSize = e.target.value));
          }}
        />
      </div>
    </form>
  );
};

Text.craft = {
  displayName: "Text",
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
