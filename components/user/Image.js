import { useNode } from "@craftjs/core";
import { useState } from "react";
import { StyledImage } from "../styled/StyledImage";
import { StyledLabel } from "../styled/settings/Label";
import { StyledForm } from "../styled/settings/Form";
import { StyledInput } from "../styled/settings/TextInput";
import { StyledSlider } from "../styled/settings/Slider";
import { StyledToggleGroup } from "../styled/settings/ToggleGroup";

export const Image = ({ src, width, height, objectFit }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
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
    actions: { setProp },
  } = useNode((node) => ({
    src: node.data.props.src,
    width: node.data.props.width,
    height: node.data.props.height,
    objectFit: node.data.props.objectFit,
  }));

  const [newSrc, changeNewSrc] = useState(src);

  const updateImage = (e) => {
    e.preventDefault();
    setProp((props) => (props.src = newSrc));
  };

  return (
    <>
      <StyledForm name="img-src" id="img-src" onSubmit={(e) => updateImage(e)}>
        <StyledLabel htmlFor="img-src">Source</StyledLabel>
        <StyledInput
          id="img-src"
          type="text"
          placeholder="paste image URL here"
          onChange={(e) => changeNewSrc(e.target.value)}
        />
      </StyledForm>
      <StyledLabel htmlFor="img-width">Width</StyledLabel>
      <StyledSlider
        id="img-width"
        value={[width]}
        onValueChange={(value) => setProp((props) => (props.width = value[0]))}
        step={10}
        min={100}
        max={1000}
      />
      <StyledLabel htmlFor="img-height">Height</StyledLabel>
      <StyledSlider
        id="img-height"
        value={[height]}
        onValueChange={(value) => setProp((props) => (props.height = value[0]))}
        step={10}
        min={100}
        max={1000}
      />
      <StyledLabel htmlFor="img-object-fit">Fit</StyledLabel>
      <StyledToggleGroup
        id="img-object-fit"
        currentValue={objectFit}
        onValueChange={(value) => setProp((props) => (props.objectFit = value))}
        valueOne="cover"
        labelOne="Fill"
        valueTwo="contain"
        labelTwo="Contain"
      />
    </>
  );
};

const ImageDefaultProps = {
  src: "/placeholder.png",
  width: 600,
  height: 400,
  objectFit: "cover",
};

Image.craft = {
  displayName: "Image",
  props: ImageDefaultProps,
  related: {
    settings: ImageSettings,
  },
};
