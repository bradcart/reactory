import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { StyledBox } from "../styled/StyledBox";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSlider } from "../styled/settings/Slider";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";

export const Text = ({ text, fontSize, fontWeight, textAlign }) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div style={{ fontWeight: fontWeight, textAlign: textAlign }}>
      <ContentEditable
        innerRef={connect}
        html={text}
        onClick={() => setEditable(true)}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        className={"apply-font-" + id}
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: "inherit",
        }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    activeFontFamily,
    fontSize,
    fontWeight,
    textAlign,
    actions: { setProp },
    id,
  } = useNode((node) => ({
    activeFontFamily: node.data.props.activeFontFamily,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    textAlign: node.data.props.textAlign,
  }));

  let FontPicker;
  if (typeof window !== "undefined") {
    FontPicker = dynamic(() => import("font-picker-react"), { ssr: false });
  }

  const pickerId = id.replace(/[^0-9a-z]/gi, "");

  return (
    <>
      <StyledBox css={{ mb: "$6", fontSize: "14px" }}>
        <StyledLabel htmlFor="font-picker">Font</StyledLabel>
        <FontPicker
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          id="font-picker"
          pickerId={pickerId}
          activeFontFamily={activeFontFamily}
          sort="popularity"
          limit={30}
          onChange={(nextFont) =>
            setProp((props) => (props.activeFontFamily = nextFont.family))
          }
          // filter={(font) =>
          //   Object.keys(font.files).includes("300", "400", "700")
          // }
        />
      </StyledBox>
      <StyledLabel htmlFor="text__font-size">Size</StyledLabel>
      <StyledSlider
        id="text__font-size"
        value={[fontSize]}
        onValueChange={(value) =>
          setProp((props) => (props.fontSize = value[0]))
        }
        step={1}
        min={8}
        max={144}
      />
      <StyledLabel htmlFor="text__font-weight">Weight</StyledLabel>
      <StyledToggleGroup
        id="text__font-weight"
        currentValue={fontWeight}
        onValueChange={(value) =>
          setProp((props) => (props.fontWeight = value))
        }
        valueOne={300}
        labelOne="Light"
        valueTwo={400}
        labelTwo="Regular"
        valueThree={700}
        labelThree="Bold"
      />
      <StyledLabel htmlFor="text__text-align">Align</StyledLabel>
      <StyledToggleGroup
        id="text__text-align"
        currentValue={textAlign}
        onValueChange={(value) => setProp((props) => (props.textAlign = value))}
        valueOne="left"
        labelOne="Left"
        valueTwo="center"
        labelTwo="Center"
        valueThree="right"
        labelThree="Right"
      />
    </>
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    text: "Hi",
    activeFontFamily: "Open Sans",
    fontSize: 20,
    fontWeight: 400,
    textAlign: "left",
  },
  // rules: {
  //   canDrag: (node) => node.data.props.text !== "Drag",
  // },
  related: {
    settings: TextSettings,
  },
};
