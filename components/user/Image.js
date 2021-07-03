import { useNode } from "@craftjs/core";
import { useState } from "react";
import { StyledImage } from "../styled/StyledImage";
import { SettingsWrapper } from "../styled/settings/wrapper";
import { StyledBox } from "../styled/StyledBox";
import { StyledLabel } from "../styled/settings/Label";
import { StyledForm } from "../styled/settings/Form";
import { StyledInput } from "../styled/settings/TextInput";
import { StyledSlider } from "../styled/settings/Slider";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";
import { StyledSeparator } from "../styled/settings/Separator";

export const Image = ({ src, width, height, objectFit }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} style={{ width: `${width}%`, height: `${height}%` }}>
      <StyledImage
        src={src}
        style={{
          objectFit: objectFit,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

const ImageSettings = () => {
  const {
    src,
    width,
    height,
    objectFit,
    selected,
    nodeName,
    actions: { setProp, setCustom },
  } = useNode((node) => ({
    src: node.data.props.src,
    width: node.data.props.width,
    height: node.data.props.height,
    objectFit: node.data.props.objectFit,
    selected: node.events.selected,
    nodeName: node.data.custom.nodeName,
  }));

  const [newSrc, changeNewSrc] = useState(src);

  const updateImage = (e) => {
    e.preventDefault();
    setProp((props) => (props.src = newSrc));
  };

  return (
    <SettingsWrapper
      selected={selected}
      nodeName={nodeName}
      setCustom={setCustom}
    >
      <StyledSeparator decorative css={{ opacity: 0 }} />
      <StyledForm name="image-src" onSubmit={(e) => updateImage(e)}>
        <StyledLabel htmlFor="image__src">Source</StyledLabel>
        <StyledInput
          id="image__src"
          type="text"
          placeholder="paste image URL here"
          onChange={(e) => changeNewSrc(e.target.value)}
        />
      </StyledForm>
      <StyledSeparator />
      <StyledLabel htmlFor="image__object-fit">Fit</StyledLabel>
      <StyledToggleGroup
        id="image__object-fit"
        currentValue={objectFit}
        onValueChange={(value) => setProp((props) => (props.objectFit = value))}
        valueOne="cover"
        labelOne="Fill"
        valueTwo="contain"
        labelTwo="Contain"
      />
      <StyledLabel htmlFor="image__width">Width</StyledLabel>
      <StyledSlider
        id="image__width"
        value={[width]}
        onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        step={1}
        min={0}
        max={100}
      />
      <StyledLabel htmlFor="image__height">Height</StyledLabel>
      <StyledSlider
        id="image__height"
        value={[height]}
        onValueChange={(value) => setProp((props) => (props.height = value[0]))}
        step={1}
        min={0}
        max={100}
      />
    </SettingsWrapper>
  );
};

const ImageDefaultProps = {
  src: "/placeholder.png",
  width: 100,
  height: 100,
  objectFit: "cover",
};

Image.craft = {
  displayName: "Image",
  props: ImageDefaultProps,
  custom: {
    nodeName: "Image",
  },
  related: {
    settings: ImageSettings,
  },
};
