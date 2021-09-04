import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import {
  SettingsWrapper,
  Slider,
  ToggleGroup,
  ColorPicker,
  Label,
  Separator,
} from "..";

export const ReactoryText = ({
  text,
  tagName = "p",
  activeFontFamily = "Poppins",
  fontSize = 20,
  fontWeight = 400,
  textAlign = "left",
  lineHeight = 28,
  width = 100,
  color,
  skipParentNode = false,
}) => {
  const [editable, setEditable] = useState(false);

  const {
    id,
    selected,
    connectors: { connect },
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // If node isn't selected disable ContentEditable
  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);
  useEffect(() => {
    if (skipParentNode) {
      setCustom((custom) => (custom.skipParentNode = true));
    }
  }, []);

  return (
    <div
      style={{
        fontWeight: fontWeight,
        textAlign: textAlign,
        width: `${width}%`,
        fontSize: `${fontSize}px`,
        fontFamily: activeFontFamily,
        color: color,
        lineHeight: `${lineHeight}px`,
      }}
    >
      <ContentEditable
        innerRef={connect}
        className={`apply-font-${id}`}
        tagName={tagName}
        html={text}
        disabled={enabled ? !editable : true}
        onClick={() => setEditable(true)}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
      />
    </div>
  );
};

const ReactoryTextSettings = () => {
  const {
    id,
    activeFontFamily,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    width,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    selected: node.events.selected,
    nodeName: node.data.custom.nodeName,
    activeFontFamily: node.data.props.activeFontFamily,
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    textAlign: node.data.props.textAlign,
    color: node.data.props.color,
    lineHeight: node.data.props.lineHeight,
    width: node.data.props.width,
  }));

  // Compatibility fix for font-picker-react
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
      <Separator decorative css={{ opacity: 0 }} />
      <Label htmlFor="font-picker" css={{ mb: "$2" }}>
        Font
      </Label>
      <div style={{ alignSelf: "flex-start", marginLeft: "2.5%" }}>
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
      </div>
      <Separator decorative css={{ opacity: 0 }} />
      <Label htmlFor="text__font-weight">Weight</Label>
      <ToggleGroup
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
      <Label htmlFor="text__font-size">Size</Label>
      <Slider
        id="text__font-size"
        value={[fontSize]}
        onValueChange={(value) =>
          setProp((props) => (props.fontSize = value[0]))
        }
        step={1}
        min={8}
        max={72}
      />
      <Separator />
      <Label htmlFor="text__text-align">Align</Label>
      <ToggleGroup
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
      <Label htmlFor="text__line-height">Line Height</Label>
      <Slider
        id="text__line-height"
        value={[lineHeight]}
        onValueChange={(value) =>
          setProp((props) => (props.lineHeight = value[0]))
        }
        step={1}
        min={1}
        max={100}
      />
      <Label htmlFor="text__width">Line Width</Label>
      <Slider
        id="text__width"
        value={[width]}
        onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        step={1}
        min={0}
        max={100}
      />
      <Separator />
      <Label htmlFor="text__color">Color</Label>
      <ColorPicker
        id="text__color"
        onClick={(e) => setProp((props) => (props.color = e.target.value))}
      />
    </SettingsWrapper>
  );
};

ReactoryText.craft = {
  displayName: "Text",
  props: {
    text: "Hi",
    activeFontFamily: "Poppins",
    fontSize: 20,
    fontWeight: 400,
    textAlign: "left",
    lineHeight: 28,
    width: 100,
  },
  custom: {
    skipParentNode: false,
    nodeName: "Text",
  },
  related: {
    settings: ReactoryTextSettings,
  },
};
