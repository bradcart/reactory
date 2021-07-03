import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import { SettingsWrapper } from "../styled/settings/wrapper/index";
import { StyledBox } from "../styled/StyledBox";
import { StyledSlider } from "../styled/settings/Slider";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { ColorPicker } from "../styled/settings/ColorPicker";
import { StyledLabel } from "../styled/settings/Label";
import { StyledSeparator } from "../styled/settings/Separator";

export const Text = ({
  text,
  tagName = "p",
  activeFontFamily,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  color,
  invertDefaultTextColor,
  skipParentNode = false,
}) => {
  const {
    connectors: { connect, drag },
    id,
    selected,
    dragged,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    selected: node.events.selected,
    dragged: node.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  useEffect(() => {
    if (invertDefaultTextColor) {
      setProp((props) => (props.color = "#fff"));
    }
    if (skipParentNode) {
      setCustom((custom) => (custom.skipParentNode = true));
    }
  }, []);

  return (
    <div
      style={{
        fontWeight: fontWeight,
        textAlign: textAlign,
        pointerEvents: "auto",
      }}
    >
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
        tagName={tagName}
        className={`apply-font-${id}`}
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: "inherit",
          fontFamily: activeFontFamily,
          color: color,
          lineHeight: `${lineHeight}px`,
        }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    id,
    activeFontFamily,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    activeFontFamily: node.data.props.activeFontFamily,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    textAlign: node.data.props.textAlign,
    color: node.data.props.color,
    lineHeight: node.data.props.lineHeight,
    selected: node.events.selected,
    nodeName: node.data.custom.nodeName,
  }));

  let FontPicker;
  if (typeof window !== "undefined") {
    FontPicker = dynamic(() => import("font-picker-react"), { ssr: false });
  }

  const pickerId = id.replace(/[^0-9a-z]/gi, "");

  return (
    <SettingsWrapper
      selected={selected}
      nodeName={nodeName}
      setCustom={setCustom}
    >
      <StyledBox css={{ mt: "$1", mb: "$4", fontSize: "$3" }}>
        <StyledSeparator decorative css={{ opacity: 0 }} />
        <StyledLabel htmlFor="font-picker" css={{ mb: "$1" }}>
          Font
        </StyledLabel>
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
        max={72}
      />
      <StyledLabel htmlFor="text__line-height">Line Height</StyledLabel>
      <StyledSlider
        id="text__line-height"
        value={[lineHeight]}
        onValueChange={(value) =>
          setProp((props) => (props.lineHeight = value[0]))
        }
        step={1}
        min={1}
        max={100}
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
      <StyledSeparator />
      <ColorPicker
        onClick={(e) => setProp((props) => (props.color = e.target.value))}
      />
    </SettingsWrapper>
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    text: "Hi",
    activeFontFamily: "Poppins",
    fontSize: 20,
    fontWeight: 400,
    textAlign: "left",
    lineHeight: 28,
  },
  custom: {
    skipParentNode: false,
    nodeName: "Text",
  },
  // rules: {
  //   canDrag: (node) => node.data.props.text !== "Drag",
  // },
  related: {
    settings: TextSettings,
  },
};
