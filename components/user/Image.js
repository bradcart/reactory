import { useNode } from "@craftjs/core";
import { useState } from "react";
import { StyledImage } from "../styled/StyledImage";
import { StyledLabel } from "../styled/inputs/Label";
import { StyledForm } from "../styled/inputs/Form";
import { StyledInput } from "../styled/inputs/TextInput";
import { StyledSlider } from "../styled/inputs/Slider";
import { StyledToggleGroup } from "../styled/inputs/ToggleGroup";

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
  // const [newWidth, changeNewWidth] = useState(width);

  const updateImage = (e) => {
    e.preventDefault();
    setProp((props) => (props.src = newSrc));
  };

  // const updateWidth = (e) => {
  //   e.preventDefault();
  //   setProp((props) => (props.width = newWidth));
  // };

  return (
    // <StyledBox css={{ backgroundColor: "$black" }}>
    //   <TextInput
    //     placeholder="paste image URL here"
    //     submitValue={updateImage}
    //     formId="img-src"
    //     formLabel="Image Source"
    //   />
    //   <TextInput
    //     initialValue={width}
    //     submitValue={updateWidth}
    //     formId="img-width"
    //     formLabel="Width"
    //   />
    // </StyledBox>
    <>
      <StyledForm name="img-src" id="img-src" onSubmit={(e) => updateImage(e)}>
        <StyledLabel htmlFor="img-src">Image Source</StyledLabel>
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
      {/* <StyledForm
        name="img-width"
        id="img-width"
        onSubmit={(e) => updateWidth(e)}
      >
        <StyledLabel htmlFor="img-width">width</StyledLabel>
        <StyledInput
          id="img-width"
          type="text"
          placeholder={width}
          onChange={(e) => changeNewWidth(e.target.value)}
        />
      </StyledForm> */}
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
